import { Resolver } from '@urql/exchange-graphcache'
import { stringifyVariables } from 'urql/core'

const customUrlqPagination =
  (): Resolver<any, any, any> => (_parent, fieldArgs, cache, info) => {
    const { parentKey: entityKey, fieldName } = info
    const allFields = cache.inspectFields(entityKey)
    const fieldInfos = allFields.filter((info) => info.fieldName === fieldName)
    const size = fieldInfos.length
    if (size === 0) {
      return undefined
    }
    // Fieldkey represent the methodname
    // type of query call e.i Query
    const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`

    const isStored = cache.resolve(
      cache.resolve(entityKey, fieldKey) as string,
      'getBlogs'
    )

    info.partial = !isStored
    let hasMore: boolean = true
    const results: any[] = []
    fieldInfos.forEach((fi: any) => {
      // console.log(data)
      const key = cache.resolve(entityKey, fi.fieldKey) as string
      const data = cache.resolve(key, 'blogs')
      const _hasMore = cache.resolve(key, 'hasMore')
      if (_hasMore) {
        hasMore = _hasMore as boolean
      }

      results.push(...data)
    })

    const typename = cache.resolve(
      cache.resolve(entityKey, fieldKey) as string,
      '__typename'
    ) as string

    return {
      __typename: typename,
      hasMore,
      blogs: results,
      _typename: 'PaginationResponse',
    }
    // info.partial = true
    // return result
  }
export default customUrlqPagination
