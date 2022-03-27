/* eslint-disable no-useless-computed-key */
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4120A9",
    },
    secondary: {
      main: "#9FA8EB",
    },
  },
  typography: {
    color: "#1e1e1f",
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
