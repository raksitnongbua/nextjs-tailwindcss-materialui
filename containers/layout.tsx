import { CssBaseline, PaletteType, ThemeProvider } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { themeByType } from '../common/theme';
import { IRootState } from '../store';
type ReduxType = ReturnType<typeof mapStateToProps>;
const LayoutContainer: React.FC<ReduxType> = ({ children, themeType }) => {
  const theme = themeByType(themeType as PaletteType);
  useEffect(() => {
    if (themeType === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeType]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

const mapStateToProps = ({ theme: data }: IRootState) => {
  const { theme } = data;
  return { themeType: theme };
};
const connected = connect(mapStateToProps)(LayoutContainer);
export default connected;
