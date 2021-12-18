import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions ,Platform,Animated} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style.js'
import AppButton from '../../components/AppButton.js';


export default function TrackItem({navigation}) {

    const positions=[
        {
            "branch_name": "Aliabad",
            "latitude": 24.9200172,
            "longitude": 67.0612345
        },
        {
            "branch_name": "Numaish chowrangi",
            "latitude": 24.8732834,
            "longitude": 67.0337457
        },
        {
            "branch_name": "Saylani house phase 2",
            "latitude": 24.8278999,
            "longitude": 67.0688257
        },
        {
            "branch_name": "Touheed commercial",
            "latitude": 24.8073692,
            "longitude": 67.0357446
        },
        {
            "branch_name": "Sehar Commercial",
            "latitude": 24.8138924,
            "longitude": 67.0677652
        },
        {
            "branch_name": "Jinnah avenue",
            "latitude": 24.8949528,
            "longitude": 67.1767206
        },
        {
            "branch_name": "Johar chowrangi",
            "latitude": 24.9132328,
            "longitude": 67.1246195
        },
        {
            "branch_name": "Johar chowrangi 2",
            "latitude": 24.9100704,
            "longitude": 67.1208811
        },
        {
            "branch_name": "Hill park",
            "latitude": 24.8673515,
            "longitude": 67.0724497
        }
    ]
    
     const [location, setLocation] = useState(null);
     const [errorMsg, setErrorMsg] = useState(null);
     const [isPlaying, setisPlaying] = useState(true);
   
     useEffect( async () => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            setErrorMsg('Oops, this will not work on Snack in an Android emulator. Try it on your device!');
            return;
        }
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation({
            latitude:  location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta:  0.0922,
            longitudeDelta: 0.0421,
        });
    },[]);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    }
    else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            {
            location ? 
            <View style={styles.cover}>
                {/* //header */}
                <LinearGradient colors={['#1CB5E0', '#000046']} style={styles.headerCover}>
                    <Text style={styles.headerText}>Track Location on Map </Text>
                </LinearGradient>

                {/* Map */}
                <View style={styles.mapCover}>
                    <MapView
                        style={styles.map}
                        initialRegion={location}
                    >
                        
                        <Marker
                            draggable
                            coordinate={location}
                            onDragEnd={(e) => setState(e.nativeEvent.coordinate )}
                            title={"Mustafa's Food"}
                        />
                    </MapView>
                </View>
                <View style={styles.goButton}>
                    <AppButton text="Go to Form" navigate={()=> navigation.navigate('Form')} fontSize={18} backgroundColor="#000046" color="white" paddingLeft={80} paddingRight={80} />
                </View>
            </View>
            : 
            <View style={styles.error}>
                <Text>{errorMsg}</Text>
            </View>
        }
        </View>
        
  )
}


