import { PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    grey: {
      light: string;
      main: string;
      dark: string;
    };
  }
  interface PaletteOptions {
    grey?: {
      light?: string;
      main?: string;
      dark?: string;
    };
  }
}