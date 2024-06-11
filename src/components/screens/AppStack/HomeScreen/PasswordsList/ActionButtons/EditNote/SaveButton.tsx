import {EditorDialogRef} from '@app/components/shared/EditorDialog';
import {setPasswordsGlobalStore} from '@app/store/features/passwordsSlice';
import {GlobalStoreRootState} from '@app/store/store';
import {RefObject} from 'react';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

type Props = {
  id: string;
  editorRef: RefObject<EditorDialogRef>;
};

function SaveButton({id, editorRef}: Props) {
  const savedPasswords = useSelector(
    (state: GlobalStoreRootState) => state.passwords.passwords,
  );
  const dispatch = useDispatch();

  function handleSave() {
    const data = editorRef.current?.getValues();

    if (!data) {
      console.log('Data not found');

      return;
    }
    const passwordItem = savedPasswords.filter((item) => item.id === id)[0];
    const filteredData = savedPasswords.filter((item) => item.id !== id);

    const updatedData = {...passwordItem, ...data};
    filteredData.push(updatedData);

    editorRef.current?.hideDialog();
    dispatch(setPasswordsGlobalStore(filteredData));
  }

  return <Button onPress={handleSave}>Save</Button>;
}

export default SaveButton;
