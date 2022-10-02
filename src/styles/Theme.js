import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#629bb3",
      light: "#ecf4f8",
    },
    secondary: {
      main: "#c90477",
      light: "#de2691",
    },
  },

  typography: {
    fontFamily: `"Libre Franklin", "sans-serif"`,
    h1: {
      fontSize: "26px",
      fontWeight: 600,
      color: "#3b3b3b",
      marginBottom: "10px",
    },
    h2: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#3b3b3b",
      lineHeight: 1.7,
    },
    h3: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#3b3b3b",
      marginBottom: "10px",
    },
    body1: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.3,
      color: "#3b3b3b",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "20px",
          fontSize: "17px",
          padding: "5px 25px",
          boxShadow: "none",
          margin: "10px 0px",
          "&:hover": {
            backgroundColor: "#de2691",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "10px 0px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#c90477",
          },
          "&:focus .MuiOutlinedInput-notchedOutline": {
            borderColor: "#c90477",
          },
          borderRadius: "12px",
        },
        notchedOutline: {
          border: "2px solid #c90477",
        },
      },
    },
    /*MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#c90477",
        },
      },
    },*/
  },
});

export default theme;
