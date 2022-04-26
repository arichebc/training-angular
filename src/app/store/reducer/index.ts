import { routerReducer, RouterState } from '@ngrx/router-store';
import { Action, ActionReducerMap } from '@ngrx/store';

export const appStateFeatureKey = 'appState';

export interface AppState {
  router: RouterState;
}

export const rootReducer: ActionReducerMap<AppState, Action> = {
  router: routerReducer,
};
