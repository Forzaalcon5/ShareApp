import React from "react";
import { View } from "react-native";
import RegistroComponent from "../Componentes/Registro";
import {styles} from "../Estilos/estiloregistro"

const Registro = ({ navigation }: any) => {
  return (
    <View>
      <RegistroComponent navigation={navigation} />
    </View>
  );
};

export default Registro;