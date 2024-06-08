import PasswordCard from '@app/components/shared/PasswordCard';
import {FlatList, StyleSheet} from 'react-native';
import CopyPassword from './ActionButtons/CopyPassword';

const test = [
  {
    id: 'd4dfd4',
    title: 'dhjad',
    password: 'jadjsad',
    description: 'jasd',
  },
];

function PasswordsList() {
  return (
    <FlatList
      contentContainerStyle={styles.contentStyle}
      data={test}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <PasswordCard
          title={item.title}
          description={item.description}
          actionButtons={
            <>
              <CopyPassword password={item.password} />
            </>
          }
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  contentStyle: {
    gap: 20,
    paddingTop: 5,
    paddingBottom: 100,
  },
});

export default PasswordsList;
