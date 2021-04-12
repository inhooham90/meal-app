import React from "react";

import { CompactCard } from "../../../components/cards/compact-card.component";

export const Callout = ({ restaurant }) => {
  return <CompactCard isMap restaurant={restaurant} />;
};
