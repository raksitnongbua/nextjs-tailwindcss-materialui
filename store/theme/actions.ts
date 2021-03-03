import { action } from 'typesafe-actions';
import { Constants } from './constants';
export const setTheme = (theme: string) => {
  return action(Constants.SET_THEME, {
    theme,
  });
};
