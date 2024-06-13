import {Menu} from 'react-native-paper';
import * as RNFS from '@dr.pogodin/react-native-fs';
import {ToastAndroid} from 'react-native';
import {TItemProps} from '../..';
import ConfirmationDialog from './ConfirmationDialog';
import {useState} from 'react';
import {decryptPasswordFromAESEncryption} from '@app/utils/crypto';
import {TStoredPassword} from '@app/types/Password';

function ImportFile({hideMenu}: TItemProps) {
  const [showDialog, setShowDialog] = useState(false);
  const [decryptedPasswords, setDecryptedPasswords] = useState<
    TStoredPassword[]
  >([]);

  async function handleImport() {
    try {
      ToastAndroid.show('Select Saved File', ToastAndroid.SHORT);
      const res = await RNFS.pickFile();
      const fileData = await RNFS.readFile(res[0]);
      const data = decryptPasswordFromAESEncryption(fileData);
      setDecryptedPasswords(data);
      setShowDialog(true);
    } catch (e) {
      if (e instanceof Error) {
        ToastAndroid.show(`Error: ${e.message}`, ToastAndroid.SHORT);
      }
      hideMenu();
    }
  }

  return (
    <>
      <Menu.Item title="Import" onPress={handleImport} />
      <ConfirmationDialog
        decryptedPasswords={decryptedPasswords}
        visible={showDialog}
        setVisible={setShowDialog}
        hideMenu={hideMenu}
      />
    </>
  );
}

export default ImportFile;
