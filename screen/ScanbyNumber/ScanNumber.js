import React from 'react'
import { View, Text ,TextInput, Dimensions} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style.js'
import Arrow from '../../components/Arrow.js';
import { Feather } from '@expo/vector-icons';

const screenWidth=Dimensions.get('window').width
export default function ScanNumber({ navigation }) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#1CB5E0', '#000046']} style={styles.headerCover}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.Arrow}>
                        <Arrow navigate={() => navigation.goBack()} />
                    </View>
                    <View style={styles.verifyText}>
                        <Text style={styles.headerText} >Verify by QR Code</Text>
                    </View>
                    <View></View>
                </View>
            </LinearGradient>
            <View style={{flex:0.9}}>
                <View style={styles.searchbarCover}>
                    <Feather name="search" size={25} color="black" />
                    <TextInput placeholder='Search here' style={styles.searchbarInput}/>
                </View>
            </View>
        </View>
    )
}
