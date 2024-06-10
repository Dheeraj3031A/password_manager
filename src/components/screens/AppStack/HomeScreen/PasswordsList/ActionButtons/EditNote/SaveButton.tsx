import {TSaveButtonComponentProps} from '@app/components/shared/EditorDialog';
import {setPasswordsGlobalStore} from '@app/store/features/passwordsSlice';
import {GlobalStoreRootState} from '@app/store/store';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

type Props = {
  id: string;
} & TSaveButtonComponentProps;

function SaveButton({id, data, hideDialog}: Props) {
  const savedPasswords = useSelector(
    (state: GlobalStoreRootState) => state.passwords.passwords,
  );
  const dispatch = useDispatch();

  function handleSave() {
    hideDialog();
    const passwordItem = savedPasswords.filter((item) => item.id === id)[0];
    const filteredData = savedPasswords.filter((item) => item.id !== id);

    const updatedData = {...passwordItem, ...data};
    filteredData.push(updatedData);

    dispatch(setPasswordsGlobalStore(filteredData));
  }

  return <Button onPress={handleSave}>Save</Button>;
}

export default SaveButton;
