import InputBox, {InputBoxRef} from '@app/components/common/InputBox';
import {TPassword, TStoredPassword} from '@app/types/Password';
import {
  Dispatch,
  ReactNode,
  Ref,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import {Button, Dialog, Portal} from 'react-native-paper';
import {StyleSheet} from 'react-native';

type Props = {
  visible: boolean;
  setVisbile: Dispatch<SetStateAction<boolean>>;
  headline?: string;
  SaveButtonComponent: ReactNode;
} & Partial<TStoredPassword>;

export type EditorDialogRef = {
  getValues: () => TPassword;
  hideDialog: () => void;
};

function EditorDialog(
  {
    setVisbile,
    visible,
    headline = 'Save New Password',
    SaveButtonComponent,
    title: defaultTitle,
    description: defaultDescription,
    password: defaultPassword,
  }: Props,
  ref: Ref<EditorDialogRef>,
) {
  const titleRef = useRef<InputBoxRef>(null);
  const passwordRef = useRef<InputBoxRef>(null);
  const descriptionRef = useRef<InputBoxRef>(null);

  useImperativeHandle(ref, () => ({
    getValues() {
      return {
        title: titleRef.current?.getValue()!,
        description: descriptionRef.current?.getValue()!,
        password: passwordRef.current?.getValue()!,
      };
    },
    hideDialog() {
      dismissDialog();
    },
  }));

  function dismissDialog() {
    setVisbile(false);
    titleRef.current?.setValue(defaultTitle || '');
    descriptionRef.current?.setValue(defaultDescription || '');
    passwordRef.current?.setValue(defaultPassword || '');
  }

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={dismissDialog}
        dismissable={false}
        dismissableBackButton>
        <Dialog.Title>{headline}</Dialog.Title>
        <Dialog.Content style={styles.content}>
          <InputBox
            ref={titleRef}
            defaultValue={defaultTitle}
            placeholder="Enter Title"
          />
          <InputBox
            ref={descriptionRef}
            defaultValue={defaultDescription}
            placeholder="Enter Description (Optional)"
          />
          <InputBox
            ref={passwordRef}
            defaultValue={defaultPassword}
            placeholder="Enter Password"
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={dismissDialog}>Cancel</Button>
          {SaveButtonComponent}
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

export default forwardRef(EditorDialog);
