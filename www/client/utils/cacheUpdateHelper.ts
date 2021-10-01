/* eslint-disable no-unused-vars */
import { QueryInput, Cache } from '@urql/exchange-graphcache'

function cacheUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any)
}

export default cacheUpdateQuery
