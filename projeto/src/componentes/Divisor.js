import React from 'react';
import {
  FlatList,Image, Text,View,StyleSheet, SafeAreaView 
} 
from 'react-native';

const ItemDivider = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#607D8B",
      }}
    />
  );
}


const style = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
 
  item: {
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8
  },
 
  itemText:{
    fontSize: 24,
    color: 'black'
  }
 
});

export default ItemDivider;