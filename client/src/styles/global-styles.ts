import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: var(--vh, 100vh);
  background-color: ${(props) => props.theme.dark.bg};
  color: ${(props) => props.theme.dark.fg};
}`;

export const theme = {
  light: { bg: "rgb(98, 114, 164)", fg: "rgb(40, 42, 54)" },
  dark: { bg: "rgb(40, 42, 54)", fg: "rgb(98, 114, 164)" },
};

export interface Theme {
  bg: string;
  fg: string;
}
