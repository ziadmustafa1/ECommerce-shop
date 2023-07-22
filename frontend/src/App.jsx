import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Headar1 from "./Components/header/Headar1";
import Headar2 from "./Components/header/Headar2"
import Headar3 from "./Components/header/Headar3"
import Hero from "./Components/hero/Hero";
import Main from "./Components/mian/main";
import Footer from "./Components/footer/footer"
import ScrollToTop from "./Components/scroll/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <Headar1 />
        <Headar2 />
        <Headar3 />

        <Box
        >
          <Hero />
          <Main />
        </Box>

        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;