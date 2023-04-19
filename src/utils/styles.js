import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Buttuon: {
      marginTop: 20,
    },

    scrollview:{
      width: '100%',

      padding: 10,
    },

    contentItem:{
      width: '90%',
      minHeight: '300px',
      height: 'fit-content',
      overflow: 'hidden',
      backgroundColor: 'rgb(60, 62, 68)',
      borderRadius: '10px',
      marginBottom: '20px',
      borderWidth: '3px',
      shadowColor: '#171717',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    
    containerItem: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
    },
    chad: {
      backgroundColor: 'rgb(60, 62, 68)',
    },

    char: {
      textAlign: 'center',
      alignItems: 'center',
      color: '#fff',
      padding: 5,
    },
    name:{
      fontSize: 28,
    },
    // game
    namePersonagem:{
      fontSize: 22,
      textAlign: 'center',
      marginBottom: 10,
      maxHeight: 80,
    },
    contentButtons:{
      margin: 5,
    },
    subStatus:{
      textAlign: 'center',
      fontSize: 18,
    },
    statusButton:{
      marginTop: 5,
      backgroundColor: "#00c2cc",
      borderColor: "#fff",
    },
    pontos:{
      textAlign: 'center',
      marginTop: 10,
      fontSize: 18,
    },
    right:{
      textAlign: 'center',
      marginTop: 5,
      color: 'green',
    },
    err:{
      textAlign: 'center',
      marginTop: 5,
      color: 'red',
    },
    pontos:{
      textAlign: 'center',
      fontSize: 22,
      marginTop: 5,
    }
  });

export default styles;  