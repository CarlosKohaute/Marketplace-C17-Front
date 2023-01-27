import {theme} from '../../styles/global-styles';

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}