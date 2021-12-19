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
        alignItems:'center',
    },
    headerText:{
        fontSize:22,
        fontWeight:"bold",
        color:'white',
        marginLeft:20,
        marginTop:5
    },
    loginHeader:{
        alignItems:'center'
    },


})

export default styles;