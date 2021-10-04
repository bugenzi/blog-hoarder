/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { createClient, dedupExchange, fetchExchange, Provider } from 'urql'
import CssBaseline from '@mui/material/CssBaseline'
import { cacheExchange } from '@urql/exchange-graphcache'
import {
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  RegistrationMutation,
} from '../generated/graphql'
import theme from '../Component/Theme'
import cacheUpdateQuery from '../utils/cacheUpdateHelper'

const client = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: 'include',
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          // eslint-disable-next-line no-unused-vars
          logout: (result, _, cache, __) =>
            // ...
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
            // ...
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
          regiser: (result, _, cache, __) =>
            // ...
            cacheUpdateQuery<RegistrationMutation, MeQuery>(
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
    fetchExchange,
  ],
})
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
