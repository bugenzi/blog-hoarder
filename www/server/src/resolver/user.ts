/* eslint-disable class-methods-use-this */
import { Resolver, Ctx, Mutation, Arg, Query } from 'type-graphql'
import argon2 from 'argon2'
import { MyContext } from '../../types'
import User from '../entities/User'
import UserCredInput from '../utils/UserCredInput'
import UserResponse from '../utils/UserResponse'

@Resolver()
export default class UserResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: UserCredInput,
    @Ctx() { em }: MyContext
  ): Promise<UserResponse> {
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
    const hashedPassowrd = argon2.hash(options.password)
    const user = await em.create(User, {
      username: options.username,
      password: hashedPassowrd,
    })

    try {
      await em.persistAndFlush(user)
    } catch (error) {
      if (error.code === '23505') {
        return {
          errors: [
            { field: 'Registration error', message: 'Name is already taken' },
          ],
        }
      }
    }
    return { user }
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('options') options: UserCredInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
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

    const user = await em.findOne(User, {
      username: options.username,
    })

    const isValid = argon2.verify(user.password, options.password)

    if (!isValid) {
      return {
        errors: [
          {
            field: 'Passowrd',
            message: 'Wrong credentials',
          },
        ],
      }
    }
    req.session.userId = user.id
    return { user }
  }

  @Query(() => UserResponse)
  async getUsers(@Ctx() { em }: MyContext): Promise<UserResponse> {
    const users = await em.find(User, {})
    if (!users) {
      return {
        errors: [
          { field: 'Users', message: 'Cannot get users something went wrong' },
        ],
      }
    }
    return { users }
  }
}
