import {Appbar} from 'react-native-paper';
import VerticalDotsMenu from './VerticalDotsMenu';

type Props = {
  title: string;
};

function AppHeader({title}: Props) {
  return (
    <Appbar.Header mode="large">
      <Appbar.Content title={title} />
      <VerticalDotsMenu />
    </Appbar.Header>
  );
}

export default AppHeader;
