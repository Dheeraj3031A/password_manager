import {configureStore} from '@reduxjs/toolkit';
import passwordsReducer from './features/passwordsSlice';
import {savePasswordsToLocalStorage} from '@app/utils/localStorage';

export const store = configureStore({
  reducer: {
    passwords: passwordsReducer,
  },
});

store.subscribe(() => {
  savePasswordsToLocalStorage(store.getState().passwords.passwords);
});

export type GlobalStoreRootState = ReturnType<typeof store.getState>;
