// screens/GuestScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GuestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Guest! Enjoy your visit.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA', // Light blue background (similar to the welcome screen)
  },
  text: {
    fontSize: 24,
    color: '#004D40', // Dark green text for a subtle contrast
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default GuestScreen;
