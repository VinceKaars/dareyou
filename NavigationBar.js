// NavigationBar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function NavigationBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DareYou</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10, // Adjust the height as needed
    backgroundColor: '#001274', // Midnight blue background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white', // White text color
  },
});

export default NavigationBar;
