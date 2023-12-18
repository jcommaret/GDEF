import * as React from "react";
import { View, Text } from "react-native";

export function DetailsScreen(route, navigation) {
  console.log(route.params);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{item.id}</Text>
    </View>
  );
}
