import React from 'react';
import { View,Text  } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getAllcategories } from '../api/categories';
import instance from '../api';


const CategoriesList = () => {
  const { data } = useQuery({
    
    queryKey: ["getAllCategories"],
    queryFn: getAllcategories,
  
  });
  console.log(data)
  return (
    <View>
      
    <Text>CategoriesList</Text>
    </View>
  );
}





export default CategoriesList
