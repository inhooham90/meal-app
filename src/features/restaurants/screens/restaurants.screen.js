import React, { useContext } from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import styled from "styled-components";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SearchBar } from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/util/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: (props) => props.theme.space[3],
  },
})``;

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchBar />
      {isLoading ? (
        <ActivityIndicator animating={true} color={Colors.red800} />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
