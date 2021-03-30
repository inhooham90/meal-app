import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
import { SearchBar } from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../../../components/restaurant-info-card.component";

const RestaurantScreenSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantList = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  return (
    <RestaurantScreenSafeAreaView>
      <SearchBar />
      <RestaurantList>
        <RestaurantInfoCard />
      </RestaurantList>
    </RestaurantScreenSafeAreaView>
  );
};
