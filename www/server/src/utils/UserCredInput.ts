import { InputType, Field } from "type-graphql";

@InputType()
export default class UserCredInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
