import 'react-native-get-random-values';
import {Menu} from 'react-native-paper';
import {TItemProps} from '..';
import * as RNFS from '@dr.pogodin/react-native-fs';
import {ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import {APP_ENCRYPTION_KEY} from '@app/constants/keys';
import {setPasswordsGlobalStore} from '@app/store/features/passwordsSlice';
import CryptoJS from 'crypto-js';

function ImportFile({hideMenu}: TItemProps) {
  const dispatch = useDispatch();

  async function handleImport() {
    try {
      ToastAndroid.show('Select Saved File', ToastAndroid.SHORT);
      const res = await RNFS.pickFile();
      ToastAndroid.show('Importing File...', ToastAndroid.SHORT);
      const fileData = await RNFS.readFile(res[0]);

      if (fileData) {
        const bytes = CryptoJS.AES.decrypt(fileData, APP_ENCRYPTION_KEY);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        dispatch(setPasswordsGlobalStore(JSON.parse(decryptedData)));
      }
    } catch (e) {
      ToastAndroid.show('Error While Importing File', ToastAndroid.SHORT);
    }

    hideMenu();
  }

  return <Menu.Item title="Import" onPress={handleImport} />;
}

export default ImportFile;
