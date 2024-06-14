import {LOCAL_SAVED_PASSWORDS_KEY} from '@app/constants/keys';
import {ANDROID_APP_FILE_STORE_DIRECTORY_PATH} from '@app/constants/storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import * as FileSystem from '@dr.pogodin/react-native-fs';

type TResponseExportPasswords = {
  success: boolean;
  errorMessage: string;
};

async function exportPasswords(): Promise<TResponseExportPasswords> {
  const localDir = ANDROID_APP_FILE_STORE_DIRECTORY_PATH;

  const responseObj: TResponseExportPasswords = {
    success: false,
    errorMessage: 'Something Went Wrong!',
  };

  try {
    const localPasswords = await EncryptedStorage.getItem(
      LOCAL_SAVED_PASSWORDS_KEY,
    );

    if (localPasswords) {
      const isLocalDirAlreadyExists = await FileSystem.exists(localDir);
      !isLocalDirAlreadyExists && (await FileSystem.mkdir(localDir));
      await FileSystem.writeFile(`${localDir}/${Date.now()}`, localPasswords);
      responseObj.success = true;
    } else {
      responseObj.errorMessage = 'No Saved Passwords Available!';
    }
  } catch (e) {
    responseObj.errorMessage = (e as Error).message;
  } finally {
    return responseObj;
  }
}

export default exportPasswords;
