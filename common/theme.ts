import { createMuiTheme, PaletteType } from '@material-ui/core';
let type: PaletteType = 'light';

export const themeByType = (type: PaletteType) => {
  return createMuiTheme({
    palette: {
      primary: {
        main: '#00d666',
      },
      type,
    },
  });
};
export const theme = themeByType('light');
