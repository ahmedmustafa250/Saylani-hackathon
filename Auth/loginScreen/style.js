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
  emailCover: {
      marginTop: 30,
      borderRadius: 50,
      height: 40,
      justifyContent: "center",
      backgroundColor: '#EAEAEA',
  },
  passwordCover: {
      marginTop: 30,
      borderRadius: 50,
      height: 40,
      justifyContent: "center",
      backgroundColor: '#EAEAEA',
  },
  button: {
      marginTop: 30
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
      backgroundColor: "#000046",
      color: "white"
  },
  google: {
      borderRadius: 5,
      padding: 5,
      width: 80,
      textAlign: 'center',
      backgroundColor: "#000046",
      color: "white"
  },
  createAccount: {
      marginTop: 10,
      alignItems: 'center',
  }
})

export default styles;