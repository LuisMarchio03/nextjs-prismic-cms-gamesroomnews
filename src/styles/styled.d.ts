import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    color: {
      white: string;

      header: string;
      bg: string;

      gray50: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray500: string;
      gray800: string;

      green500: string;

      blue800: string;

      brown: string;

      purple300: string;
      purple400: string;
      purple500: string;
      purple600: string;
      purple800: string;

      discord: string;
      facebook: string;
      instagram: string;
    }
  }
}