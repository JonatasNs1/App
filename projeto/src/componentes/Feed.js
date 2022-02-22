import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import ItemDivider from './Divisor';
import Card from './Card';
import SuperCard from './SuperCard';
import CardImage from './CardImage';
import CardText from './CardText';
import CardLocalizacao from './CardLocalizacao';
import CardTitulo from './CardTitulo';

const Lista = [
  {
    titulo: 'titulo 1 ',
    localizacao: 'Itapevi',
    imagem:
      'http://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg',
    texto: 'Lorem Ipsum is simply dummy text of the printing ',
  },
  {
    titulo: 'titulo 2',
    localizacao: 'Osasco',
    imagem:
      'https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142839436',
    texto: 'Lorem Ipsum is simply dummy text of the printing',
  },
  {
    titulo: 'titulo 3',
    localizacao: 'Barueri',
    imagem:
      'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png',
    texto: 'Lorem Ipsum is simply dummy text of the printing',
  },
  {
    titulo: 'titulo 3',
    localizacao: 'Barueri',
    imagem:
      'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png',
    texto: 'Lorem Ipsum is simply dummy text of the printing ',
  },
  {
    titulo: 'titulo 3',
    localizacao: 'Barueri',
    imagem:
      'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png',
    texto: 'Lorem Ipsum is simply dummy text of the printing',
  },
];

const Feed = () => {
  return (
    <View>
      <FlatList
        data={Lista}
        renderItem={({item}) => (
          // <Card {...item} />
          <SuperCard>
            <CardTitulo titulo={item.titulo} />
            <CardLocalizacao
              style={styles.superc}
              localizacao={item.localizacao}
            />
            <CardImage style={styles.superc} imagem={item.imagem} />
            <CardText texto={item.texto} />
          </SuperCard>
        )}
        ItemSeparatorComponent={ItemDivider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  superc: {
    paddingTop: 100,
    paddingBottom: 300,
  },
  supert: {
    paddingTop: 100,
    paddingBottom: 300,
  },
});

export default Feed;
