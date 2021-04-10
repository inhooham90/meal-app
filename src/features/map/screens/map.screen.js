import React, { useContext, useState, useEffect } from "react";
import { Text } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/locations/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Callout } from "../components/callout.component";

import { Search } from "../components/search.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const neLat = viewport.northeast.lat;
    const swLat = viewport.southwest.lat;

    const latitudeDelta = neLat - swLat;
    setLatDelta(latitudeDelta);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((r, idx) => {
          return (
            <MapView.Marker
              key={`${r.name}-${idx}`}
              coordinate={{
                latitude: r.geometry.location.lat,
                longitude: r.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() => navigation.navigate("RestaurantDetail", { r })}
              >
                <Callout restaurant={r} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
