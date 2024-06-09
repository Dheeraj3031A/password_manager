import {configureStore} from '@reduxjs/toolkit';
import passwordsReducer from './features/passwordsSlice';
import EncryptedStorage from 'react-native-encrypted-storage';
import {LOCAL_SAVED_PASSWORDS_KEY} from '@app/constants/keys';

export const store = configureStore({
  reducer: {
    passwords: passwordsReducer,
  },
});

store.subscribe(() => {
  EncryptedStorage.setItem(
    LOCAL_SAVED_PASSWORDS_KEY,
    JSON.stringify(store.getState().passwords.passwords),
  );
});

export type GlobalStoreRootState = ReturnType<typeof store.getState>;
