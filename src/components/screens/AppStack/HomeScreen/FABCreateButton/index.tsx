import {FAB} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Animated, {BounceIn} from 'react-native-reanimated';

const AnimatedFAB = Animated.createAnimatedComponent(FAB);

function FABCreateButton() {
  function handlePress() {
    console.log('FAB Pressed');
  }

  return (
    <AnimatedFAB
      style={styles.fab}
      icon={'pencil'}
      onPress={handlePress}
      entering={BounceIn}
    />
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 32,
    right: 16,
  },
});

export default FABCreateButton;
