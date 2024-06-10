import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
import {setPasswordsGlobalStore} from '@app/store/features/passwordsSlice';
import {GlobalStoreRootState} from '@app/store/store';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {ToastAndroid} from 'react-native';
import {TSaveButtonComponentProps} from '@app/components/shared/EditorDialog';

function SaveButton({data, hideDialog}: TSaveButtonComponentProps) {
  const savedPasswords = useSelector(
    (state: GlobalStoreRootState) => state.passwords.passwords,
  );
  const dispatch = useDispatch();

  function handleSave() {
    if (!data.title || !data.password) {
      ToastAndroid.show('Missing Fields!', ToastAndroid.SHORT);
      return;
    }
    hideDialog();
    dispatch(
      setPasswordsGlobalStore([...savedPasswords, {...data, id: nanoid()}]),
    );
  }

  return <Button onPress={handleSave}>Save</Button>;
}

export default SaveButton;
