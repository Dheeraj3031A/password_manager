import {Menu} from 'react-native-paper';
import * as RNFS from '@dr.pogodin/react-native-fs';
import {ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setPasswordsGlobalStore} from '@app/store/features/passwordsSlice';
import {decryptPasswordFromAESEncryption} from '@app/utils/crypto';
import {GlobalStoreRootState} from '@app/store/store';
import {removeDuplicatePasswords} from './utils/removeDuplicatePasswords';
import {TItemProps} from '../..';

function ImportFile({hideMenu}: TItemProps) {
  const currentState = useSelector(
    (state: GlobalStoreRootState) => state.passwords.passwords,
  );
  const dispatch = useDispatch();

  async function handleImport() {
    try {
      ToastAndroid.show('Select Saved File', ToastAndroid.SHORT);
      const res = await RNFS.pickFile();
      const fileData = await RNFS.readFile(res[0]);

      if (fileData) {
        const decryptedData = decryptPasswordFromAESEncryption(fileData);
        const {filteredArray, skipped} = removeDuplicatePasswords(
          currentState,
          decryptedData,
        );
        if (skipped > 0) {
          ToastAndroid.show(`Dplicates Skipped ${skipped}`, ToastAndroid.SHORT);
        }
        dispatch(setPasswordsGlobalStore(filteredArray));
      }
    } catch (e) {
      ToastAndroid.show('Error While Importing File', ToastAndroid.SHORT);
    }

    hideMenu();
  }

  return <Menu.Item title="Import" onPress={handleImport} />;
}

export default ImportFile;
