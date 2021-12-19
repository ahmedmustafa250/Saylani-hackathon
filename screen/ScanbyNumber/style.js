import {StyleSheet,Dimensions} from 'react-native'

const screenWidth=Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cover: {
        flex: 1
    },

    //header    
    headerCover:{
        // flex:0.1,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        height:70,
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

    Arrow:{
        marginRight: 20 
    },  
    verifyText:{
        marginRight: 80 
    },


    //Seachbar
    searchbarCover:{
        borderWidth:2,
        borderColor:'#D8D8D8',
         marginTop:30,
         flexDirection:'row',
         borderRadius:10,
         marginLeft:10,
         marginRight:10,
         alignItems:'center'
    },
    searchbarInput:{
        height:40,
        width:screenWidth/1.1,
        marginLeft:10
    }


})

export default styles;