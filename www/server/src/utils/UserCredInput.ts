import { InputType, Field } from 'type-graphql'

@InputType()
export default class UserCredInput {
  @Field()
  username: string

  @Field()
  email: string

  @Field()
  password: string
}
