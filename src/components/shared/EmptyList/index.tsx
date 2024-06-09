import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

function EmptyList() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text} variant="titleLarge">
        Click add Button to add new Password
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  text: {
    textAlign: 'center',
  },
});

export default EmptyList;
