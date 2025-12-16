import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  postContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  postCard: {
    backgroundColor: '#0d2a54',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderLeftWidth: 8,
    borderLeftColor: '#0098ff',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginRight: 10,
    backgroundColor: '#ccc',
  },
  postContent: {
    backgroundColor: '#ffffff',
    padding: 10,
    flex: 1,
    borderRadius: 8,
  },
  username: {
    color: '#67c5ff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    color: '#000',
    fontSize: 14,
  },
  votes: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  up: {
    color: 'red',
    fontSize: 22,
    marginBottom: 5,
  },
  down: {
    color: 'cyan',
    fontSize: 22,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  actionBtn: {
    backgroundColor: '#006bff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  actionBtnText: {
    color: 'white',
    fontWeight: '600',
  },
  commentBox: {
    backgroundColor: '#0d2a54',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 8,
    borderLeftColor: '#0098ff',
  },
  commentInput: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    minHeight: 80,
    color: '#000',
    fontSize: 14,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  commentActions: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
  },
  submitBtn: {
    backgroundColor: '#27ae60',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelBtn: {
    backgroundColor: '#95a5a6',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
  },
  repliesSection: {
    marginTop: 10,
  },
  replyWrapper: {
    marginLeft: 40,
    position: 'relative',
  },
  replyLine: {
    width: 2,
    height: 80,
    backgroundColor: 'white',
    position: 'absolute',
    left: -20,
    top: 15,
  },
  replyCard: {
    backgroundColor: '#0d2a54',
    borderLeftWidth: 8,
    borderLeftColor: '#0098ff',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
});