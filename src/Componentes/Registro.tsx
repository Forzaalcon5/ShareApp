import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../Estilos/Styleregistro';

interface RegistroProps {
  navigation?: any;
  onNavigateToLogin?: () => void;
}

const Registro: React.FC<RegistroProps> = ({ navigation, onNavigateToLogin }) => {
  const [Usuario, setUsuario] = useState('');
  const [Correo, setCorreo] = useState('');
  const [Contra, setContra] = useState('');
  const [Confirmar, setConfirmar] = useState('');

  const handleRegister = () => {
    if (!Usuario || !Correo || !Contra || !Confirmar) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (Contra !== Confirmar) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    Alert.alert('Éxito', 'Usuario registrado. Ahora inicia sesión.', [
      {
        text: 'OK',
        onPress: () => {
          if (navigation) {
            navigation.navigate('Signin');
          } else if (onNavigateToLogin) {
            onNavigateToLogin();
          }
        },
      },
    ]);
  };

  const handleNavigateToLogin = () => {
    if (navigation) {
      navigation.navigate('Signin');
    } else if (onNavigateToLogin) {
      onNavigateToLogin();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.signinWrapper}>
          <LinearGradient
            colors={['#0098ff', '#0052cc']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.signin}
          >
            {/* Título */}
            <Text style={styles.titulo}>Share App</Text>

            {/* Imagen más pequeña y centrada */}
            <View style={styles.imgContainer}>
              <Image
                source={require('../img/logo_app.png')}
                style={styles.imalogin}
                resizeMode="cover"
              />
            </View>

            {/* Formulario */}
            <View style={styles.formContainer}>
              <Text style={styles.formTitulo}>Crear Cuenta</Text>
              
              <TextInput
                style={styles.input}
                placeholder="Nombre completo"
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                value={Usuario}
                onChangeText={setUsuario}
                autoCapitalize="words"
              />

              <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                value={Correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                value={Contra}
                onChangeText={setContra}
                secureTextEntry
                autoCapitalize="none"
              />

              <TextInput
                style={styles.input}
                placeholder="Confirmar contraseña"
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                value={Confirmar}
                onChangeText={setConfirmar}
                secureTextEntry
                autoCapitalize="none"
              />

              <TouchableOpacity
                style={styles.signiboton}
                onPress={handleRegister}
                activeOpacity={0.8}
              >
                <Text style={styles.botonText}>Registrarse</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={handleNavigateToLogin}
                style={styles.pregunta}
              >
                <Text style={styles.link}>¿Ya tienes cuenta? Inicia sesión aquí</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Registro;