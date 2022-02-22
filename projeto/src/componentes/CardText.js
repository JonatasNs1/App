import {View, Text} from 'react-native';
import React from 'react';

const CardText = props => {
  return (
    <View>
      <Text>{props.texto}</Text>
    </View>
  );
};

export default CardText;
