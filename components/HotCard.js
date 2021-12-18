import React from 'react'
import { View , Text, Image , Dimensions , StyleSheet} from 'react-native'
 
const ScreenWidth=Dimensions.get('window').width
const ScreenHeight=Dimensions.get('window').height

export default function HotCard({data}) {
    return (
       <View style={styles.container}>
           <View style={styles.cover(data.special)}>
                <Image source={data.image} style={styles.image}/>
                <Text style={styles.text(data.special)}>{data.title}</Text>
           </View>
       </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginLeft:10,
    },
    cover:special=>({
        width:ScreenWidth/5,
        alignItems:'center',
        backgroundColor:special ? "#1CB5E0" : '#FFFFFF',
        borderTopEndRadius:20,
        borderBottomEndRadius:20,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        height:90,
        justifyContent:'center'
    }),
    image:{
        width:50,
        height:50,
        borderRadius:50,
        marginTop:2
    },
    text:special=>({
        color:special ? "#FFFFFF" : 'black',
        textAlign:"center"
    })
})
