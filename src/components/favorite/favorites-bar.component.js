import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { CompactCard } from "../cards/compact-card.component";
import { Spacer } from "../spacer/spacer.component";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }

  return (
    <FavoritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactCard restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
