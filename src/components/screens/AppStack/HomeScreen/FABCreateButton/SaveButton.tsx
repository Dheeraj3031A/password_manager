import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
import {setPasswordsGlobalStore} from '@app/store/features/passwordsSlice';
import {GlobalStoreRootState} from '@app/store/store';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {ToastAndroid} from 'react-native';
import {EditorDialogRef} from '@app/components/shared/EditorDialog';
import {RefObject} from 'react';

type Props = {
  editorRef: RefObject<EditorDialogRef>;
};

function SaveButton({editorRef}: Props) {
  const savedPasswords = useSelector(
    (state: GlobalStoreRootState) => state.passwords.passwords,
  );
  const dispatch = useDispatch();

  function handleSave() {
    const data = editorRef.current?.getValues();
    if (!data) {
      return;
    }

    if (!data.title || !data.password) {
      ToastAndroid.show('Missing Fields!', ToastAndroid.SHORT);
      return;
    }
    editorRef.current?.hideDialog();
    dispatch(
      setPasswordsGlobalStore([...savedPasswords, {...data, id: nanoid()}]),
    );
  }

  return <Button onPress={handleSave}>Save</Button>;
}

export default SaveButton;
