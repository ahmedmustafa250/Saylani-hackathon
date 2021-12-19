import React from 'react'
import { View,TouchableOpacity,Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import AppButton from '../../components/AppButton';
import styles from './style';

export default function BranchManager({navigation}) {
    return (
        <LinearGradient colors={['#000046', '#1CB5E0']} style={styles.container}>
            <View style={styles.cover}>
                <View style={styles.icon}>
                    <Image source={require('../../images/logo.png')} style={{width:150,height:150}}/>
                </View>
                <View style={styles.signIn}>
                         <AppButton text="Scan by Number" navigate={() => navigation.navigate('ScanNumber')} fontSize={18} backgroundColor="#000046" color="white" paddingLeft={80} paddingRight={80} />
                </View>
                <View style={styles.signUp}>
                    <AppButton text="Scan by QR Code" navigate={()=> navigation.navigate('QRcode')} fontSize={18} backgroundColor="#000046" color="white" paddingLeft={80} paddingRight={80} />
                </View>
            </View>
        </LinearGradient>
    )
}

