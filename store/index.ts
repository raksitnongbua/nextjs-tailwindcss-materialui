import { combineReducers, createStore } from 'redux';
import { themeReducer } from './theme/reducer';
import { IThemeState } from './theme/types';
export interface IRootState {
  theme: IThemeState;
}
const store = createStore<IRootState, any, any, any>(
  combineReducers({
    theme: themeReducer,
  })
);
export default store;
