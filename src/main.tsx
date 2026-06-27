import ReactDOM from 'react-dom/client';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import App from './App';
import { theme } from './theme';

import '@mantine/core/styles.css';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ColorSchemeScript />
    <MantineProvider theme={theme} defaultColorScheme="light">
      <App />
    </MantineProvider>
  </>
);
