import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CategoriesCard = ({ name }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        width: 100,
        padding: 5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        height: 30,
      }}
    >
      <Text>{name}</Text>
    </View>
  );
};

export default CategoriesCard;
