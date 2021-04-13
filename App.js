import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import * as firebase from "firebase";

import { theme } from "./src/infrastructure/theme";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/locations/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";

import { Navigation } from "./src/infrastructure/navigation";
import { AuthContextProvider } from "./src/services/auth/auth.context";

const firebaseConfig = {
  apiKey: "AIzaSyAqSSY0_SFbPX1OPBmQC0mvqjGM7g29Kfw",
  authDomain: "mealstogo-ad0f8.firebaseapp.com",
  projectId: "mealstogo-ad0f8",
  storageBucket: "mealstogo-ad0f8.appspot.com",
  messagingSenderId: "204038714301",
  appId: "1:204038714301:web:1991f254159d5febff98d4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("james@gmail.com", "password123")
      .then((user) => {
        console.log(user);
        setIsAuthed(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthed) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation isAuthed={isAuthed} />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}
