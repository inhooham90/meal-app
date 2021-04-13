import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from "../../components/util/safe-area.component";
import { RestaurantNavigation } from "./restaurant.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

function SettingsScreen() {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

const TAB_ICON = (focused) => ({
  Restaurants: focused ? "restaurant" : "restaurant-outline",
  Map: focused ? "map" : "map-outline",
  Settings: focused ? "settings" : "settings-outline",
});

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    return (
      <Ionicons
        name={TAB_ICON(focused)[route.name]}
        size={size}
        color={color}
      />
    );
  },
});

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantNavigation} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
