import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from '../features/rootReducer';
import { thunk } from 'redux-thunk';
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});