import React, { useState,  } from 'react'
import { View, Text,Image , TextInput,KeyboardAvoidingView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import AppButton from "../../components/AppButton"
import Arrow from '../../components/Arrow';
import styles from './style';


export default function Signup({ navigation }) {


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onPressButton = () => {
        if(!username && email && password){
            alert('Username is Empty')
        } 
        else if(username && !email && password ){
            alert('Email is Empty')
        }
        else if(username && email && !password ) {
            alert('Password is Empty')
        }
        else if(!username || !email || !password) {
            alert('Fill the all Fields')
        }
        else{
            navigation.navigate('Login')
        }
      };
    return (
        <LinearGradient colors={['#000046', '#1CB5E0']} style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                <View style={styles.backButton}>
                    <Arrow navigate={() => navigation.goBack()} />
                </View>
                <View style={styles.cover}>
                    <View style={styles.loginHeader}>
                        <Image source={require('../../images/logo.png')} style={{width:150,height:150}}/>
                        <Text style={{ color: 'white' }}>Make Account & Join us </Text>
                    </View>
                    <View style={styles.usernameCover}>
                        <TextInput style={{ marginLeft: 10, width: 270 }} placeholder="Username" onChange={(e)=> setUsername(e)}/>
                    </View>
                    <View style={styles.emailCover}>
                        <TextInput style={{ marginLeft: 10, width: 270 }} placeholder="Email"  onChange={(e)=> setEmail(e)}/>
                    </View>
                    <View style={styles.passwordCover}>
                        <TextInput style={{ marginLeft: 10, width: 270 }} placeholder="Password" secureTextEntry={true} onChange={(e)=> setPassword(e)} />
                    </View>
    
                        
                    <View style={styles.button}>
                        <View>
                            <AppButton navigate={onPressButton} text="Sign up" fontSize={18} backgroundColor="#000046" color="white" paddingLeft={80} paddingRight={80} />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

