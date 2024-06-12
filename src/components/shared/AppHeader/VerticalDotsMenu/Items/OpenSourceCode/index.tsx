import {Menu} from 'react-native-paper';
import {Linking} from 'react-native';
import {TItemProps} from '../..';

function OpenSourceCode({hideMenu}: TItemProps) {
  function openSourceCodeOnBrowser() {
    const repoLink = 'https://github.com/ronitkrshah/password_manager.git';
    Linking.openURL(repoLink);
    hideMenu();
  }

  return <Menu.Item title="Source Code" onPress={openSourceCodeOnBrowser} />;
}

export default OpenSourceCode;
