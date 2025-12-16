import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../Estilos/Stylepostuser';

interface Post {
  id: number;
  text: string;
  avatar: string;
}

const Postuser = () => {
  const [postuser] = useState<Post[]>([
    {
      id: 1,
      text: 'blah blah blah blah blah blah blah blah blah blah blah blah',
      avatar: 'https://via.placeholder.com/50'
    }
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.postsWrapper}>
        {postuser.map((post) => (
          <View key={post.id} style={styles.postCard}>
            {/* Avatar a la izquierda */}
            <Image
              source={{ uri: post.avatar }}
              style={styles.avatar}
            />
            
            {/* Contenido del post */}
            <View style={styles.postContent}>
              <Text style={styles.postText}>{post.text}</Text>
              
              {/* Botón de ver respuestas */}
              <TouchableOpacity 
                style={styles.viewRepliesBtn}
              >
                <Text style={styles.btnText}>Ver respuestas</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Postuser;