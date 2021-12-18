import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import First from './Auth/firstScreen/First'
import Login from './Auth/loginScreen/Login'
import Signup from './Auth/signupScreen/Signup'

import NavigationContainer from './navigation/navigationContainer/NavigationContainer'


export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40

  },
});
