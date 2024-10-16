import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Productdetails from "./src/screens/Productdetails";
import Productnavigation from "./src/navigation/Productnavigation";
import Authnav from "./src/navigation/Authnav";
import context from "./src/api/Context/userContext";
import { useState } from "react";
import { gettoken } from "./src/api/storage/storage";

export default function App() {
  const [user, setuser] = useState(false);
  if (gettoken()) {
    setuser(true);
  }
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <context.Provider value={{ user, setuser }}>
              {user ? <Productnavigation /> : <Authnav />}
            </context.Provider>
          </SafeAreaView>
        </SafeAreaProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
