import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './style.js'
import Arrow from '../../components/Arrow.js';


export default function QRcode({ navigation }) {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);


    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(scanned)
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }





    return (
        <View style={styles.container}>
            <LinearGradient colors={['#1CB5E0', '#000046']} style={styles.headerCover}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ marginRight: 20 }}>
                        <Arrow navigate={() => navigation.goBack()} />
                    </View>
                    <View style={{ marginRight: 80 }}>
                        <Text style={styles.headerText} >Verify by QR Code</Text>
                    </View>
                    <View></View>
                </View>
            </LinearGradient>
            <View>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
               <Button title={'Tap to Scan Again'} onPress={handleBarCodeScanned} />
            </View>
        </View>
    )
}
