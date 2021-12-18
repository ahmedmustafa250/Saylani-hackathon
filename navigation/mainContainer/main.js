import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstScreen from '../../Auth/firstScreen/First';
import LoginScreen from '../../Auth/loginScreen/Login';
import SignupScreen from '../../Auth/signupScreen/Signup';
import TestScreen from '../../screen/map/Test';
import FormScreen from '../../screen/form/Form';
import StatusScreen from '../../screen/status/Status'
import IdCardScreen from '../../screen/idcard/IdCard'
import BranchManagerScreen from '../../screen/branchManager/BranchManager';
import QRcodeScreen from '../../screen/qrcode/QRcode';
import ScanNumberScreen from '../../screen/ScanbyNumber/ScanNumber';


import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();

export default function main() {
    return (
        <Stack.Navigator initialRouteName="BranchManager" screenOptions={{headerShown:false}}>
            <Stack.Screen name="First" component={FirstScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="Form" component={FormScreen} />
            <Stack.Screen name="BranchManager" component={BranchManagerScreen} />
            <Stack.Screen name="QRcode" component={QRcodeScreen} />
            <Stack.Screen name="ScanNumber" component={ScanNumberScreen} />
        </Stack.Navigator>
    );
}

  const Tab = createBottomTabNavigator();  
  const TabNavigator=()=>{
      return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Map') {
                    iconName = focused
                    ? 'map-outline'
                    : 'map-outline';
                } 
                else if (route.name === 'Status') {
                    iconName = focused ? 'md-gift-outline' : 'md-gift-outline';
                }
                else if (route.name === 'Idcard') {
                    iconName = focused ? 'md-grid-outline' : 'md-grid-outline';
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#1CB5E0',
                tabBarInactiveTintColor: 'gray',
                headerShown:false,
                tabBarHideOnKeyboard: true
                
            })}
        >
            <Tab.Screen name='Map'       component={TestScreen}  />
            <Tab.Screen name='Status'       component={StatusScreen}  />
            <Tab.Screen name='Idcard'       component={IdCardScreen}  />

        </Tab.Navigator>
      )
  }

















