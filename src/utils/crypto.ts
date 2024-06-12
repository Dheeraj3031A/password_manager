import {APP_ENCRYPTION_KEY} from '@app/constants/keys';
import {TStoredPassword} from '@app/types/Password';
import CryptoJS from 'crypto-js';

function decryptPasswordFromAESEncryption(hash: string) {
  try {
    const bytes = CryptoJS.AES.decrypt(hash, APP_ENCRYPTION_KEY);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(decryptedData) as TStoredPassword[];
  } catch (error) {
    throw error;
  }
}

export {decryptPasswordFromAESEncryption};
