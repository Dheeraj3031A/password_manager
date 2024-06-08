import RootNavigation from '@app/navigation/RootNavigation';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
