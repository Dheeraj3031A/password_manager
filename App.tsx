import MaterialYouThemeProvider from '@app/components/theme/MaterialYouThemeProvider';
import RootNavigation from '@app/navigation/RootNavigation';
import {store} from '@app/store/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <MaterialYouThemeProvider>
        <SafeAreaProvider>
          <RootNavigation />
        </SafeAreaProvider>
      </MaterialYouThemeProvider>
    </Provider>
  );
}

export default App;
