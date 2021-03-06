import { InputType, Field } from 'type-graphql'

@InputType()
export default class BlogInput {
  @Field()
  link: string

  @Field()
  title: string

  @Field()
  text: string

  @Field({ nullable: true })
  imageUrl?: string

  @Field(() => [String])
  blogType: string[]
}
