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
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontSize:22,
        fontWeight:"bold",
        color:'white',
        marginLeft:20
    },
    loginHeader:{
        alignItems:'center'
    },
    //from

    form:{
        flex:1,
        alignItems:'center',
    },
    subCover:{
        flex:0.95,
        width:screenWidth/1.2,
        marginTop:20,
        justifyContent:'center'
    },
    usernameCover: {
        marginTop: 20,
        height: 40,
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor:'#EAEAEA',
        borderRadius:10
    },
    emailCover: {
        marginTop: 20,
        height: 40,
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor:'#EAEAEA',
        borderRadius:10
    },
    passwordCover: {
        flexDirection:'row',
        marginTop: 20,
        height: 40,
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor:'#EAEAEA',
        borderRadius:10
    },
    passwordCover1: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 20,
        height: 40,
        backgroundColor:'#EAEAEA',
        borderRadius:10,
    },
    phoneCover: {
        marginTop: 20,
        height: 55,
        alignItems: 'center',
    },
    button: {
        marginTop: 20
    },
    buttonBottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },

    upload:{
        marginLeft:10,
        marginTop:5,
        backgroundColor:'#000046',
        color:'white',
        borderRadius:10,
        padding:5
    }






})

export default styles;