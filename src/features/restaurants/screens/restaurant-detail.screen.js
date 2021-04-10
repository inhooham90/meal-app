import React from "react";
import { PullTab } from "../../../components/util/pull-tab.component";

import { SafeArea } from "../../../components/util/safe-area.component";
import { MenuList } from "../components/menu-list.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const MOCK_MENU = {
  breakfast: ["Muffin", "Egg", "Bacon Sandwich"],
  lunch: ["Muffin", "Egg", "Bacon Sandwich"],
  dinner: ["Muffin", "Egg", "Bacon Sandwich"],
  drinks: ["Coffee", "Soda", "Tea"],
};

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <MenuList title="Breakfast" items={MOCK_MENU} />
    </SafeArea>
  );
};
