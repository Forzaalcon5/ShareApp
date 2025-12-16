import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingBottom: 100,
  },
  createButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0098ff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#0098ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  createButtonText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 36,
  },
});