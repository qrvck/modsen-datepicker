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
      royalBlue: string;
      whiteAluminum: string;
      gainborough: string;
      red: string;
      black: string;
    };
  }
}
