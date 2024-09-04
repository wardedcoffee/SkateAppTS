import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { SQLiteProvider } from 'expo-sqlite';
import { initDatabase } from './database/initializeDatabase';

import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <RootSiblingParent>{/* <- use RootSiblingParent to wrap your root component */}
        <SQLiteProvider
          databaseName="skateDB.db" onInit={initDatabase}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </SQLiteProvider>
      </RootSiblingParent>
    );
  }
}