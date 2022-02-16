import React from 'react';
import {StyleSheet,Text, View} from 'react-native';

// o que fazer para o componente ser dinamico
// forma de comunicar, passar valores pro componente


const Titulo = (props) => {

// passar parametros pro componente, é pelo props
  console.log(props); // sempre vai chegar um props no componente, como um objeto vazio
    const s ={
        ...styles.title,
        ... props.style,
        fontSize: styles.title.fontSize,
           color: styles.title.color, 
    }


  
  return (
      //Deixar o componente de fora muda meu estilo (no app js)
   <View >
      <Text style={s}>{props.texto}</Text>
    </View>
  );
};



export default Titulo;

const styles = StyleSheet.create({
    title: {
        fontSize:36,
        color: 'red',
        marginLeft: 5,
    },
});