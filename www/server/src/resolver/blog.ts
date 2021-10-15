/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */

import {
  Resolver,
  Ctx,
  Mutation,
  Arg,
  Query,
  UseMiddleware,
} from 'type-graphql'
import { MyContext } from '../../types'
import Blog from '../entities/Blog'
import BlogInput from '../utils/BlogInput'
import BlogResponse from '../utils/BlogResponse'
import isAuth from '../utils/isAuth'

@Resolver()
export default class BlogResolver {
  @Mutation(() => BlogResponse)
  @UseMiddleware(isAuth)
  async postBlog(
    @Arg('options') options: BlogInput,
    @Ctx() { orm, req }: MyContext
  ): Promise<BlogResponse> {
    let blog
    try {
      const result = await orm
        .createQueryBuilder()
        .insert()
        .into(Blog)
        .values({
          // authorId: userId,
          title: options.title,
          link: options.link,
          text: options.text,
          authorId: req.session.userId,
          blogType: options.BlogType,
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
    console.log(blogs)
    return { blogs }
  }
}
