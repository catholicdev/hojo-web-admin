// ** React Imports
import type { NextPage } from "next";
import type { AppProps } from "next/app";
// ** Next Imports
import Head from "next/head";
import { Router } from "next/router";

import type { EmotionCache } from "@emotion/cache";
// ** Emotion Imports
import { CacheProvider } from "@emotion/react";
import AclGuard from "@web/@core/components/auth/AclGuard";
import AuthGuard from "@web/@core/components/auth/AuthGuard";
import GuestGuard from "@web/@core/components/auth/GuestGuard";
// ** Spinner Import
import Spinner from "@web/@core/components/spinner";
import { SettingsConsumer, SettingsProvider } from "@web/@core/context/settingsContext";
// ** Styled Components
import ReactHotToast from "@web/@core/styles/libs/react-hot-toast";
import ThemeComponent from "@web/@core/theme/ThemeComponent";
// ** Utils Imports
import { createEmotionCache } from "@web/@core/utils/create-emotion-cache";
// ** Fake-DB Import
import "@web/@fake-db";
import { defaultACLObj } from "@web/configs/acl";
// ** Config Imports
import "@web/configs/i18n";
import themeConfig from "@web/configs/themeConfig";
// ** Contexts
import { AuthProvider } from "@web/context/AuthContext";
import "@web/iconify-bundle/icons-bundle-react";
// ** Component Imports
import UserLayout from "@web/layouts/UserLayout";
// ** Loader Import
import NProgress from "nprogress";
// ** Prismjs Styles
import "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/themes/prism-tomorrow.css";
import { ReactNode } from "react";
// ** Third Party Import
import { Toaster } from "react-hot-toast";
// ** React Perfect Scrollbar Style
import "react-perfect-scrollbar/dist/css/styles.css";
import { RecoilRoot } from "recoil";

// ** Global css styles
import "../styles/globals.css";

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

type GuardProps = {
  authGuard: boolean;
  guestGuard: boolean;
  children: ReactNode;
};

const clientSideEmotionCache = createEmotionCache();

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
}

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>;
  }
};

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Variables
  const contentHeightFixed = Component.contentHeightFixed ?? false;
  const getLayout =
    Component.getLayout ?? ((page) => <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>);

  const setConfig = Component.setConfig ?? undefined;

  const authGuard = Component.authGuard ?? true;

  const guestGuard = Component.guestGuard ?? false;

  const aclAbilities = Component.acl ?? defaultACLObj;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName} - Material Design React Admin Template`}</title>
        <meta
          name="description"
          content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
        />
        <meta name="keywords" content="Material Design, MUI, Admin Template, React Admin Template" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <AuthProvider>
        <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
          <SettingsConsumer>
            {({ settings }) => {
              return (
                <RecoilRoot>
                  <ThemeComponent settings={settings}>
                    <Guard authGuard={authGuard} guestGuard={guestGuard}>
                      <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard} authGuard={authGuard}>
                        {getLayout(<Component {...pageProps} />)}
                      </AclGuard>
                    </Guard>
                    <ReactHotToast>
                      <Toaster position={settings.toastPosition} toastOptions={{ className: "react-hot-toast" }} />
                    </ReactHotToast>
                  </ThemeComponent>
                </RecoilRoot>
              );
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </AuthProvider>
    </CacheProvider>
  );
};

export default App;
