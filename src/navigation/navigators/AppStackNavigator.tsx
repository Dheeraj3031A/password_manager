import AppHeader from '@app/components/shared/AppHeader';
import HomeScreen from '@app/screens/AppStack/HomeScreen';
import SplashScreen from '@app/screens/AppStack/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MD3Theme, withTheme} from 'react-native-paper';

export type TAppStacknavigationRoutes = {
  SplashScreen: undefined;
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<TAppStacknavigationRoutes>();

type Props = {
  theme: MD3Theme;
};

function AppStackNavigator({theme}: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarTranslucent: true,
        statusBarColor: 'transparent',
        statusBarStyle: theme.dark ? 'light' : 'dark',
        contentStyle: {
          backgroundColor: theme.colors.surface,
        },
      }}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{header: () => <AppHeader title="Passwords" />}}
      />
    </Stack.Navigator>
  );
}

export default withTheme(AppStackNavigator);
