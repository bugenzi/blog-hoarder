/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */

import {
  Resolver,
  Ctx,
  Mutation,
  Arg,
  Query,
  UseMiddleware,
  Int,
} from 'type-graphql'
import { MyContext } from '../../types'
import Blog from '../entities/Blog'
import BlogInput from '../utils/BlogInput'
import BlogResponse from '../utils/BlogResponse'
import isAuth from '../utils/isAuth'
import PaginationResponse from '../utils/PaginatedBlogs'

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
          id: 90,
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

  @Query(() => PaginationResponse)
  async getBlogs(
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null,
    @Ctx() { orm }: MyContext
  ): Promise<PaginationResponse> {
    const fetchLimit = Math.min(20, limit)
    const fetchLimitPlus = fetchLimit + 1
    const replacements: any[] = [fetchLimitPlus]
    if (cursor) {
      replacements.push(new Date(parseInt(cursor, 10)))
    }

    const blogs = await orm.query(
      `
    select b.* ,
    json_build_object (
      'id',u.id,
      'username',u.username,
      'createdAt', u."createdAt"
      
    )author
    from blog b
    inner join public.user u on u.id=b."authorId"
    ${cursor ? 'where b."createdAt"<$2' : ''}
    order by b."createdAt" DESC
    limit $1
    `,
      replacements
    )
    console.log(replacements)
    return { blogs, hasMore: blogs.length === fetchLimitPlus }
    // TODO : BUILD better and custom sql query for geting blogs

    // const blogs = await orm.query()
    // const blogs = await result.getMany()
    // return { blogs }
  }
}
