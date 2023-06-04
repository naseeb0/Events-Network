import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { initializeApp } from "firebase/app";
import { Provider as PaperProvider } from "react-native-paper";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyAcIsa0emSA_b0cFrRUpDz8Mn33aL1m4q4",
  authDomain: "events-network-cc384.firebaseapp.com",
  projectId: "events-network-cc384",
  storageBucket: "events-network-cc384.appspot.com",
  messagingSenderId: "501953481776",
  appId: "1:501953481776:web:fcfe153d78d9048294b1f5"
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
       
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
 
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
