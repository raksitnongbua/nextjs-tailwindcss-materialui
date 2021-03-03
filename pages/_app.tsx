import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
