import { extendTheme, ITheme } from 'native-base';

/**
 * Learn more about extending/customizing theme:
 * https://docs.nativebase.io/default-theme
 * https://docs.nativebase.io/customizing-theme
 * https://docs.nativebase.io/customizing-components
 * https://docs.nativebase.io/utility-props#style-props
 * https://reactnavigation.org/docs/themes/
 */

const schema = {
  50: '#27272A',
  100: '#71717A',
  200: '#e2e8f0',
  300: '#00CD38',
  400: '#2563EB',
  500: '#3F3F46',
  600: '#0284c7',
  700: '#00CD38',
  800: '#002851',
  900: '#27272A',
};

const dark = {
  primary: schema[300],
  background: schema[900],
  card: schema[900],
  text: schema[100],
  border: schema[400],
  notification: schema[400],
};

const light = {
  primary: schema[700],
  background: schema[50],
  card: schema[50],
  text: schema[100],
  border: schema[600],
  notification: schema[600],
};

export const theme: ITheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  colors: {
    primary: schema,
    text: schema,
    dark: dark,
    light: light,
  },
  fonts: {},
  components: {
    Button: {
      defaultProps: {
        bgColor: 'primary.700',
        color: 'primary.200',
        borderRadius: 12,
        colorScheme: 'primary.700',
        variant: 'solid',
      },
    },
    Text: {
      defaultProps: {
        color: 'primary.100',
        fontSize: 'md',
      },
    },
    Input: {
      defaultProps: {
        colorScheme: 'primary',
        variant: 'filled',
        padding: 4,
        fontSize: 'sm',
      },
    },
    Select: {
      defaultProps: {
        colorScheme: 'primary',
        variant: 'filled',
      },
    },
    ModalContent: {
      baseStyle: {
        _light: { bg: 'primary.50' },
        _dark: { bg: 'primary.900' },
      },
    },
  },
});

export const navLightTheme = {
  dark: false,
  colors: light,
};

export const navDarkTheme = {
  dark: true,
  colors: dark,
};
