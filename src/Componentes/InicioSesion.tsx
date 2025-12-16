import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../Estilos/Styleiniciosesion';

interface SigninProps {
  navigation?: any;
  onNavigateToRegister?: () => void;
  onNavigateToPrincipal?: () => void;
}

const Signin: React.FC<SigninProps> = ({ 
  navigation, 
  onNavigateToRegister,
  onNavigateToPrincipal 
}) => {
  const [Correo, setCorreo] = useState('');
  const [Contra, setContra] = useState('');

  const handleLogin = () => {
    if (navigation) {
      navigation.navigate('Principal');
    } else if (onNavigateToPrincipal) {
      onNavigateToPrincipal();
    }
  };

  const handleNavigateToRegister = () => {
    if (navigation) {
      navigation.navigate('Registro');
    } else if (onNavigateToRegister) {
      onNavigateToRegister();
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
              <Text style={styles.formTitulo}>Iniciar Sesión</Text>
              
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

              <TouchableOpacity
                style={styles.signiboton}
                onPress={handleLogin}
                activeOpacity={0.8}
              >
                <Text style={styles.botonText}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={handleNavigateToRegister}
                style={styles.pregunta}
              >
                <Text style={styles.link}>¿No tienes cuenta? Regístrate aquí</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    
  );
};

export default Signin;