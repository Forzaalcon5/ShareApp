import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import Menu from '../Componentes/Menu';
import Posts from '../Componentes/Posts';
import ChatBoth from '../Componentes/ChatBoth';
import CrearPost from '../Componentes/CrearPosts';
import {styles} from '../Estilos/estiloprincipal';

const Principal = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [publicaciones, setPublicaciones] = useState([
    {
      id: 1,
      username: 'Carlitos09',
      text: 'blah blah blah blah blah blah blah blah blah blah blah blah',
      avatar: 'https://via.placeholder.com/55'
    }
  ]);

  const handleCreatePost = (text: string) => {
    const newPost = {
      id: publicaciones.length + 1,
      username: 'Usuario',
      text: text,
      avatar: 'https://via.placeholder.com/55'
    };
    setPublicaciones([newPost, ...publicaciones]);
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Menu navigation={navigation} />
        
        {publicaciones.map((post) => (
          <Posts 
            key={post.id}
            username={post.username}
            text={post.text}
            avatar={post.avatar}
          />
        ))}
      </ScrollView>
      
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        activeOpacity={0.8}
      >
        <Text>+</Text>
      </TouchableOpacity>

      <CrearPost
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleCreatePost}
      />
      
      <ChatBoth />
    </View>
  );
};

export default Principal;