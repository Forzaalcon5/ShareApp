import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../Estilos/Stylecrearposts';

interface CrearPostProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (text: string) => void;
}

const CrearPost: React.FC<CrearPostProps> = ({ visible, onClose, onSubmit }) => {
  const [postText, setPostText] = useState('');

  const handleSubmit = () => {
    if (postText.trim()) {
      onSubmit(postText);
      setPostText('');
      onClose();
    } else {
      Alert.alert('Error', 'Escribe algo antes de publicar');
    }
  };

  const handleCancel = () => {
    setPostText('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <LinearGradient
            colors={['#0098ff', '#0052cc']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.modalContent}
          >
            <Text style={styles.modalTitle}>Crear Publicación</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textArea}
                placeholder="¿Qué quieres compartir?"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                value={postText}
                onChangeText={setPostText}
                multiline
                maxLength={500}
              />
              <Text style={styles.charCount}>{postText.length}/500</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.publishBtn}
                onPress={handleSubmit}
                activeOpacity={0.8}
              >
                <Text style={styles.publishBtnText}>Publicar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={handleCancel}
                activeOpacity={0.8}
              >
                <Text style={styles.cancelBtnText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>
    </Modal>
  );
};

export default CrearPost;