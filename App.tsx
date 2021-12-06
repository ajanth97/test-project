import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { usersContext } from "./contexts/UsersContext";

export default function App() {
  const [isLoadingComplete, usersData]= useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider>
        <SafeAreaProvider>
          <usersContext.Provider value={usersData}>
          <Navigation colorScheme={colorScheme} />
          </usersContext.Provider >
          <StatusBar />
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
}
