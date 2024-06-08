import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './navigators/AppStackNavigator';

function RootNavigation() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}

export default RootNavigation;
