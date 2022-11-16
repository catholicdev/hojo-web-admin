import { AppProps } from "next/app";

import { theme } from "@theme";
import "@web/public/css/daily-bible.css";
import "@web/public/css/game.css";
import "@web/public/css/sign-in.css";
import { RecoilRoot } from "recoil";

import { ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import { RootLayout } from "@web/components/layout";

/// css
import "./styles.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Container sx={{ padding: 0 }}>
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
