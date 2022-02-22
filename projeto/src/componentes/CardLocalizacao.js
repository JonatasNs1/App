import {View, Text} from 'react-native';
import React from 'react';

const CardLocalizacao = props => {
  return (
    <View>
      <Text>{props.localizacao}</Text>
    </View>
  );
};

export default CardLocalizacao;
