import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Login } from "./components/pages/login/login";
import { GlobalStyle, theme } from "./styles/global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./components/pages/home/home";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Product />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
);
