import { RemFunction } from './context';
//import { SpacingPalate } from './spacing-palate';


export interface SpacingPalate {
  xxxSmall: string;
  xxSmall: string;
  xSmall: string;
  small: string;
  base: string;
  large: string;
  xLarge: string;
  xxLarge: string;
  xxxLarge: string;
}

export function Spacing(rem: RemFunction): SpacingPalate {
  return {
    xxxSmall: rem(0.2),
    xxSmall: rem(0.4),
    xSmall: rem(0.8),
    small: rem(1.2),
    base: rem(1.6),
    large: rem(2.0),
    xLarge: rem(2.4),
    xxLarge: rem(2.8),
    xxxLarge: rem(3.2),
  };
}
