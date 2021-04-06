import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Restaurant not found.");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  // const newResult = camelize(results.length);
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    restaurant.address = restaurant.vicinity;

    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });

  return camelize(mappedResults);
};
