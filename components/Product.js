import React from 'react'
import {View,Text,Image,StyleSheet,Dimensions} from 'react-native'

const screenWidth=Dimensions.get('window').width

export default function Product({data}) {
    return (
       <View style={styles.container}>
           <View style={styles.imageCover}>
                <Image source={data.image} style={styles.image}  />
           </View>
           <View style={styles.textCover}>
                <Text style={styles.title}>{data.title}</Text>
                <Text>{data.body}</Text>
                <Text style={styles.price}>{data.price}</Text>
           </View>
       </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:screenWidth/2.5,
        justifyContent:'center',
        alignItems:"center",
        padding:10,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        borderRadius:10,
        borderWidth:2,
        borderColor:'#D3D3D3'


    },
    image:{
        width:100,
        height:100,
        borderRadius:50
    },
    textCover:{
        marginTop:15,
       alignItems:'center'
    },
    title:{
        fontWeight:'bold'
    },
    price:{
        fontWeight:"bold",
        color:"#1CB5E0"
    }

})