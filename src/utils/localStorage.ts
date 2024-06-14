import {
  APP_ENCRYPTION_KEY,
  LOCAL_SAVED_PASSWORDS_KEY,
} from '@app/constants/keys';
import {TStoredPassword} from '@app/types/Password';
import EncryptedStorage from 'react-native-encrypted-storage';
import CryptoJS from 'crypto-js';

function savePasswordsToLocalStorage(passwords: TStoredPassword[]) {
  try {
    if (passwords.length === 0) {
      EncryptedStorage.setItem(LOCAL_SAVED_PASSWORDS_KEY, '');
    } else {
      const encrpytedData = CryptoJS.AES.encrypt(
        JSON.stringify(passwords),
        APP_ENCRYPTION_KEY,
      ).toString();

      EncryptedStorage.setItem(LOCAL_SAVED_PASSWORDS_KEY, encrpytedData);
    }
  } catch (e) {}
}

export {savePasswordsToLocalStorage};
