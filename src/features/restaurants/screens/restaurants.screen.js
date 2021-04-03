import React, { useContext } from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import styled from "styled-components";
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
  const restaurantContext = useContext(RestaurantsContext);

  // console.log(restaurantContext);
  return (
    <SafeArea>
      <SearchBar />
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => `${item.name}`}
      />
    </SafeArea>
  );
};
