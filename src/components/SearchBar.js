import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </SearchContainer>
  );
};
