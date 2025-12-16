import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Animated,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Alert,
  Clipboard,
} from 'react-native';
import { styles } from '../Estilos/StyleChatbot';

const { width, height } = Dimensions.get('window');
const API_URL = 'https://back-movil.vercel.app/api';


interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  hasPublication?: boolean;
}

type Emocion = 'felicidad' | 'tristeza' | 'miedo' | 'ira' | 'sorpresa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: '¡Hola! Soy bluy tu asistente de emociones 😊\n\nPuedo ayudarte a generar publicaciones para redes sociales basadas en cómo te sientes.\n\n¿Cómo te sientes hoy?', 
      sender: 'bot' 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [esperandoContexto, setEsperandoContexto] = useState(false);
  const [emocionActual, setEmocionActual] = useState<Emocion | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<number | null>(null);
  
  const scrollViewRef = useRef<ScrollView>(null);
  const chatWindowAnim = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(chatWindowAnim, {
      toValue: isOpen ? 1 : 0,
      useNativeDriver: true,
      tension: 40,
      friction: 8,
    }).start();

    Animated.spring(buttonScale, {
      toValue: isOpen ? 0 : 1,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  useEffect(() => {
    if (scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  const limpiarChat = () => {
    setMessages([
      { 
        id: 1, 
        text: '¡Hola! Soy bluy tu asistente de emociones 😊', 
        sender: 'bot' 
      }
    ]);
    setEsperandoContexto(false);
    setEmocionActual(null);
    setInputText('');
  };

  const copiarTexto = async (texto: string, messageId: number) => {
    try {
      const match = texto.match(/"([^"]*)"/);
      const textoACopiar = match ? match[1] : texto;
      
      if (Platform.OS === 'ios' || Platform.OS === 'android') {
        Clipboard.setString(textoACopiar);
      }
      
      setCopiedMessageId(messageId);
      
      setTimeout(() => {
        setCopiedMessageId(null);
      }, 2000);
    } catch (error) {
      console.error('Error al copiar:', error);
      Alert.alert('Error', 'No se pudo copiar el texto');
    }
  };

  const detectarEmocion = (texto: string): Emocion | null => {
    const textoLower = texto.toLowerCase();
    
    const emociones: Record<Emocion, string[]> = {
      'felicidad': ['feliz', 'alegre', 'contento', 'bien', 'genial', 'excelente', 'happy', 'bueno'],
      'tristeza': ['triste', 'mal', 'deprimido', 'melancólico', 'bajo', 'sad', 'malo'],
      'miedo': ['miedo', 'asustado', 'nervioso', 'ansioso', 'preocupado', 'temor', 'pánico'],
      'ira': ['enojado', 'molesto', 'furioso', 'irritado', 'frustrado', 'angry', 'ira'],
      'sorpresa': ['sorprendido', 'asombrado', 'impactado', 'wow', 'increíble', 'sorpresa']
    };

    for (const [emocion, palabras] of Object.entries(emociones)) {
      if (palabras.some(palabra => textoLower.includes(palabra))) {
        return emocion as Emocion;
      }
    }
    return null;
  };

  const generarPublicacion = async (emocion: Emocion, contexto: string = '') => {
    setIsGenerating(true);
    try {
      const response = await fetch(`${API_URL}/generar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emocion, contexto })
      });

      const data = await response.json();
      
      if (data.success) {
        return {
          success: true,
          publicacion: data.publicacion
        };
      } else {
        return {
          success: false,
          message: data.message
        };
      }
    } catch (error) {
      return {
        success: false,
        message: 'Error de conexión. ¿Está la API corriendo?'
      };
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSendMessage = async () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        sender: 'user'
      };
      setMessages([...messages, newMessage]);
      
      const userText = inputText;
      setInputText('');

      if (esperandoContexto && emocionActual) {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: '⏳ Generando tu publicación...',
          sender: 'bot'
        }]);

        const resultado = await generarPublicacion(emocionActual, userText);
        
        setMessages(prev => prev.slice(0, -1));
        
        if (resultado.success) {
          const botResponse: Message = {
            id: messages.length + 3,
            text: `📝 Aquí está tu publicación:\n\n"${resultado.publicacion}"\n\n¿Quieres generar otra? Dime cómo te sientes 😊`,
            sender: 'bot',
            hasPublication: true
          };
          setMessages(prev => [...prev, botResponse]);
        } else {
          const errorResponse: Message = {
            id: messages.length + 3,
            text: `❌ ${resultado.message}\n\nIntentemos de nuevo. ¿Cómo te sientes?`,
            sender: 'bot'
          };
          setMessages(prev => [...prev, errorResponse]);
        }
        
        setEsperandoContexto(false);
        setEmocionActual(null);
        return;
      }

      const emocionDetectada = detectarEmocion(userText);
      
      if (emocionDetectada) {
        setEmocionActual(emocionDetectada);
        setEsperandoContexto(true);
        
        const emojis: Record<Emocion, string> = {
          'felicidad': '😊',
          'tristeza': '😔',
          'miedo': '😰',
          'ira': '😠',
          'sorpresa': '😲'
        };

        setTimeout(() => {
          const botResponse: Message = {
            id: messages.length + 2,
            text: `${emojis[emocionDetectada]} Entiendo que te sientes ${emocionDetectada}.\n\n¿Quieres darme más contexto sobre por qué te sientes así? (Opcional: puedes decir "sin contexto" para generar la publicación directamente)`,
            sender: 'bot'
          };
          setMessages(prev => [...prev, botResponse]);
        }, 500);
      } else {
        setTimeout(() => {
          const botResponse: Message = {
            id: messages.length + 2,
            text: 'Hmm, no pude detectar una emoción clara 🤔\n\nPor favor dime cómo te sientes:\n• Feliz\n• Triste\n• Con miedo\n• Enojado\n• Sorprendido',
            sender: 'bot'
          };
          setMessages(prev => [...prev, botResponse]);
        }, 500);
      }
    }
  };

  const chatWindowTranslateY = chatWindowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [height, 0],
  });

  const chatWindowOpacity = chatWindowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <>
      {/* Botón flotante */}
      <Animated.View
        style={[
          styles.floatButtonContainer,
          {
            transform: [{ scale: buttonScale }],
            opacity: buttonScale,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.chatFloatBtn}
          onPress={() => setIsOpen(true)}
        >
          <Text style={styles.chatIcon}>💬</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Ventana del chat */}
      {isOpen && (
        <Animated.View
          style={[
            styles.chatWindow,
            {
              transform: [{ translateY: chatWindowTranslateY }],
              opacity: chatWindowOpacity,
            },
          ]}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.chatContainer}
            keyboardVerticalOffset={0}
          >
            {/* Header del chat */}
            <View style={styles.chatHeader}>
              <View style={styles.chatHeaderInfo}>
                <View style={styles.botAvatar}>
                  <Text style={styles.botAvatarText}>💀</Text>
                </View>
                <View>
                  <Text style={styles.chatHeaderTitle}>bluy</Text>
                  <Text style={styles.status}>
                    {isGenerating ? 'Generando...' : 'En línea'}
                  </Text>
                </View>
              </View>
              <View style={styles.headerButtons}>
                <TouchableOpacity
                  style={styles.clearChatBtn}
                  onPress={limpiarChat}
                >
                  <Text style={styles.headerBtnText}>🗑️</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeChatBtn}
                  onPress={() => setIsOpen(false)}
                >
                  <Text style={styles.closeBtnText}>✕</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Mensajes */}
            <ScrollView
              ref={scrollViewRef}
              style={styles.chatMessages}
              contentContainerStyle={styles.chatMessagesContent}
              showsVerticalScrollIndicator={false}
            >
              {messages.map((message) => (
                <View
                  key={message.id}
                  style={[
                    styles.message,
                    message.sender === 'user' && styles.userMessage,
                  ]}
                >
                  {message.sender === 'bot' && (
                    <View style={styles.messageAvatar}>
                      <Text style={styles.avatarText}>🎭</Text>
                    </View>
                  )}
                  <View style={styles.messageContent}>
                    <View
                      style={[
                        styles.messageBubble,
                        message.sender === 'bot'
                          ? styles.botMessageBubble
                          : styles.userMessageBubble,
                      ]}
                    >
                      <Text
                        style={[
                          styles.messageText,
                          message.sender === 'user' && styles.userMessageText,
                        ]}
                      >
                        {message.text}
                      </Text>
                    </View>
                    {message.sender === 'bot' && message.hasPublication && (
                      <TouchableOpacity
                        style={styles.copyBtn}
                        onPress={() => copiarTexto(message.text, message.id)}
                      >
                        <Text style={styles.copyBtnText}>
                          {copiedMessageId === message.id ? '✓ Copiado' : '📋 Copiar'}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                  {message.sender === 'user' && (
                    <View style={[styles.messageAvatar, styles.userAvatar]}>
                      <Text style={styles.avatarText}>👤</Text>
                    </View>
                  )}
                </View>
              ))}
            </ScrollView>

            {/* Input de escritura */}
            <View style={styles.chatInputContainer}>
              <TextInput
                value={inputText}
                onChangeText={setInputText}
                placeholder={
                  esperandoContexto 
                    ? "Escribe el contexto o 'sin contexto'..." 
                    : "Escribe cómo te sientes..."
                }
                placeholderTextColor="#999"
                multiline
                style={styles.chatInput}
                maxLength={500}
                editable={!isGenerating}
              />
              <TouchableOpacity
                onPress={handleSendMessage}
                style={[
                  styles.sendBtn,
                  (!inputText.trim() || isGenerating) && styles.sendBtnDisabled,
                ]}
                disabled={!inputText.trim() || isGenerating}
              >
                <Text style={styles.sendIcon}>➤</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </Animated.View>
      )}
    </>
  );
};

export default ChatBot;