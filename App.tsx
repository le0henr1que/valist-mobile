import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/inter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import Modal from "./src/components/Modalize";
import ModalNotification from "./src/components/Notification";
import RootNavigator from "./src/navigation/RootNavigator";
import { store } from "./store";
import "./ignoreWarnings";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      async function hideSplashScreen() {
        try {
          await SplashScreen.hideAsync();
        } catch (e) {
          console.warn(e);
        }
      }
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const queryClient = new QueryClient();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ToastProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Modal />
            <ModalNotification />
            <RootNavigator />
          </QueryClientProvider>
        </Provider>
      </ToastProvider>
    </GestureHandlerRootView>
  );
}
AppRegistry.registerComponent(appName, () => App);
