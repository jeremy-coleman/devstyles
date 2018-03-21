import { RemFunction } from './context';
//import { FontWeightPalate } from './font-weight-palate';


export interface FontWeightPalate {
  semilight: {
    fontFamily: string;
    fontWeight: number;
  };
  regular: {
    fontFamily: string;
    fontWeight: number;
  };
  semibold: {
    fontFamily: string;
    fontWeight: number;
  };
  bold: {
    fontFamily: string;
    fontWeight: number;
  };
}

export function FontWeights(rem: RemFunction): FontWeightPalate {
  return {
    semilight: {
      fontFamily: "'Segoe UI Light', 'Segoe UI', Tahoma, Helvetica, Sans-Serif",
      fontWeight: 300,
    },
    regular: {
      fontFamily: "'Segoe UI', Tahoma, Helvetica, Sans-Serif",
      fontWeight: 400,
    },
    semibold: {
      fontFamily: "'Segoe UI Semibold', 'Segoe UI', Tahoma, Helvetica, Sans-Serif",
      fontWeight: 600,
    },
    bold: {
      fontFamily: "'Segoe UI Bold', 'Segoe UI', Tahoma, Helvetica, Sans-Serif",
      fontWeight: 700,
    },
  };
}
