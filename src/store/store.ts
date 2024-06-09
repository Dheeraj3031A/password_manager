import {configureStore} from '@reduxjs/toolkit';
import passwordsReducer from './features/passwordsSlice';

export const store = configureStore({
  reducer: {
    passwords: passwordsReducer,
  },
});

export type GlobalStoreRootState = ReturnType<typeof store.getState>;
