/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { createClient, dedupExchange, fetchExchange, Provider } from 'urql'
import CssBaseline from '@mui/material/CssBaseline'
import { cacheExchange } from '@urql/exchange-graphcache'
import { LogoutMutation, MeDocument, MeQuery } from '../generated/graphql'
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
          logout: (_result, args, cache, result) =>
            // ...
            cacheUpdateQuery<LogoutMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              () => ({
                me: null,
              })
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
