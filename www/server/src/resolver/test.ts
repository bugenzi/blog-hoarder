/* eslint-disable class-methods-use-this */
import { Resolver, Query } from 'type-graphql';

@Resolver()
export default class TestResolver {
  @Query(() => String)
  test() {
    return 'hekk';
  }
}
