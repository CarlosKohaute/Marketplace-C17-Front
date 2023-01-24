import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Home } from "./components/pages/home";
import { Login } from "./components/pages/login/login";
import { GlobalStyle, theme } from "./styles/global-styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
