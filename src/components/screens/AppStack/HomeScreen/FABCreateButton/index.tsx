import {FAB} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Animated, {BounceIn} from 'react-native-reanimated';
import EditorDialog, {
  EditorDialogRef,
} from '@app/components/shared/EditorDialog';
import {useRef, useState} from 'react';
import SaveButton from './SaveButton';

const AnimatedFAB = Animated.createAnimatedComponent(FAB);

function FABCreateButton() {
  const editorRef = useRef<EditorDialogRef>(null);
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
      <EditorDialog
        ref={editorRef}
        visible={showDialog}
        setVisbile={setShowDialog}
        SaveButtonComponent={<SaveButton editorRef={editorRef} />}
      />
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
