import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Login } from "./components/pages/login/login";
import { GlobalStyle, theme } from "./styles/global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home/home";
import { CreateUser } from "./components/pages/create-user/create-user";
import { CategoriePage } from "./components/pages/categorie-page/categorie-page";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<CreateUser />} />
        <Route path="/categories/:id" element={<CategoriePage />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
);
