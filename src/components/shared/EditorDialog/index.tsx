import InputBox from '@app/components/common/InputBox';
import {TPassword} from '@app/types/Password';
import {Dispatch, SetStateAction} from 'react';
import {Button, Dialog, Portal} from 'react-native-paper';
import {StyleSheet} from 'react-native';

type Props = {
  visible: boolean;
  setVisbile: Dispatch<SetStateAction<boolean>>;
  headline?: string;
} & Partial<TPassword>;

function EditorDialog({
  setVisbile,
  visible,
  headline = 'Save New Password',
}: Props) {
  function hideDialog() {
    setVisbile(false);
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
          <InputBox placeholder="Enter Title" />
          <InputBox placeholder="Enter Description (Optional)" />
          <InputBox placeholder="Enter Password" />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button>Save</Button>
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
