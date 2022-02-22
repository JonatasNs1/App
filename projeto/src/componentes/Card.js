import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import IconButton from './IconButton';

const heartOutline = require('../../assets/icons/like.png');
const heartSolid = require('../../assets/icons/vermelho.png');
const bookmarkOutline = require('../../assets/icons/salvar.jpg');
const bookmarkSolid = require('../../assets/icons/preto.jpg');

const Card = ({titulo, localizacao, imagem, texto}) => {
  //  Colocando um comportamento, de quando clicar na imagem

  const handleImageTouch = cardTitulo => {
    console.log('Cliquei com o dedo na imagem ', cardTitulo);
  };

  const [like, setLike] = useState(false);
  const [salvar, setSalvar] = useState(false);

  console.log(like);

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text>{localizacao}</Text>

      <TouchableOpacity onPress={() => handleImageTouch(titulo)}>
        <Image
          style={styles.imagem}
          resizeMode="cover"
          source={{uri: imagem}}
          width={300}
          height={300}
        />
      </TouchableOpacity>

      <Text> {texto}</Text>

      <Text> Like: {String(like)}</Text>
      <Text> Salvar: {String(salvar)}</Text>
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <IconButton
          ativado={setLike}
          desativado={setLike}
          iconChecked={heartSolid}
          iconUnchecked={heartOutline}
        />

        <IconButton
          ativado={setSalvar}
          desativado={setSalvar}
          iconChecked={bookmarkSolid}
          iconUnchecked={bookmarkOutline}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagem: {
    width: 200,
    height: 200,
    marginStart: 20,
    marginBottom: 30,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  like: {
    width: 30,
    height: 30,
    marginRight: 30,
  },
  cardIconBox: {flexDirection: 'row', marginVertical: 5},
  cardIconBoxImage: {marginRight: 3},
});

export default Card;

// const [icones]

//  //nome da funcao coloca set e o nome
//  // UseState - vai gerar o primeiro valor agr do estado, ele é uma função que rebece o estado inicial(valor inicial)
//  const [like, setLike] = useState(false) // ela me retorna dois valores, [0] valorcorrente, [1] funcao moficadora
//  const [bookmarked, setBookmarked] = useState(false)

//  // tudo que começa com o use no react é um rook
//  const handleLike = () =>{
//    setLike(!like);
//    console.log("like", like)
//  }

//  const handleBookmark = () =>{
//    setBookmarked(!bookmarked)
//    console.log("salvar", bookmarked)
//  }

{
  /* <TouchableOpacity onPress={ handleLike}>
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
     </TouchableOpacity> */
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
