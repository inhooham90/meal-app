import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

export const MenuList = ({ items }) => {
  //   const [expanded, setExpanded] = useState(true);

  //   const handlePress = () => setExpanded(!expanded);
  return (
    <ScrollView>
      <List.Section>
        {Object.keys(items).map((k, idx) => {
          return (
            <List.Accordion
              title={`${k[0].toUpperCase()}${k.slice(1).toLowerCase()}`}
              left={(props) => <List.Icon {...props} icon="menu" />}
              key={`${idx}-${k}`}
            >
              {items[k].map((item, i) => {
                return <List.Item title={item} key={`${item}-${i}`} />;
              })}
            </List.Accordion>
          );
        })}
      </List.Section>
    </ScrollView>
  );
};
