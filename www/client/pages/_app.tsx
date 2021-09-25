/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { createClient, Provider } from 'urql';
import theme from '../Component/Theme';

const client = createClient({
  url: 'http://localhost:4000/graphql',
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
