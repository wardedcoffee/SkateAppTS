import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          'quicksand-bold': require('../assets/fonts/Quicksand-Bold.ttf'),
          'quicksand-light': require('../assets/fonts/Quicksand-Light.ttf'),
          'quicksand-medium': require('../assets/fonts/Quicksand-Medium.ttf'),
          'quicksand-regular': require('../assets/fonts/Quicksand-Regular.ttf'),
          'quicksand-semibold': require('../assets/fonts/Quicksand-SemiBold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
