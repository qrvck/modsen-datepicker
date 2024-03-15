import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: {
      padding: {
        xxl: string;
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
      };

      borderRadius: {
        sm: string;
      };
    };

    colors: {
      white: string;
      royal_blue: string;
      royal_blue_opacity_01: string;
      white_aluminum: string;
      gainborough: string;
      red: string;
      black: string;
      black_opacity_08: string;
    };
  }
}
