import React from 'react'
import { View, Text, StyleSheet ,Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import AppButton from '../../components/AppButton';
import styles from './style';

export default function First({navigation}) {
    return (
        <LinearGradient colors={['#000046', '#1CB5E0']} style={styles.container}>
            <View style={styles.cover}>
                <View style={styles.icon}>
                    <Image source={require('../../images/logo.png')} style={{width:150,height:150}}/>
                    <Text style={styles.iconText}>Welcome to the Sylani Food's!</Text>
                </View>
                <View style={styles.signIn}>
                    <AppButton text="Sign In" fontSize={18} backgroundColor="#000046" color="white" paddingLeft={80} paddingRight={80} navigate={() => navigation.navigate('Login')}/>
                </View>
                <View style={styles.signUp}>
                    <AppButton text="Sign Up" fontSize={18} backgroundColor="#000046" color="white" paddingLeft={80} paddingRight={80} navigate={()=> navigation.navigate('Signup')}/>
                </View>
            </View>
        </LinearGradient>
    )
}

