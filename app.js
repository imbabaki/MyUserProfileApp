import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require('./assets/images/profile.jpg')} 
      />
      <Text style={styles.name}>Nerrenze Y. Marata</Text>
      <Text style={styles.bio}>
        Software Developer with a passion for mobile app development. Loves exploring new technologies.
      </Text>
      <Button mode="contained" onPress={() => alert('Edit Profile')}>
        Edit Profile
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
