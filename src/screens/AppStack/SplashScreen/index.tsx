import BiometricAuth from '@app/components/screens/AppStack/SplashScreen/BiometricAuth';
import {StyleSheet, View} from 'react-native';

function SplashScreen() {
  return (
    <View style={styles.rootContainer}>
      <BiometricAuth />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
