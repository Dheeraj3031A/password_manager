import Clipboard from '@react-native-clipboard/clipboard';
import {useState} from 'react';
import {IconButton} from 'react-native-paper';

type Props = {
  password: string;
};

function CopyPassword({password}: Props) {
  const [isCopying, setIsCopying] = useState(false);

  function copyPasswordToClipboard() {
    setIsCopying(true);
    Clipboard.setString(password);
    setTimeout(() => {
      setIsCopying(false);
    }, 1500);
  }

  return (
    <IconButton
      animated
      icon={isCopying ? 'check' : 'content-copy'}
      onPress={copyPasswordToClipboard}
    />
  );
}

export default CopyPassword;
