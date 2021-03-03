import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from '../common/theme';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
