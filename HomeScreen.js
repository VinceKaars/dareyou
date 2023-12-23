import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import NavigationBar from './NavigationBar'; // Import NavigationBar
import { useNavigation } from '@react-navigation/native';
import { commonStyles } from './commonStyles'; // Import common styles

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <NavigationBar /> {/* Include the NavigationBar */}
      <Text style={styles.welcomeText}>Welcome to DareYou</Text>
      {/* Add Home screen content here */}
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Login'); // Navigate to LoginScreen
        }}
        style={styles.button}
      />
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate('Register'); // Navigate to RegisterScreen
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001274', // Midnight blue background color
  },
  welcomeText: {
    fontSize: 24,
    color: 'white', // White text color
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF5733', // Custom button background color
    color: 'white', // White text color
    paddingHorizontal: 30, // Add padding to the buttons
    paddingVertical: 50,
    fontSize: 18,
    fontWeight: 'bold', // Bold text
    borderRadius: 5, // Add some border radius for a rounded look
    margin: 20, // Add margin between the buttons
  },
});

export default HomeScreen;
