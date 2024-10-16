import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Itemcomponent = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { id: item._id })}
      style={
        {
          // padding: 10,
          // borderRadius: 10,
          // justifyContent: "space-between",
          // alignItems: "center",
          // backgroundColor: "red",
        }
      }
    >
      <Image
        style={{ width: 180, height: 190 }}
        source={{
          uri:
            "https://react-native-mini-project-items.eapi.joincoded.com/" +
            item.image,
        }}
      />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );
};

export default Itemcomponent;
