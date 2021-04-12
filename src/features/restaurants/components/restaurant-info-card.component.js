import React from "react";
import { SvgXml } from "react-native-svg";

import stars from "../../../../assets/stars";
import openSign from "../../../../assets/openSign";
import {
  Title,
  RestaurantCard,
  Info,
  Address,
  RestaurantCardCover,
  Stars,
  Section,
  ClosedText,
  ImageHolder,
} from "./restaurant-info-card.styles";
import { Favorite } from "../../../components/favorite/favorite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Totowa",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg",
    ],
    address = "337 Broad Ave, Palisades Park, NJ 07650",
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily = false,
    placeId,
  } = restaurant;

  const ratingArr = Array.from(new Array(Math.floor(rating)));

  const renderOpenSign = () => {
    if (isClosedTemporarily) {
      return <ClosedText> CLOSED TEMPORARILY</ClosedText>;
    } else if (isOpenNow) {
      return <SvgXml width={20} height={20} xml={openSign} />;
    } else {
      return <ClosedText>Opens Tomorrow</ClosedText>;
    }
  };

  return (
    <RestaurantCard>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Stars>
            {ratingArr.map((_, i) => (
              <SvgXml
                key={`${placeId}-${i}`}
                width={20}
                height={20}
                xml={stars}
              />
            ))}
          </Stars>
          {renderOpenSign()}
        </Section>
        <Section>
          <Address>{address}</Address>
          <ImageHolder source={{ uri: icon }} />
        </Section>
      </Info>
    </RestaurantCard>
  );
};
