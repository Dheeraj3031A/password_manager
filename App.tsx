import MaterialYouThemeProvider from '@app/components/theme/MaterialYouThemeProvider';
import RootNavigation from '@app/navigation/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <MaterialYouThemeProvider>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </MaterialYouThemeProvider>
  );
}

export default App;
