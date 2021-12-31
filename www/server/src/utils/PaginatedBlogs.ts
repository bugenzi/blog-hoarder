import { Field, ObjectType } from 'type-graphql'
import Blog from '../entities/Blog'

@ObjectType()
export default class PaginationResponse {
  @Field(() => [Blog])
  blogs?: Blog[]

  @Field()
  hasMore: boolean
}
