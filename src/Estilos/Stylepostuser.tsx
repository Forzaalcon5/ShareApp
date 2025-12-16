import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  postsWrapper: {
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  postCard: {
    backgroundColor: '#0d2a54',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 15,
    // Sombra para darle profundidad
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
  },
  postContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  postText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  viewRepliesBtn: {
    backgroundColor: '#0098ff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  btnText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
});