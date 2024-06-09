import InputBox from '@app/components/common/InputBox';
import {TStoredPassword} from '@app/types/Password';
import {Dispatch, SetStateAction, useState} from 'react';
import {Button, Dialog, Portal} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import SaveButton from './SaveButton';

type Props = {
  visible: boolean;
  setVisbile: Dispatch<SetStateAction<boolean>>;
  headline?: string;
} & Partial<TStoredPassword>;

function EditorDialog({
  setVisbile,
  visible,
  headline = 'Save New Password',
  title: defaultTitle,
  description: defaultDescription,
  password: defaultPassword,
}: Props) {
  const [data, setData] = useState({
    title: defaultTitle ?? '',
    password: defaultPassword ?? '',
    description: defaultDescription ?? '',
  });
  function hideDialog() {
    setVisbile(false);
    setData({title: '', description: '', password: ''});
  }

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={hideDialog}
        dismissable={false}
        dismissableBackButton>
        <Dialog.Title>{headline}</Dialog.Title>
        <Dialog.Content style={styles.content}>
          <InputBox
            defaultValue={defaultTitle ?? undefined}
            placeholder="Enter Title"
            onChangeText={(e) => setData((prev) => ({...prev, title: e}))}
          />
          <InputBox
            defaultValue={defaultDescription ?? undefined}
            placeholder="Enter Description (Optional)"
            onChangeText={(e) => setData((prev) => ({...prev, description: e}))}
          />
          <InputBox
            defaultValue={defaultPassword ?? undefined}
            placeholder="Enter Password"
            onChangeText={(e) => setData((prev) => ({...prev, password: e}))}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <SaveButton data={data} hideDialog={hideDialog} />
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 20,
  },
});

export default EditorDialog;
