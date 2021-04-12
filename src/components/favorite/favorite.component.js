import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavoritesContext } from "../../services/favorites/favorites.context";

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 28px;
  right: 28px;
  z-index: 9;
`;

export const Favorite = ({ restaurant }) => {
  const { favorites, like, unlike } = useContext(FavoritesContext);

  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavoriteButton
      onPress={() => (isFavorite ? unlike(restaurant) : like(restaurant))}
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteButton>
  );
};
