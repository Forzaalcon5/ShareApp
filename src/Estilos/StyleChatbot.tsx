import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  floatButtonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    zIndex: 999,
    elevation: 10,
  },
  chatFloatBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0098ff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#0098ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  chatIcon: {
    fontSize: 28,
  },
  chatWindow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'white',
    zIndex: 1000,
  },
  chatContainer: {
    flex: 1,
  },
  chatHeader: {
    backgroundColor: '#0098ff',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 16,
  },
  chatHeaderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  botAvatar: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botAvatarText: {
    fontSize: 20,
  },
  chatHeaderTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  status: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 12,
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  clearChatBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  headerBtnText: {
    fontSize: 18,
  },
  closeChatBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtnText: {
    color: 'white',
    fontSize: 24,
  },
  chatMessages: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  chatMessagesContent: {
    padding: 20,
    paddingBottom: 10,
  },
  message: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    marginBottom: 12,
  },
  userMessage: {
    flexDirection: 'row-reverse',
  },
  messageAvatar: {
    width: 32,
    height: 32,
    backgroundColor: '#0098ff',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userAvatar: {
    backgroundColor: '#34495e',
  },
  avatarText: {
    fontSize: 16,
  },
  messageContent: {
    maxWidth: '70%',
    gap: 6,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 16,
  },
  botMessageBubble: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 4,
  },
  userMessageBubble: {
    backgroundColor: '#0098ff',
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  userMessageText: {
    color: 'white',
  },
  copyBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignSelf: 'flex-start',
  },
  copyBtnText: {
    fontSize: 12,
    color: '#555',
  },
  chatInputContainer: {
    flexDirection: 'row',
    gap: 10,
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  chatInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 16,
    fontSize: 14,
    maxHeight: 80,
    color: '#000',
  },
  sendBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0098ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnDisabled: {
    backgroundColor: '#ccc',
  },
  sendIcon: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});