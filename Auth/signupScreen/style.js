import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButton:{
        paddingTop:20,
        marginLeft:15
    },
    cover:{
        flex:0.8,
        paddingTop:40,
        justifyContent: "center",
        alignItems: "center",
    },
    loginHeader: {
        alignItems: "center",
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
        marginTop: 20,
        height: 40,
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor:'#EAEAEA',
        borderRadius:10
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
    facebook: {
        borderRadius: 5,
        padding: 5,
        width: 80,
        textAlign: 'center',
        backgroundColor: "blue",
        color: "white"
    },
    google: {
        borderRadius: 5,
        padding: 5,
        width: 80,
        textAlign: 'center',
        backgroundColor: "blue",
        color: "white"
    }
})

export default styles;