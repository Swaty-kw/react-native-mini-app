import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoriesCard from "../components/CategoriesCard";
import CategoriesList from "../components/CategoriesList";
import instance from "../api";
import Itemcomponent from "../components/Itemcomponent";
import Itemlist from "../components/Itemlist";
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 10 }}>
        <TextInput
          placeholder="Search"
          style={{
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "lightgrey",
            marginBottom: 15,
          }}
        />

        <ScrollView horizontal={true}>
          <CategoriesList />
        </ScrollView>
        <ScrollView>
          <Itemlist />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
