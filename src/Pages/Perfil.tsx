import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Menu from '../Componentes/Menu';
import Postuser from '../Componentes/Postuser';
import {styles} from '../Estilos/estiloperfil'

const Perfil = ({ navigation }: any) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Menu navigation={navigation} />
        
        <View>
          <Image
            source={{ uri: 'https://via.placeholder.com/60' }}
          />
          
          <View>
            <Text>Carlitos09</Text>
            <Text>soy la mera verga .</Text>
          </View>
        </View>

        <Postuser />
      </View>
    </ScrollView>
  );
};

export default Perfil;