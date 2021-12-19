import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainApp from '../mainContainer/main'


export default function Navigation() {
  return (
    <NavigationContainer>
        <MainApp/>
    </NavigationContainer>
  );
}
