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
    @Arg('input') input: BlogInput,
    @Ctx() { orm, req }: MyContext
  ): Promise<BlogResponse> {
    if (input.title.length <= 5) {
      return {
        errors: [
          {
            field: 'title',
            message: 'Title must be longer',
          },
        ],
      }
    }
    if (input.title.link.length <= 15 && !input.link.includes('https')) {
      return {
        errors: [
          {
            field: 'link',
            message: 'Not a proper link or the length is less then 15',
          },
        ],
      }
    }
    const isValidLink = await orm
      .getRepository(Blog)
      .createQueryBuilder('blog')
      .where('blog.link =:link', { link: input.link })
      .getOne()

    if (isValidLink) {
      return {
        errors: [
          {
            field: 'link',
            message: 'Link to the webiste has been already taken',
          },
        ],
      }
    }
    console.log(input.blogType.length)
    if (input.blogType.length <= 0) {
      return {
        errors: [
          {
            field: 'blogType',
            message: 'You need to select at least on type',
          },
        ],
      }
    }
    let blog
    try {
      const result = await orm
        .createQueryBuilder()
        .insert()
        .into(Blog)
        .values({
          ...input,
          authorId: req.session.userId,
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
