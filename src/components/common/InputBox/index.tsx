import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {useTheme} from 'react-native-paper';

function InputBox(props: TextInputProps) {
  const {colors} = useTheme();

  return (
    <TextInput
      {...props}
      cursorColor={colors.primary}
      placeholderTextColor={'gray'}
      style={{
        ...styles.textInput,
        color: colors.onSecondaryContainer,
        backgroundColor: colors.secondaryContainer,
      }}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});

export default InputBox;
