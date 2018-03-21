import { ColorPalate } from './colors';
import { CSSFunction } from './context';
//import { ThemeStyle } from './theme-style';

export enum ThemeStyle {
  Light = 0,
  Dark = 1,
  HighContrast = 2,
}

export interface ThemeConfig {
  baseFontSize: number;
  style: ThemeStyle;
  colors?: ColorPalate;
  css?: CSSFunction;
}
