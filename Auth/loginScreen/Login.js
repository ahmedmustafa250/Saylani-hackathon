import React,{useState} from 'react'
import { View, Text,TextInput, TouchableOpacity,KeyboardAvoidingView,Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import AppButton from "../../components/AppButton"
import Arrow from '../../components/Arrow';
import styles from './style';


export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onPressButton = () => {
        if(!email && password){
            alert('Email is Empty')
        } 
        else if(email && !password){
            alert('Password is Empty')
        }
         if(!email && !password) {
            alert('Fill email and Password')
        }
        else if(!email || !password) {
            alert('Fill email and Password')
        }
        else{
            navigation.navigate('TabNavigator')
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
                        <Text style={{ color: "white",fontSize:20 }}>Login</Text>
                    </View>
                    <View style={styles.emailCover}>
                        <TextInput style={{ marginLeft: 15, width: 250 }} placeholder="Email" value={email} onChange={(e)=> setEmail(e)}/>
                    </View>
                    <View style={styles.passwordCover}>
                        <TextInput style={{ marginLeft: 15, width: 250 }} placeholder="Password" value={password} secureTextEntry={true} onChange={(e)=> setPassword(e)} />
                    </View>
                    <View style={styles.button}>
                        <View>
                            <AppButton text="Login" navigate={onPressButton} fontSize={18} backgroundColor="#000046" color="white" paddingLeft={80} paddingRight={80} />
                        </View>
                        <View style={styles.createAccount}>
                            <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Signup')}>
                                <Text style={{ color: "white", fontSize: 16 }}>Create an account?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}
