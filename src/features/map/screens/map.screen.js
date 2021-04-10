import React, { useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";

import MapView from "react-native-maps";

import { SafeArea } from "../../../components/util/safe-area.component";

export const MapScreen = () => {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MapView />
      </View>
    </SafeArea>
  );
};
