import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { CSSVariablesResolver, MantineProvider, createTheme } from '@mantine/core';
const theme1 = createTheme({
  other: {
    colorBody: '#f1f1f1',
  },
});
const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-color-body': theme.other.colorBody,
  },
  light: {
    '--mantine-color-body': theme.other.colorBody,
  },
  dark: {
    '--mantine-color-body': theme.other.colorBody,
  },
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme1} cssVariablesResolver={resolver}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
