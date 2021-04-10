import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigation = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      //   screenOptions={{
      //     ...TransitionPresets.ModalTransition,
      //   }}
    >
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
