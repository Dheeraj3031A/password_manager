import {configureStore} from '@reduxjs/toolkit';
import passwordsReducer from './features/passwordsSlice';
import EncryptedStorage from 'react-native-encrypted-storage';
import {
  APP_ENCRYPTION_KEY,
  LOCAL_SAVED_PASSWORDS_KEY,
} from '@app/constants/keys';
import CryptoJS from 'crypto-js';

export const store = configureStore({
  reducer: {
    passwords: passwordsReducer,
  },
});

store.subscribe(() => {
  const encrpytedData = CryptoJS.AES.encrypt(
    JSON.stringify(store.getState().passwords.passwords),
    APP_ENCRYPTION_KEY,
  ).toString();

  EncryptedStorage.setItem(LOCAL_SAVED_PASSWORDS_KEY, encrpytedData);
});

export type GlobalStoreRootState = ReturnType<typeof store.getState>;
