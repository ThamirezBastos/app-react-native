import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === "web" ? "100vh" : "100%"
        //web 100vh
    },
    fundo: {
        width: "100%",
        height: "100%",
        alignItems: 'center'
    },
    cardlist:{
        width: "100%",
        height: "100%",
        justifyContent:'center',
        alignItems: 'center',
      
    },
    lista:{
        color:"white",
        fontWeight: "bold",
        fontSize:16,
        width: "80%",
        textAlign: 'center',
        backgroundColor: '#5A78E4',
        borderWidth: 2,
        borderColor: "#CDEF77",
        padding: 2,
        margin:2,
        borderRadius: 6
    }
})

export default styles;