import { ThemeProvider } from "styled-components";
import GlobalStyles from "../global.styles";

function theme() {
  return {
    fonts: {
      inter: "Inter, sans-serif",
      condensed: "Roboto Condensed, sans-serif",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      blue: "#4A8EFF",
      dark: "#191919",
      grey: "#C4C4C4",
    },
    padding: {
      lg: "0 min(2.8vw, 40px)",
    },
  };
}

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
