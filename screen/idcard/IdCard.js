import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style.js'
import Barcode from '@kichiyaki/react-native-barcode-generator';

export default function StatusScreen() {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#1CB5E0', '#000046']} style={styles.headercover}>
                <Text style={styles.headertext}>Application Status </Text>
            </LinearGradient>
            <View style={styles.cardCover}>
                <View style={styles.card}>
                    <View >
                    <Text style={styles.qrcode}>
                        <Barcode value='1234565'/>
                    </Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.sno}>SNO :  </Text>
                        <Text style={styles.snoBorder}>168922</Text>
                    </View>
                    <View>
                        <Text style={styles.authorized}>Authorized Signature</Text>
                        <Text style={{textAlign:"center",marginBottom:10}}>_____________</Text>
                    </View>
                </View>
            </View>
        </View>

    )
}
