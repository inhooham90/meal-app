import React, { useContext, useState } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import styled from "styled-components";
import { ActivityIndicator, Colors } from "react-native-paper";

import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/util/safe-area.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { FavoritesBar } from "../../../components/favorite/favorites-bar.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favorites, like, unlike } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading animating={true} color={Colors.red800} />
        </LoadingContainer>
      )}
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
