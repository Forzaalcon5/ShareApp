import React from "react";
import { View } from "react-native";
import Signin from "../Componentes/InicioSesion";
import {styles} from "../Estilos/estiloiniciosesion"

const InicioSesion = ({ navigation }: any) => {
  return (
    <View>
      <Signin navigation={navigation} />
    </View>
  );
};

export default InicioSesion;