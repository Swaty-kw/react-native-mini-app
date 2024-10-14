import React from "react";
import { View, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getAllcategories } from "../api/categories";
import instance from "../api";
import CategoriesCard from "./CategoriesCard";

const CategoriesList = () => {
  const { data } = useQuery({
    queryKey: ["getAllCategories"],
    queryFn: getAllcategories,
  });
  console.log(data);
  return (
    <View style={{ flexDirection: "row" }}>
      {data?.map((category) => {
        return <CategoriesCard key={category._id} name={category.name} />;
      })}
    </View>
  );
};

export default CategoriesList;
