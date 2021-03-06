import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import Feed from './componentes/Feed';

// const LISTA = [...Array(200).keys()].map(e => 'Linha ' + e);

// const App = ()  => (
//   <View>
//     <FlatList
//          data={LISTA}
//          renderItem={({item}) => (
//          <View>
//              <Image
//                source={{uri: 'https://via.placeholder.com/20'}}
//                width={20}
//                height={20}
//               />

//               <Text>{item}</Text>
//          </View>
//          ) }

//     />

//   </View>
// );

// const Lista = [
//   {
//     titulo: 'titulo 1 ',
//     localizacao: 'Itapevi',
//     imagem:  'http://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg',

//     texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'

//   },
//   {
//     titulo: 'titulo 2',
//     localizacao: 'Osasco',
//     imagem:  'https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142839436',
//     texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
//   },
//   {
//     titulo: 'titulo 3',
//     localizacao: 'Barueri',
//     imagem:  'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png' ,
//     texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
//   },
//   {
//     titulo: 'titulo 3',
//     localizacao: 'Barueri',
//     imagem:  'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png' ,
//     texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
//   },
//   {
//     titulo: 'titulo 3',
//     localizacao: 'Barueri',
//     imagem:  'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png' ,
//     texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
//   }

// ]

const App = () => (
  <SafeAreaView>
    <Feed />
  </SafeAreaView>
);

// const userData =[
//   {
//     title: 'titulo 1',
//     location: 'dsfdsfi',
//     image:'',
//     text: 'Lorem Ipsum',
//   },
//   {
//     title: 'titulo 2',
//     location: 'fghfgh',
//     image: '',
//     text: 'Lorem Ipsum',
//   },
//  { title: 'titulo 3',
//     location: 'ghfghfgh',
//     image: '',
//     text: 'Lorem Ipsum',
//   }
// ];

// function mostrarCard({item}){
//   return(

//     <View>
//     <Text>{item.title}</Text>
//     <Text>{item.location}</Text>
//     <Image source={{uri:item.image}}/>
//     <Text> {item.text}</Text>

//    </View>

//   )
// }

// const App = () =>(
//   <View>
//       <FlatList
//          data={userData} renderItem={({item}) => <Card title={item.title}
//                 location = {item.location}
//                 image={item.image}
//                 text = {item.text}
//          />}

//       />

//   </View>
// );

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

  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  item: {
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
  },

  itemText: {
    fontSize: 24,
    color: 'black',
  },
});

export default App;
