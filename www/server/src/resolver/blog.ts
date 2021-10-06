/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */

import { Resolver, Ctx, Mutation, Arg, Query } from 'type-graphql'
// import argon2 from 'argon2'
import { MyContext } from '../../types'
import Blog from '../entities/Blog'
import BlogInput from '../utils/BlogInput'
import BlogResponse from '../utils/BlogResponse'
// import User from '../entities/User'
// import UserCredInput from '../utils/UserCredInput'
// import UserResponse from '../utils/UserResponse'

@Resolver()
export default class BlogResolver {
  @Mutation(() => BlogResponse)
  async postBlog(
    @Arg('options') options: BlogInput,
    @Ctx() { orm }: MyContext
  ): Promise<BlogResponse> {
    let blog
    try {
      const result = await orm
        .createQueryBuilder()
        .insert()
        .into(Blog)
        .values({
          author: options.author,
          link: options.link,
          blogType: options.BlogType,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        .returning('*')
        .execute()
      blog = result.raw[0]
    } catch (err) {
      console.log(err)
    }
    // put catch here
    return { blog }
  }

  @Query(() => BlogResponse)
  async getBlogs(@Ctx() { orm }: MyContext): Promise<BlogResponse> {
    const blogs = await orm.manager.find(Blog, {})

    return { blogs }
  }
}
