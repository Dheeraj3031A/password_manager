import PasswordCard from '@app/components/shared/PasswordCard';
import {FlatList, StyleSheet} from 'react-native';
import CopyPassword from './ActionButtons/CopyPassword';
import {useSelector} from 'react-redux';
import {GlobalStoreRootState} from '@app/store/store';
import EmptyList from '@app/components/shared/EmptyList';
import EditNote from './ActionButtons/EditNote';
import DeleteButton from './ActionButtons/DeleteButton';

function PasswordsList() {
  const passwords = useSelector(
    (state: GlobalStoreRootState) => state.passwords.passwords,
  );

  return (
    <FlatList
      contentContainerStyle={styles.contentStyle}
      data={passwords}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={EmptyList}
      renderItem={({item}) => (
        <PasswordCard
          title={item.title}
          description={item.description}
          actionButtons={
            <>
              <EditNote data={item} />
              <CopyPassword password={item.password} />
              <DeleteButton id={item.id} />
            </>
          }
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  contentStyle: {
    minHeight: '80%',
    gap: 20,
    paddingTop: 5,
    paddingBottom: 100,
  },
});

export default PasswordsList;
