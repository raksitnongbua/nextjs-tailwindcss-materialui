import { createMuiTheme, PaletteMode } from '@material-ui/core';

export const themeByType = (mode: PaletteMode) => {
  return createMuiTheme({
    palette: {
      primary: {
        main: '#00d666',
      },
      mode,
    },
  });
};
export const theme = themeByType('light');
