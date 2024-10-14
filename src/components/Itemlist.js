import React from "react";
import { View, Text, ScrollView } from "react-native";
import Itemcomponent from "./Itemcomponent";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../api/items";

const Itemlist = () => {
  const { data } = useQuery({ queryKey: ["items"], queryFn: getItems });
  console.log(data);
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginTop: 30,

          // backgroundColor: "blue",
          flexDirection: "row",
          flexWrap: "wrap",
          //   marginHorizontal: 10,
          //   marginVertical: 10,
          //   alignItems: "center",
          //   justifyContent: "center",
        }}
      >
        {data?.map((item) => (
          <Itemcomponent item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Itemlist;
