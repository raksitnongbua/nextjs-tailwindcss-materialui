import { IThemeState } from './types';
import { Constants } from './constants';
const init: IThemeState = {
  theme: 'dark',
};
export const themeReducer = (
  state: IThemeState = init,
  action: any
): IThemeState => {
  switch (action.type) {
    case Constants.SET_THEME:
      return { ...state, theme: action.payload.theme };
    default:
      return state;
  }
};
