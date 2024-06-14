import {Menu} from 'react-native-paper';
import {TItemProps} from '../..';
import {ToastAndroid} from 'react-native';
import exportPasswords from './utils/exportPasswords';

function ExportToFile({hideMenu}: TItemProps) {
  async function handleExport() {
    const response = await exportPasswords();
    if (response.success) {
      ToastAndroid.show(
        'File Exported on Documents Directory',
        ToastAndroid.SHORT,
      );
    } else {
      ToastAndroid.show(response.errorMessage, ToastAndroid.SHORT);
    }

    hideMenu();
  }

  return <Menu.Item title="Export" onPress={handleExport} />;
}

export default ExportToFile;
