import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style.js'

export default function StatusScreen() {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#1CB5E0', '#000046']} style={styles.headercover}>
                <Text style={styles.headertext}>Application Status </Text>
            </LinearGradient>
            <View style={styles.cardCover}>
                <View >
                    <Text style={styles.khana}>Khana Sab kay Liay</Text>
                </View>
                <View>
                    <Text>Name: </Text>
                    <Text>Father name</Text>
                    <Text>CNIC No:</Text>
                    <Text>Date of Issue:</Text>
                    <Text>Date of Exp:</Text>
                    <Text></Text>
                    <Text></Text>
                </View>
                <View>
                    <Text style={styles.food}>Food Bank Branch Name</Text>
                    <Text>Sylani Gulshan campus,Near Mumtaz mobile Mall Gulshan Chowrangi Karachi</Text>
                </View>
            </View>
        </View>

    )
}
