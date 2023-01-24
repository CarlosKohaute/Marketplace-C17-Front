import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html, #root, body{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: var(--vh, 100vh);
  background-color: ${(props) => props.theme.dark.bg};
  color: ${(props) => props.theme.dark.fg};
}`;

const colors = {
  lightPrimary: "rgb(98, 114, 164)",
  lightSecondary: "rgb(68, 71, 90)",
  middle: "rgb(139, 233, 253)",
  darkPrimary: "rgb(40, 42, 54)",
  darkSecondary: "rgb(248, 248, 242)"
};

export const theme = {
  light: { bg: colors.lightPrimary, fg: colors.lightSecondary },
  dark: { bg: colors.darkPrimary, fg: colors.darkSecondary },
};

export interface Theme {
  bg: string;
  fg: string;
}
