import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (value) => {
    try {
      const favs = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", favs);
    } catch (e) {
      console.log(e);
    }
  };

  const getFavorites = async () => {
    try {
      const favs = await AsyncStorage.getItem("@favorites");
      if (favs !== null) {
        setFavorites(JSON.parse(favs));
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  const like = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const unlike = (restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        like,
        unlike,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
