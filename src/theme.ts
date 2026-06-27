import { createTheme } from '@mantine/core';

export const theme = createTheme({
  headings: {
    // properties for all headings
    fontWeight: '400',

    // properties for individual headings, all of them are optional
    sizes: {
      h1: {
        fontWeight: '700',
        fontSize: '24px',
      },
    },
  },
  colors: {
    //dark: lighterDark,
    //blue,
  },
});
