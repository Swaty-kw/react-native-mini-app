import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CategoriesCard = () => {
  return (
    <View style={{
        borderWidth: 1,
        width: 100,
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height:50
      }}>
        <Text>Tech</Text>
      </View>
  )
}

export default CategoriesCard
