import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        width: '92%',
        backgroundColor: '#18181b',
        padding: 16, // Alterei para uma unidade numérica
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#0c8c73'
    },
    image: {
        width: 50,
        height: 50
    },
    title: {
        color: '#0c8c73', 
        fontSize: 20, 
        lineHeight: 28, 
        paddingVertical: 20, 
        paddingHorizontal: 0, 
        borderBottomWidth: 0.5,
        borderBottomColor: '#2a2d30'
    },
    text: {
        color: '#0c8c73', // Alterei para a cor azul
        fontSize: 14,
        textAlign: 'center',
        padding: 12
    }
});

export default Styles;
