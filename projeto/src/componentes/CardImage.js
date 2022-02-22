import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

const CardImage = props => {
  return (
    <View>
      <Image
        style={styles.imagem}
        resizeMode="cover"
        source={{uri: props.imagem}}
        width={200}
        height={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagem: {
    marginStart: 20,
    marginBottom: 30,
  },
});
export default CardImage;
