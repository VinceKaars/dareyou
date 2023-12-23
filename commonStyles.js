// commonStyles.js

import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001274',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007ACC',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
