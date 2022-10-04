import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#629bb3",
      light: "#ecf4f8",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#c90477",
      light: "#de2691",
      contrastText: "#ffffff",
    },
    neutral: {
      main: "#ffffff",
      contrastText: "#c90477",
    },
  },

  typography: {
    fontFamily: `"Libre Franklin", "sans-serif"`,
    h1: {
      fontSize: "26px",
      fontWeight: 600,
      color: "#3b3b3b",
      marginBottom: "15px",
      "@media (max-width:600px)": {
        fontSize: "22px",
      },
    },
    h2: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#3b3b3b",
      lineHeight: 1.7,
      "@media (max-width:600px)": {
        fontSize: "18px",
      },
    },
    h3: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#3b3b3b",
      marginBottom: "12px",
      "@media (max-width:600px)": {
        fontSize: "18px",
      },
    },
    body1: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.4,
      color: "#3b3b3b",
      "@media (max-width:600px)": {
        fontSize: "16px",
        lineHeight: 1.3,
      },
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
            backgroundColor: "#de3195",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "17px 0px 22px 0px",
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
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          margin: 0,
          paddingLeft: "14px",
          left: 0,
          bottom: -28,
          position: "absolute",
          zIndex: 1,
        },
      },
    },
  },
});

export default theme;
