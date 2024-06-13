import {Dispatch, SetStateAction} from 'react';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {TItemProps} from '../..';
import {TStoredPassword} from '@app/types/Password';
import {removeDuplicatePasswords} from './utils/removeDuplicatePasswords';
import {GlobalStoreRootState} from '@app/store/store';
import {useDispatch, useSelector} from 'react-redux';
import {setPasswordsGlobalStore} from '@app/store/features/passwordsSlice';

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  decryptedPasswords: TStoredPassword[];
} & TItemProps;

function ConfirmationDialog({
  visible,
  setVisible,
  hideMenu,
  decryptedPasswords,
}: Props) {
  const currentState = useSelector(
    (state: GlobalStoreRootState) => state.passwords.passwords,
  );
  const dispatch = useDispatch();

  function dismissDialog() {
    setVisible(false);
    hideMenu();
  }

  // TODO: Give a Better Function Name :)
  function afterImport() {
    dismissDialog();
    hideMenu();
    ToastAndroid.show('Importing Finished', ToastAndroid.SHORT);
  }

  function appendData() {
    const {skipped, filteredArray} = removeDuplicatePasswords(
      currentState,
      decryptedPasswords,
    );
    dispatch(setPasswordsGlobalStore(filteredArray));
    if (skipped > 0) {
      ToastAndroid.show(`Duplicates Skipped ${skipped}`, ToastAndroid.SHORT);
    }
    afterImport();
  }

  function clearExistingPasswords() {
    dispatch(setPasswordsGlobalStore(decryptedPasswords));
    afterImport();
  }

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={dismissDialog}>
        <Dialog.Title>Select Method</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">
            You have existing saved Passwords. How would you like to proceed
            with importing new Passwords?
          </Text>
          <View style={styles.methodDesc}>
            <Text>
              <Text variant="titleMedium">Append Method: </Text>
              Imported Passwords will be appended with current stored Passwords.
            </Text>
            <Text>
              <Text variant="titleMedium">Clean: </Text>
              Clear all current Passwords and save imported Passwords.
            </Text>
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button disabled={currentState.length < 1} onPress={appendData}>
            Append
          </Button>
          <Button onPress={clearExistingPasswords}>Clean</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  methodDesc: {
    marginTop: 20,
    gap: 10,
  },
});

export default ConfirmationDialog;
