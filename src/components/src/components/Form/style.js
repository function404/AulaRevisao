import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    FormContext: {
        width:'100%',
        height:'100%',
        backgroundColor:'#fff',
        alignItems: 'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop: 15,
        marginTop: 50,
    },
    form:{
        width:'100%',
        height:'auto',
        marginTop: 30,
        padding: 10,
    },
    formLabel:{
        color: '#000',
        fontSize: 18,
        paddingLeft: 20,
    },
    input:{
        width:'90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft:10,
    },
    ButtonCalculator:{
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 14,
        paddingBottom: 14, 
        marginLeft: 12,
        margin: 30,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: '#fff',
    },
    erroMessage:{
        fontSize: 12,
        color:'red',
        fontWeight:'bold',
        paddingLeft:20,
    },
    exeibitionResultImc:{
        width:'100%',
        height: '40%',
        alignItems:'center',
    },
    listImcs:{
        marginTop: 20,
    },
    resultImcItem:{
        fontSize: 24,
        color:'red',
        height: 50,
        width:'100%',
        paddingRight: 20,
    },
    textRsultItemList:{
        fontSize: 16,
        color:'red',
    },
});

export default styles