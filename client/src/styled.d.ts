import "styled-components";
import { Theme } from "./styles/global-styles";

declare module "styled-components" {
  export interface DefaultTheme {
    light: Theme;
    dark: Theme;
  }
}
