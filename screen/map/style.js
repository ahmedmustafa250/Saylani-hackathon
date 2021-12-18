import {StyleSheet,Dimensions} from 'react-native'

const screenWidth=Dimensions.get('window').width
const screenHeight=Dimensions.get('window').height

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    cover: {
        flex: 1
    },

    //header    
    headerCover:{
        flex:0.1,
        justifyContent:'center'
    },
    headerText:{
        fontSize:22,
        fontWeight:"bold",
        color:'white',
        marginLeft:20
    },

    //map
    mapCover:{
        flex:0.8,
        marginTop:20
    },
    map: {
    width:screenWidth,
    height:screenHeight/1.8,
    },
    goButton:{
        width:300,
        alignItems:'center',
        marginLeft:40
    },
    //Error
    error:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }

})

export default styles;