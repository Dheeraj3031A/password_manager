import {Menu} from 'react-native-paper';
import {TItemProps} from '..';
import * as RNFS from '@dr.pogodin/react-native-fs';
import {ANDROID_APP_FILE_STORE_DIRECTORY_PATH} from '@app/constants/storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import {LOCAL_SAVED_PASSWORDS_KEY} from '@app/constants/keys';
import {ToastAndroid} from 'react-native';

function ExportToFile({hideMenu}: TItemProps) {
  const today = new Date();
  async function handleImport() {
    try {
      const encryptedPasswords = await EncryptedStorage.getItem(
        LOCAL_SAVED_PASSWORDS_KEY,
      );

      if (encryptedPasswords) {
        const isDirExists = await RNFS.exists(
          ANDROID_APP_FILE_STORE_DIRECTORY_PATH,
        );
        if (!isDirExists) {
          await RNFS.mkdir(ANDROID_APP_FILE_STORE_DIRECTORY_PATH);
        }

        await RNFS.writeFile(
          `${ANDROID_APP_FILE_STORE_DIRECTORY_PATH}/passwords-${today.getDate()}-${
            today.getMonth() + 1
          }-${today.getFullYear()}-${today.getTime()}`,
          encryptedPasswords,
        );

        ToastAndroid.show(
          `File Saved On: ${ANDROID_APP_FILE_STORE_DIRECTORY_PATH}`,
          ToastAndroid.LONG,
        );
      }
    } catch (error) {
      ToastAndroid.show('Error exporting data', ToastAndroid.SHORT);
    } finally {
      hideMenu();
    }
  }

  return <Menu.Item title="Export" onPress={handleImport} />;
}

export default ExportToFile;
