import { ThemeProvider } from '@material-ui/core';
import { theme } from '../common/theme';
import '../styles/global.css';
import { Provider } from 'react-redux';
import store from '../store';
import LayoutContainer from '../containers/layout';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LayoutContainer>
          <Component {...pageProps} />
        </LayoutContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
