import { Field, ObjectType } from 'type-graphql'
import Blog from '../entities/Blog'
import FieldError from './FieldError'

@ObjectType()
export default class BlogResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]

  @Field(() => Blog, { nullable: true })
  blog?: Blog

  @Field(() => [Blog], { nullable: true })
  blogs?: Blog[]
}
