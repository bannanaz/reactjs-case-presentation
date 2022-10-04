import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./pages/App";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/Theme";
import reportWebVitals from "./reportWebVitals";

//App is wrapped in MUI ThemeProvider to provide theme to all components
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
