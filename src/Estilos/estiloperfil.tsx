import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    paddingBottom: 100,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#0d2a54',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 12,
    gap: 15,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  username: {
    color: '#67c5ff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bio: {
    color: '#fff',
    fontSize: 13,
    lineHeight: 18,
  },
});