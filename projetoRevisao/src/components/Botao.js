import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';



const Botao= (props) => {
  
 
  return (
      <TouchableOpacity>
        <View style={styles.container}>
            <Text style={styles.botao}>{props.label}</Text>
        </View>
    </TouchableOpacity>
   
  );
};



export default  Botao;

const styles = StyleSheet.create({
    container:{
    width: '100%',
    },
    botao:{
        color:resizeBy,
        fontSize:18
    }
})