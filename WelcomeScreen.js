// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Limat Technology Solution</Text>

      
      <Image source={{uri:'https://limat-tech.com/wp-content/uploads/sites/236/elementor/thumbs/2-EDITED-LOGO-p6q56jyoyyo5w1oc8jk6tv1sk34ctexu3g9gumqpiw.png'}} style={styles.logo} />

      <Text style={styles.subHeading}>Welcome to Limat Technology Solutions</Text>

      <Button 
        title="Guest" 
        onPress={() => navigation.navigate('Guest')} 
      />

      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>Contact: 908880764</Text>
        <Text style={styles.emailText}>Email: limattech@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e6f2ff',  
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  logo: {
    width: 200,
    height: 100,  
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  contactContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  contactText: {
    fontSize: 14,
    color: '#333',
  },
  emailText: {
    fontSize: 14,
    color: '#333',
  },
});
