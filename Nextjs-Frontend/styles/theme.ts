import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {

  ...theme,
  //Fonts
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  //Peso das fontes
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  //Border Radius
  radii: {
    ...theme.radii,
      sm: '5px',
      md: '8px'
    },
    //Tamanho das fontes
    fontSizes:{
      ...theme.fontSizes,
    },
    //Cores
    colors: {
      ...theme.colors,
      purple: {
        ...theme.colors.purple,
        500: '#8257e5',
      },
      gray: {
        ...theme.colors.gray,
        300: '#e1e1e6',
        600: '#29292e',
        700: '#202024',
        800: '#121214',
      }
    }
  }

export default customTheme;