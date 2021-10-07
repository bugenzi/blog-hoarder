import { dedupExchange, fetchExchange } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import {
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  RegisterMutation,
} from '../generated/graphql'
import cacheUpdateQuery from './cacheUpdateHelper'

const createUrqlClient = (ssrExchange: any) => ({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: 'include' as const,
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          // eslint-disable-next-line no-unused-vars
          logout: (result, _, cache, __) =>
            cacheUpdateQuery<LogoutMutation, MeQuery>(
              cache,
              { query: MeDocument },
              result,
              () => ({
                me: null,
              })
            ),
          // eslint-disable-next-line no-unused-vars
          login: (result, _, cache, __) =>
            cacheUpdateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              result,
              (res, query) => {
                if (res.login.errors) {
                  return query
                }
                return { me: res.login.user }
              }
            ),
          // eslint-disable-next-line no-unused-vars
          register: (result, _, cache, __) =>
            cacheUpdateQuery<RegisterMutation, MeQuery>(
              cache,
              { query: MeDocument },
              result,
              (res, query) => {
                if (res.register.errors) {
                  return query
                }
                console.log('CACHE GENERATOR', res.register.user)
                return { me: res.register.user }
              }
            ),
        },
      },
    }),
    ssrExchange,
    fetchExchange,
  ],
})

export default createUrqlClient
