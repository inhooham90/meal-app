import React, { useContext } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../../services/auth/auth.context";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  const { isAuthed } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthed ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
