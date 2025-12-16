import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { styles } from '../Estilos/Styleposts';

interface Reply {
  id: number;
  username: string;
  text: string;
  avatar: string;
}

interface PostsProps {
  username?: string;
  text?: string;
  avatar?: string;
}

const Posts: React.FC<PostsProps> = ({ 
  username = 'Carlitos09', 
  text = 'blah blah blah blah blah blah blah blah blah blah blah blah',
  avatar = 'https://via.placeholder.com/55'
}) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [replies, setReplies] = useState<Reply[]>([
    {
      id: 1,
      username: 'EteSech',
      text: 'blah blah blah blah blah blah blah blah blah blah blah blah',
      avatar: 'https://via.placeholder.com/55'
    }
  ]);

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newReply: Reply = {
        id: replies.length + 1,
        username: 'Usuario',
        text: commentText,
        avatar: 'https://via.placeholder.com/55'
      };
      setReplies([...replies, newReply]);
      setCommentText('');
      setShowCommentBox(false);
      setShowReplies(true);
    }
  };

  return (
    <View style={styles.postContainer}>
      {/* Post principal */}
      <View style={styles.postCard}>
        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
        />

        <View style={styles.postContent}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>

        <View style={styles.votes}>
          <TouchableOpacity>
            <Text style={styles.up}>▲</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.down}>▼</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Botones de acción */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => setShowReplies(!showReplies)}
        >
          <Text style={styles.actionBtnText}>Ver respuestas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => setShowCommentBox(!showCommentBox)}
        >
          <Text style={styles.actionBtnText}>Comentar</Text>
        </TouchableOpacity>
      </View>

      {/* Caja de comentario */}
      {showCommentBox && (
        <View style={styles.commentBox}>
          <TextInput
            value={commentText}
            onChangeText={setCommentText}
            placeholder="Escribe tu comentario..."
            placeholderTextColor="#999"
            multiline
            style={styles.commentInput}
          />
          <View style={styles.commentActions}>
            <TouchableOpacity
              onPress={handleAddComment}
              style={styles.submitBtn}
            >
              <Text style={styles.btnText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowCommentBox(false);
                setCommentText('');
              }}
              style={styles.cancelBtn}
            >
              <Text style={styles.btnText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Respuestas */}
      {showReplies && (
        <View style={styles.repliesSection}>
          {replies.map((reply) => (
            <View key={reply.id} style={styles.replyWrapper}>
              <View style={styles.replyLine} />

              <View style={styles.replyCard}>
                <Image 
                  source={{ uri: reply.avatar }} 
                  style={styles.avatar} 
                />

                <View style={styles.postContent}>
                  <Text style={styles.username}>{reply.username}</Text>
                  <Text style={styles.text}>{reply.text}</Text>
                </View>

                <View style={styles.votes}>
                  <TouchableOpacity>
                    <Text style={styles.up}>▲</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.down}>▼</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Posts;