import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reportReducer from './report/reportSlice';
import usersReducer from './users/usersSlice';
export const store = configureStore({
  reducer: {
    report: reportReducer,
    users: usersReducer,
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
