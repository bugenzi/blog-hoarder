/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
import { Resolver, Ctx, Mutation, Arg, Query } from 'type-graphql'
import argon2 from 'argon2'
import { v4 } from 'uuid'
import { MyContext } from '../../types'
import User from '../entities/User'
import UserCredInput from '../utils/UserCredInput'
import UserResponse from '../utils/UserResponse'
import sendMail from '../utils/nodemailer'

@Resolver()
export default class UserResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: UserCredInput,
    @Ctx() { orm, req }: MyContext
  ): Promise<UserResponse> {
    if (!options.email.includes('@')) {
      return {
        errors: [{ field: 'email', message: 'Wrong email format' }],
      }
    }
    if (options.password.length <= 2) {
      return {
        errors: [{ field: 'Passowrd', message: 'Password is to short' }],
      }
    }
    if (options.username.length <= 2) {
      return {
        errors: [{ field: 'Username', message: 'Username is to short' }],
      }
    }
    const hashedPassword = await argon2.hash(options.password)
    let user
    try {
      const result = await orm
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          username: options.username,
          password: hashedPassword,
          email: options.email,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        .returning('*')
        .execute()
      user = result.raw[0]
    } catch (error) {
      if (error.code === '23505') {
        return {
          errors: [{ field: 'username', message: 'Name is already taken' }],
        }
      }
    }
    req.session.userId = user.id
    return { user }
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('usernameOrEmail') usernameOrEmail: string,
    @Arg('password') password: string,
    @Ctx() { orm, req }: MyContext
  ): Promise<UserResponse> {
    const isEmail = usernameOrEmail.includes('@')
      ? { email: usernameOrEmail }
      : { username: usernameOrEmail }
    const queryObject = {
      name: isEmail.email ? 'user.email = :email' : 'user.username = :username',
      value: isEmail,
    }

    const user = await orm
      .getRepository(User)
      .createQueryBuilder('user')
      .where(queryObject.name, { ...queryObject.value })
      .getOne()
    if (!user) {
      return {
        errors: [{ field: 'usernameOrEmail', message: 'Wrong credintials ' }],
      }
    }
    const isValid = await argon2.verify(user.password, password)
    if (!isValid) {
      return {
        errors: [
          {
            field: 'usernameOrEmail',
            message: 'Wrong credentials',
          },
        ],
      }
    }
    req.session.userId = user.id
    return { user }
  }

  @Query(() => UserResponse)
  async getUsers(@Ctx() { orm }: MyContext): Promise<UserResponse> {
    // const users = await em.find(User, {})
    const users = await orm.manager.find(User, {})
    if (!users) {
      return {
        errors: [
          { field: 'Users', message: 'Cannot get users something went wrong' },
        ],
      }
    }
    return { users }
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() { orm, req }: MyContext) {
    // const users = await em.find(User, {})
    if (!req.session.userId) {
      return null
    }
    return orm.manager.findOne(User, {
      id: req.session.userId,
    })
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((response) =>
      req.session.destroy((err) => {
        if (err) {
          response(false)
          return
        }
        res.clearCookie('qid')
        response(true)
      })
    )
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg('email') email: string,
    @Ctx() { redis, orm }: MyContext
  ) {
    const user = await orm.manager.findOne(User, { email })
    if (!user) {
      return true
    }
    const exporationTime = 60 * 60 * 24
    const token = v4()
    await redis.set(
      process.env.UID_SECRET + token,
      user.id,
      'ex',
      exporationTime
    ) // 24h expiration
    const url = `<a href="http://localhost:3000/reset-password/${token}">Click here to restart your password</a> `
    await sendMail(user.email, url)

    return true
  }

  @Mutation(() => UserResponse)
  async changePassword(
    @Arg('token') token: string,
    @Arg('newPassword') newPassword: string,
    @Ctx()
    { redis, orm }: MyContext
  ): Promise<UserResponse> {
    if (newPassword.length < 3) {
      return {
        errors: [
          {
            field: 'newPassword',
            message: 'Password needs to be at least 3 characters long',
          },
        ],
      }
    }
    const REDIS_TOKEN = process.env.UID_SECRET + token
    const UserId = await redis.get(REDIS_TOKEN)

    if (!UserId) {
      return {
        errors: [
          {
            field: 'token',
            message: 'Token expired ask for new one ',
          },
        ],
      }
    }
    const hashedPassword = await argon2.hash(newPassword)
    const user = await orm.manager.findOne(User, { id: parseInt(UserId, 10) })

    if (!user) {
      return {
        errors: [{ field: 'token', message: 'user no longer exist' }],
      }
    }
    user.password = hashedPassword
    user.save()
    redis.del(REDIS_TOKEN)

    return { user }
  }
}
