import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Tab = styled(View)`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  justify-content: center;
  align-items: center;
`;

export const PullTab = ({ height = "50px", width = "100%" }) => {
  return (
    <Tab height={height} width={width}>
      <Ionicons name="chevron-down-outline" />
    </Tab>
  );
};
