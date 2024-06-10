import InputBox from '@app/components/common/InputBox';
import {TPassword, TStoredPassword} from '@app/types/Password';
import {Dispatch, FC, SetStateAction, useState} from 'react';
import {Button, Dialog, Portal} from 'react-native-paper';
import {StyleSheet} from 'react-native';

export type TSaveButtonComponentProps = {
  hideDialog: () => void;
  data: TPassword;
};

type Props = {
  visible: boolean;
  setVisbile: Dispatch<SetStateAction<boolean>>;
  headline?: string;
  SaveButtonComponent: FC<TSaveButtonComponentProps>;
} & Partial<TStoredPassword>;

function EditorDialog({
  setVisbile,
  visible,
  headline = 'Save New Password',
  SaveButtonComponent,
  title: defaultTitle,
  description: defaultDescription,
  password: defaultPassword,
}: Props) {
  const [data, setData] = useState({
    title: defaultTitle || '',
    password: defaultPassword || '',
    description: defaultDescription || '',
  });

  function hideDialog() {
    setVisbile(false);
    if (defaultTitle || defaultTitle || defaultPassword) {
      setData({
        title: defaultTitle || '',
        description: defaultDescription || '',
        password: defaultPassword || '',
      });
      return;
    }
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
            defaultValue={defaultTitle || undefined}
            placeholder="Enter Title"
            onChangeText={(e) => setData((prev) => ({...prev, title: e}))}
          />
          <InputBox
            defaultValue={defaultDescription || undefined}
            placeholder="Enter Description (Optional)"
            onChangeText={(e) => setData((prev) => ({...prev, description: e}))}
          />
          <InputBox
            defaultValue={defaultPassword || undefined}
            placeholder="Enter Password"
            onChangeText={(e) => setData((prev) => ({...prev, password: e}))}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <SaveButtonComponent data={data} hideDialog={hideDialog} />
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
