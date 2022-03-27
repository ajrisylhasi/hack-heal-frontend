/* eslint-disable no-useless-computed-key */
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4120A9",
      light: "#F0FDFD",
      heading: "#9FA8EB",
    },
    secondary: {
      main: "#9FA8EB",
    },
  },
  typography: {
    color: "#1e1e1f",
    fontFamily: "Jost",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 768,
      lg: 992,
      xl: 1260,
    },
  },
});

export default theme;
