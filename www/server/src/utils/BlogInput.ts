import { InputType, Field } from 'type-graphql'

@InputType()
export default class BlogInput {
  @Field()
  link: string

  @Field()
  author: string

  @Field(() => [String])
  BlogType: string[]
}
