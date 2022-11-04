import { theme } from '@theme';
import { RecoilRoot } from 'recoil';

import { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import { RootLayout } from '@web/components/layout';

/// css
import './styles.css';
import '@web/public/css/sign-in.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Container>
          <CssBaseline />
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </Container>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default CustomApp;
