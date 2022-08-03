import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import appTheme from "../src/theme/appTheme";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import Layouts from "../src/layouts/layouts";
import "../src/styles/style.css";
let themeType = "light";
const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState({
    ...appTheme("default", themeType),
  });

  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const muiTheme = createTheme(theme);

  const toggleDirection = (dir) => {
    document.dir = dir;
    setTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette,
      },
    });
  };
  useEffect(() => {
    document.dir = "rtl";
  }, []);
  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={cacheRtl}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={muiTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layouts>
            <Component {...pageProps} />
          </Layouts>
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
export default MyApp;
