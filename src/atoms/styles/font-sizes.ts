import { RemFunction } from './context';


export interface FontSizePalate {
  title: {
    fontSize: string;
    lineHeight: string;
  };
  title2: {
    fontSize: string;
    lineHeight: string;
  };
  base: {
    fontSize: string;
    lineHeight: string;
  };
  caption: {
    fontSize: string;
    lineHeight: string;
  };
  xsmall: {
    fontSize: string;
    lineHeight: string;
  };
}

export function FontSizes(rem: RemFunction): FontSizePalate {
  return {
    title: {
      fontSize: rem(2.4),
      lineHeight: rem(3.2),
    },
    title2: {
      fontSize: rem(1.8),
      lineHeight: rem(2.4),
    },
    base: {
      fontSize: rem(1.4),
      lineHeight: rem(2.0),
    },
    caption: {
      fontSize: rem(1.2),
      lineHeight: rem(1.6),
    },
    xsmall: {
      fontSize: rem(1.0),
      lineHeight: rem(1.1),
    },
  };
}
