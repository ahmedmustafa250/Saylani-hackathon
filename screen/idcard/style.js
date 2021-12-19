import {StyleSheet,Dimensions} from 'react-native'

const screenWidth=Dimensions.get('window').width
const screenHeight=Dimensions.get('window').height

const styles = StyleSheet.create({

    container: {
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
        flex:0.9,
       
        justifyContent:'center',
        alignItems:'center'
        // borderColor:'#D0D0D0',
    },
    card:{
        borderWidth:2,
        borderColor:'#D0D0D0',
        borderRadius:10,
        width:screenWidth/1.2,
        marginLeft:10,
        marginTop:10,
        height:300
    },
    qrcode:{
        textAlign:"center",
        fontWeight:'bold',
        height:120,
        // borderWidth:2,
        // borderColor:'red',
        marginTop:20,
        marginLeft:10,
        marginRight:10
    },
    sno:{
    
    },
    snoBorder:{
        borderBottomWidth:2,
    },
    authorized:{
        marginTop:10,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:10
        
    }




})

export default styles;