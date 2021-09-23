import { Field, ObjectType } from 'type-graphql';
import User from '../entities/User';
import FieldError from './FieldError';

@ObjectType()
export default class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [User], { nullable: true })
  users?: User[];
}
