import {
  Container,
  CssBaseline,
  PaletteMode,
  Switch,
  ThemeProvider,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { themeByType } from '../common/theme';
import * as actions from '../store/theme/actions';
import { IRootState } from '../store';
import { ThemeActions } from '../store/theme/types';
import { Dispatch } from 'redux';
import Header from '../components/header';

type ReduxType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatcherToProps>;

const LayoutContainer: React.FC<ReduxType> = ({
  themeType,
  setTheme,
  children,
}) => {
  const theme = themeByType(themeType as PaletteMode);
  useEffect(() => {
    if (themeType === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeType]);
  const handleToggleDarkMode = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        theme={themeType as PaletteMode}
        onModeChange={handleToggleDarkMode}
      />
      <Container maxWidth='md'>
        <div className='p-2'>{children}</div>
      </Container>
    </ThemeProvider>
  );
};
const mapDispatcherToProps = (dispatch: Dispatch<ThemeActions>) => {
  return {
    setTheme: (theme: string) => dispatch(actions.setTheme(theme)),
  };
};
const mapStateToProps = ({ theme: data }: IRootState) => {
  const { theme } = data;
  return { themeType: theme };
};
const connected = connect(
  mapStateToProps,
  mapDispatcherToProps
)(LayoutContainer);
export default connected;
