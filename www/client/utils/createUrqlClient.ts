import { cacheExchange } from '@urql/exchange-graphcache'
import Router from 'next/router'
import { dedupExchange, Exchange, fetchExchange } from 'urql'
import { pipe, tap } from 'wonka'
import {
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  RegisterMutation,
} from '../generated/graphql'
import cacheUpdateQuery from './cacheUpdateHelper'

const errorExchange: Exchange =
  ({ forward }) =>
  (ops$) =>
    pipe(
      forward(ops$),
      tap(({ error }) => {
        console.log(error)
        if (error?.message.includes('Not authentificated')) {
          Router.replace('/login')
        }
      })
    )

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
                return { me: res.register.user }
              }
            ),
        },
      },
    }),
    errorExchange,
    ssrExchange,
    fetchExchange,
  ],
})

export default createUrqlClient
