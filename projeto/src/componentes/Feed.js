import React, { useState } from 'react';
// import{View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import ItemDivider from './Divisor';
import Card from './Card';

const Lista = [
    { 
      titulo: 'titulo 1 ',
      localizacao: 'Itapevi',
      imagem:  'http://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' 
  
    },
    {
      titulo: 'titulo 2',
      localizacao: 'Osasco',
      imagem:  'https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142839436',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' 
    },
    {
      titulo: 'titulo 3',
      localizacao: 'Barueri',
      imagem:  'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png' ,
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      titulo: 'titulo 3',
      localizacao: 'Barueri',
      imagem:  'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png' ,
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      titulo: 'titulo 3',
      localizacao: 'Barueri',
      imagem:  'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png' ,
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    }
  
  
  
  
  ]

const Feed = () =>{
    <FlatList
           data={Lista} renderItem={({item}) => <Card titulo= {item.titulo}
                  localizacao = {item.localizacao}
                  imagem = {item.imagem}
                  texto = {item.texto}
                
           />}

           ItemSeparatorComponent={ItemDivider}
  
        />
}

export default Feed;
