import React, { createContext } from "react";
import Background from "../components/commons/background";
import GlobalStyle from "../components/mixins/globalStyles";
import Header from "../components/commons/header/index";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "../context/BurgerContext";
import { SwitchPageAnimationProvider } from "../context/SwitchPageAnimationContext";

export const ThemeContext = createContext();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      {/* <Background /> */}

      <ThemeProvider>
        <SwitchPageAnimationProvider>
          <Header />

          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} />
          </AnimatePresence>
        </SwitchPageAnimationProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
