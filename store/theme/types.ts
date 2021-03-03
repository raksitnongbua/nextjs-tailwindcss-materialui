import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
export interface IThemeState {
  theme: string;
}

export type ThemeActions = ActionType<typeof actions>;
