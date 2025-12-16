import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../Estilos/StyleMenu';

interface MenuProps {
  navigation: any; 
}

const Menu: React.FC<MenuProps> = ({ navigation }) => {
  const handlePrincipal = () => {
    navigation.navigate('Principal');
  };

  const handlePerfil = () => {
    navigation.navigate('Perfil');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0098ff', '#0052cc']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.menu}
      >
        <Text style={styles.titulomenu}>Share App</Text>

        <View style={styles.menuBotones}>
          <TouchableOpacity
            style={styles.botonPrincipal}
            onPress={handlePrincipal}
            activeOpacity={0.8}
          >
            <Text style={styles.botonPrincipalTexto}>Principal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.perfilmenu}
            onPress={handlePerfil}
            activeOpacity={0.8}
          >
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>MP</Text>
            </View>
            <Text style={styles.perfiltexto}>Mi perfil</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Menu;