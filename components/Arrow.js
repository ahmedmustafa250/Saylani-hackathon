import React from 'react'
import {View,StyleSheet,TouchableOpacity} from "react-native"
import { Ionicons } from '@expo/vector-icons';


export default function Arrow(props) {
    return (
       <View>
           <TouchableOpacity activeOpacity={0.7} onPress={props.navigate} >
              <Ionicons name="arrow-back" size={40} color="white" />
           </TouchableOpacity>
       </View>
    )
}
