import React, { useState } from 'react';
import{View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const heartOutline = require('../projeto/assets/icons/like.png');
const heartSolid = require('../projeto/assets/icons/vermelho.png')
const bookmarkOutline = require('../projeto/assets/icons/like.png');


const Card =({titulo, localizacao, imagem, texto}) =>{
 
 // Colocando um comportamento, de quando clicar na imagem

 const handleImageTouch = (cardTitulo) =>{
   console.log('Cliquei com o dedo na imagem ', cardTitulo);
 };
 
 //nome da funcao coloca set e o nome
 // UseState - vai gerar o primeiro valor agr do estado
 const [like, setLike] = useState(false) // ela me retorna dois valores, [0] valorcorrente, [1] funcao moficadora
 const [bookmarked, setBookmarked] = useState(false)

 // tudo que começa com o use no react é um rook 
 const handleLike = () =>{
   setLike(!like);
  //  console.log("like", like)
 }

 const handleBookmark = () =>{
   setBookmarked(!bookmarked)
 }
 
  return(
    <View style={styles.card}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text>{localizacao}</Text>
   

    
        <TouchableOpacity onPress={() => handleImageTouch(titulo)}>
        <Image
              style={  styles.imagem}
              resizeMode='cover'
                source={{uri:imagem}}
                width={300}
                height={300}
         />

        </TouchableOpacity>
     
       <Text> {texto}</Text> 
      <View style={{flexDirection:'row' , marginVertical: 5}}>

     <TouchableOpacity onPress={ handleLike}>
     <Image
        style={  styles.cardIconBoxImage}
        source={like ? heartSolid : heartOutline}
          width={30}
          height={30}
        />

     </TouchableOpacity>

     <TouchableOpacity onPress={ handleBookmark}>
     <Image
        style={  styles.cardIconBoxImage}
        source={bookmarked? bookmarkSolid : bookmarkOutline}
          width={30}
          height={30}
        />

     </TouchableOpacity>

      </View>
  
  
       
        
  </View>

  

  );
}



// const Card =({title, location, image, text}) =>{
//     return(
//       <View>
//           <Text>{title}</Text>
//           <Text>{location}</Text>
//           <Image source={{uri:image}}/>
//           <Text> {text}</Text> 
          
//     </View>
//     )
//   }



const styles = StyleSheet.create({

  imagem: {
    width: 200,
    height:200,
    marginStart:20,
    marginBottom:30
  },
  titulo:{
    fontWeight:'bold',
    fontSize:18,
    textAlign:'center'
  },
  like:{
    width:30,
    height:30
  },
  cardIconBox:{flexDirection: 'row', marginVertical:5},
  cardIconBoxImage: {marginRight:3},
});

  export default Card;