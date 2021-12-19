import React, { useState, useEffect } from 'react'
import { Text, View,Image, Platform, TextInput, ScrollView ,Button,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppButton from '../../components/AppButton.js';
import styles from './style.js'
import { FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import ModalDropdown from 'react-native-modal-dropdown';

export default function TrackItem({ navigation }) {
    
    const [name, setName] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [cnic, setCnic] = useState(false)
    const [income, setIncome ]= useState(false)
    const [familyMember, setFamilyMember] = useState(false)
    const [foodCategory, setFoodCategory] = useState(false)
    const [image, setImage] = useState(null); // profile
    const [selectedImage, setSelectedImage] = React.useState(null); //cnic


    
    


    //selected Image
    const pickCnic = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
          setSelectedImage(result.uri);
        }
      };


    //Image Picker from Gallery
    
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };


      const onPressFunction=()=>{
        return
      }


    return (
        <View style={styles.container}>
            <View style={styles.cover}>
                {/* //header */}
                <LinearGradient colors={['#1CB5E0', '#000046']} style={styles.headerCover}>
                    <Text style={styles.headerText}>Help Appliation From </Text>
                </LinearGradient>
                <View style={styles.form}>
                    <View style={styles.subCover}>
                        <View style={styles.loginHeader}>
                            <Image source={require('../../images/logo.png')} style={{width:100,height:100}}/>
                            <Text style={{ color: 'black', fontSize: 20 }}>Appliation Form</Text>
                        </View>
                        <ScrollView>
                            <View style={styles.usernameCover}>
                                <TextInput style={{ marginLeft: 10, width: 270 }} placeholder="Name" onChange={(e) => setUsername(e)} />
                            </View>
                            <View style={styles.emailCover}>
                                <TextInput style={{ marginLeft: 10, width: 270 }} placeholder="Father Name" onChange={(e) => setEmail(e)} />
                            </View>
                            <View style={styles.passwordCover}>
                                <TextInput style={{ marginLeft: 10, width: 270 }} placeholder="CNIC" keyboardType='numeric' onChange={(e) => setPassword(e)} />
                            </View>
                            <View style={styles.passwordCover}>
                            <TextInput style={{ marginLeft: 10, width: 270 }} placeholder="Income" keyboardType='numeric' onChange={(e) => setPassword(e)} />
                            </View>
                            <View style={styles.passwordCover}>
                                <TextInput style={{ marginLeft: 10, width: 270 }} placeholder="No of Family members" keyboardType='numeric' onChange={(e) => setPassword(e)} />
                            </View>
                            <View style={styles.passwordCover}>
                                <ModalDropdown options={['Monthly', 'Daily']} defaultValue='Select Food Category' />
                            </View>
                            <View style={styles.passwordCover1}>
                                <View >
                                    <TouchableOpacity onPress={pickImage}>
                                        <Text style={styles.upload} >Upload Image</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                     <Image source={image ? { uri: image } : require('../../images/avator.png')} style={{width:40,height:40,marginRight:40}} />
                                </View>
                            </View>
                            <View style={styles.passwordCover1}>
                                <View >
                                    <TouchableOpacity onPress={pickCnic}>
                                        <Text style={styles.upload} >Upload CNIC image</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                     <Image source={image ? { uri: selectedImage } : require('../../images/avator.png')} style={{width:40,height:40,marginRight:40}} />
                                </View>
                            </View>
                        </ScrollView>
                        <View style={styles.button}>
                            <View>
                                <AppButton navigate={()=> navigation.navigate('TabNavigator')} text="Submit" fontSize={18} backgroundColor="#000046" color="white" paddingLeft={80} paddingRight={80} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}


