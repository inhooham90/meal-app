import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";

import { SearchBar } from "../../../components/SearchBar";
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <SearchBar />
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
  },
});
