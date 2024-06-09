import {FAB} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Animated, {BounceIn} from 'react-native-reanimated';
import EditorDialog from '@app/components/shared/EditorDialog';
import {useState} from 'react';

const AnimatedFAB = Animated.createAnimatedComponent(FAB);

function FABCreateButton() {
  const [showDialog, setShowDialog] = useState(false);
  function handlePress() {
    setShowDialog((prev) => !prev);
  }

  return (
    <>
      <AnimatedFAB
        style={styles.fab}
        icon={'pencil'}
        onPress={handlePress}
        entering={BounceIn}
      />
      <EditorDialog visible={showDialog} setVisbile={setShowDialog} />
    </>
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
