/* eslint-disable class-methods-use-this */
import { Resolver, Query } from "type-graphql";
// import UserCredInput from "../utils/UserCredInput";
// import UserResponse from "../utils/UserResponse";
// import User from "../entities/User";

Resolver();
export default class UserResolver {
  @Query(() => String)
  test() {
    return "hello world";
  }
}
