import { createGlobalStyle } from 'styled-components'

export const theme = {
  grid: {
    maxWidth: '110rem',
  },
  font: {
    family: 'Inter, sans-serif',
    sizes: {
      disclaimer: '1.2rem',
      small: '1.4rem',
      paragraph: '1.6rem',
      subtitle: '2.2rem',
      title: '3.2rem',
    },
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    gray: {
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    indigo: {
      50: '#F5F3FF',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
    },
  },
  shadow: {
    medium: '0 0 10rem 1rem rgba(0, 0, 0, 0.1)',
  },
  layers: {
    base: 1,
    alwaysOnTop: 2,
  },
  radius: {
    medium: '0.5rem',
  },
  spacing: {
    1: '0.8rem',
    2: '1.2rem',
    3: '1.6rem',
    4: '2.4rem',
    5: '3.2rem',
    6: '4.8rem',
  },
}

export const ThemeGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.paragraph};
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.gray[900]};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`
