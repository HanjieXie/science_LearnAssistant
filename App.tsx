import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { store, persistor } from './store/store';
import { RootNavigator } from './src/navigation/RootNavigator';
// import { DatabaseService } from './services/storage/DatabaseService';

const App = () => {
  // useEffect(() => {
  //   const initApp = async () => {
  //     try {
  //       const db = DatabaseService.getInstance();
  //       await db.init();
  //       console.log('✅ App initialized successfully');
  //     } catch (error) {
  //       console.error('❌ App initialization failed:', error);
  //     }
  //   };

  //   initApp();
  // }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <Provider store={store}> */}
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <SafeAreaProvider>
            <StatusBar barStyle="dark-content" backgroundColor="#F7F9FC" />
            <RootNavigator />
          </SafeAreaProvider>
        {/* </PersistGate> */}
      {/* </Provider> */}
    </GestureHandlerRootView>
  );
};

export default App;