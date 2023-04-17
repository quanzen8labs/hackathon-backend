import type { AppState, AppStore } from '@/stores';
import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

// type ThunkAction<T = any> = (dispatch: Dispatch, state: AppStore['getState']) => Promise<T>;

type ThunkAction<
  R, // Return type of the thunk function
> = (dispatch: ThunkDispatch<AppState, any, AnyAction>, state: AppStore['getState']) => Promise<R>;

export const createAsyncAction = <T = any, R = any>(cb: (arg: T) => ThunkAction<R>) => {
  return cb;
};
