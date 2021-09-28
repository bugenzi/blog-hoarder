/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
import { Resolver, Ctx, Mutation, Arg } from 'type-graphql'
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
    @Ctx() { orm }: MyContext
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
    const hashedPassowrd = await argon2.hash(options.password)
    let user
    try {
      const result = await orm
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          username: options.username,
          password: hashedPassowrd,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        .returning('*')
        .execute()
      console.log(result)
      user = result.raw[0]
    } catch (error) {
      if (error.code === '23505') {
        return {
          errors: [{ field: 'username', message: 'Name is already taken' }],
        }
      }
    }
    return { user }
  }

  // @Mutation(() => UserResponse)
  // async login(
  //   @Arg('options') options: UserCredInput,
  //   @Ctx() { em, req }: MyContext
  // ): Promise<UserResponse> {
  //   if (options.password.length <= 2) {
  //     return {
  //       errors: [{ field: 'Passowrd', message: 'Password is to short' }],
  //     }
  //   }
  //   if (options.username.length <= 2) {
  //     return {
  //       errors: [{ field: 'Username', message: 'Username is to short' }],
  //     }
  //   }

  //   const user = await em.findOne(User, {
  //     username: options.username,
  //   })

  //   const isValid = argon2.verify(user.password, options.password)

  //   if (!isValid) {
  //     return {
  //       errors: [
  //         {
  //           field: 'Passowrd',
  //           message: 'Wrong credentials',
  //         },
  //       ],
  //     }
  //   }
  //   req.session.userId = user.id
  //   return { user }
  // }

  // @Query(() => UserResponse)
  // async getUsers(@Ctx() { em }: MyContext): Promise<UserResponse> {
  //   const users = await em.find(User, {})
  //   if (!users) {
  //     return {
  //       errors: [
  //         { field: 'Users', message: 'Cannot get users something went wrong' },
  //       ],
  //     }
  //   }
  //   return { users }
  // }
}
