/* eslint-disable class-methods-use-this */

import { Resolver, Ctx, Mutation, Arg } from 'type-graphql';
import { MyContext } from '../../types';
import User from '../entities/User';
import UserCredInput from '../utils/UserCredInput';
import UserResponse from '../utils/UserResponse';

@Resolver()
export default class UserResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: UserCredInput,
    @Ctx() { em }: MyContext
  ): Promise<UserResponse> {
    const user = await em.create(User, {
      username: options.username,
      password: options.password,
    });
    // if (!user) {d
    //   return { errors: [{ field: "error ", message: "something went wrong" }] };
    // }

    try {
      await em.persistAndFlush(user);
    } catch (error) {
      if (error.code === '23505') {
        console.log('erro');
      }
    }

    return { user };
  }
}
