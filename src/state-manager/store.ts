import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import reportReducer from './report/reportSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    report: reportReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
