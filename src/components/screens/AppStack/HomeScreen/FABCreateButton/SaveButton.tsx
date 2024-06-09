import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
import {setPasswordsGlobalStore} from '@app/store/features/passwordsSlice';
import {GlobalStoreRootState} from '@app/store/store';
import {TPassword} from '@app/types/Password';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

type Props = {
  data: TPassword;
  hideDialog: () => void;
};

function SaveButton({data, hideDialog}: Props) {
  const savedPasswords = useSelector(
    (state: GlobalStoreRootState) => state.passwords.passwords,
  );
  const dispatch = useDispatch();

  function handleSave() {
    hideDialog();
    dispatch(
      setPasswordsGlobalStore([...savedPasswords, {...data, id: nanoid()}]),
    );
  }

  return <Button onPress={handleSave}>Save</Button>;
}

export default SaveButton;
