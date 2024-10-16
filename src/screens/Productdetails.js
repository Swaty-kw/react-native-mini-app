import React from "react";
import { View, Text, Image, item } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getItembyid } from "../api/items";

const Productdetails = ({ route }) => {
  const { id } = route.params;
  console.log(id);
  const { data } = useQuery({
    queryKey: ["items details", id],
    queryFn: () => getItembyid(id),
  });

  console.log(data);
  return (
    <View>
      <Image
        style={{ width: 180, height: 190 }}
        source={{
          uri:
            "https://react-native-mini-project-items.eapi.joincoded.com/" +
            item?.image,
        }}
      />
      <Text>{item?.name}</Text>
      <Text> {id}</Text>
      
    </View>
  );
};

export default Productdetails;
