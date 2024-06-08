import {useState} from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {Linking, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function VerticalDotsMenu() {
  const [visible, setVisible] = useState(false);
  const {top} = useSafeAreaInsets();

  function showMenu() {
    setVisible(true);
  }

  function hideMenu() {
    setVisible(false);
  }

  function openSourceCodeOnBrowser() {
    const repoLink = 'https://github.com/ronitkrshah/password_manager.git';
    hideMenu();
    Linking.openURL(repoLink);
  }

  return (
    <Menu
      visible={visible}
      contentStyle={styles.menu}
      onDismiss={hideMenu}
      statusBarHeight={top}
      anchor={<Appbar.Action icon={'dots-vertical'} onPress={showMenu} />}>
      <Menu.Item title={'Source Code'} onPress={openSourceCodeOnBrowser} />
    </Menu>
  );
}

const styles = StyleSheet.create({
  menu: {
    borderRadius: 20,
  },
});

export default VerticalDotsMenu;
