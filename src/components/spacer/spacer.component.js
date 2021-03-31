import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "margin-top",
  botton: "margin-bottom",
  left: "margin-left",
  right: "margin-right",
};

const getVariant = (position, size, theme) =>
  `${positionVariant[position]}:${theme.space[sizeVariant[size]]}`;

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
