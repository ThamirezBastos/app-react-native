import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === "web" ? "100vh" : "100%"
        //web 100vh
    },
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: "90%",
        height: "72%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5A78E4',
        borderRadius: 12
    },
    titulo: {
        color: "#FF93CA",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 2
    },
    inputs: {
        width: "100%",
        padding: 8
    },
    input: {
        backgroundColor: "white",
        width: "100%",
        padding: 8,
        marginTop: 12
    },
    btn: {
        backgroundColor: "#CDEF77",
        marginTop: 32,
        padding: 8,
        borderRadius: 4        
    },
    texto: {
        fontSize: 18,
        color: "white",
        textAlign: 'center',
        fontWeight: "bold"
    }
})

export default styles;