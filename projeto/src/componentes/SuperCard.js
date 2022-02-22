import {View, StyleSheet} from 'react-native';
import React from 'react';

const SuperCard = ({children}) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    color: 'blue',
  },
});

export default SuperCard;
