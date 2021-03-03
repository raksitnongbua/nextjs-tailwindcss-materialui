import { CssBaseline, PaletteType, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { theme, themeByType } from '../common/theme';
import { IRootState } from '../store';
type ReduxType = ReturnType<typeof mapStateToProps>;
const LayoutContainer: React.FC<ReduxType> = ({ children, themeType }) => {
  return (
    <ThemeProvider theme={themeByType(themeType as PaletteType)}>
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
