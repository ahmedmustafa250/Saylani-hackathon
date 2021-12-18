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
    headercover:{
        flex:0.1,
        justifyContent:'center',
        alignItems:'center'
    },
    headertext:{
        fontSize:22,
        fontWeight:"bold",
        color:'white',
        marginLeft:20
    },
    loginHeader:{
        alignItems:'center'
    },
 
    //card
    cardCover:{
        borderWidth:2,
        borderColor:'#D0D0D0',
        width:screenWidth/2.2,
    },
    khana:{
        textAlign:'center',
        fontWeight:'bold'
    },
    food:{
        textAlign:"center",
        fontWeight:'bold',
        borderBottomWidth:2,
        marginLeft:1,
        marginRight:1,
        marginBottom:7,
        marginTop:-30
    }





})

export default styles;