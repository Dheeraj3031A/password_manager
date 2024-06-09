import {setPasswordsGlobalStore} from '@app/store/features/passwordsSlice';
import {GlobalStoreRootState} from '@app/store/store';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

type Props = {
  id: string;
};

function DeleteButton({id}: Props) {
  const passwords = useSelector(
    (state: GlobalStoreRootState) => state.passwords.passwords,
  );
  const dispatch = useDispatch();

  function handleDelete() {
    const filteredData = passwords.filter((item) => item.id !== id);
    dispatch(setPasswordsGlobalStore(filteredData));
  }

  return <IconButton icon={'delete'} onPress={handleDelete} />;
}

export default DeleteButton;
