import {useState} from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import OpenSourceCode from './Items/OpenSourceCode';
import ImportFile from './Items/ImportFile';
import ExportToFile from './Items/ExportToFile';

export type TItemProps = {
  hideMenu: () => void;
};

function VerticalDotsMenu() {
  const [visible, setVisible] = useState(false);
  const {top} = useSafeAreaInsets();

  function showMenu() {
    setVisible(true);
  }

  function hideMenu() {
    setVisible(false);
  }

  return (
    <Menu
      visible={visible}
      contentStyle={styles.menu}
      onDismiss={hideMenu}
      statusBarHeight={top}
      anchor={<Appbar.Action icon={'dots-vertical'} onPress={showMenu} />}>
      <ImportFile hideMenu={hideMenu} />
      <ExportToFile hideMenu={hideMenu} />
      <OpenSourceCode hideMenu={hideMenu} />
    </Menu>
  );
}

const styles = StyleSheet.create({
  menu: {
    borderRadius: 20,
  },
});

export default VerticalDotsMenu;
