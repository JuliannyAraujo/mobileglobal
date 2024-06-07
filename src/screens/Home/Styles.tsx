import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#001F3F', // Fundo azul escuro
        minHeight: '100%',
    },
    bgImageOne: {
        padding: 24, // Convertido '1.5rem' para pixels para consistência
        borderColor: '#3E65CD', // Borda azul clara
        borderWidth: 1,
        borderRadius: 16,
    },
    viewOne: {
        width: '92%',
        marginVertical: 80, // Convertido '5rem' para pixels para consistência
    },
    textTitle: {
        fontSize: 24, // Convertido '1.5rem' para pixels para consistência
        lineHeight: 32, // Convertido '2rem' para pixels para consistência
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 16, // Convertido '1rem' para pixels para consistência
        color: '#FFFFFF', // Texto branco
    },
    textDefault: {
        fontSize: 16, // Convertido '1rem' para pixels para consistência
        textAlign: 'center',
        marginBottom: 32, // Convertido '2rem' para pixels para consistência
        color: '#B0C4DE', // Texto azul claro
    },
    buttons: {
        gap: 40, // Convertido '2.5rem' para pixels para consistência
        paddingHorizontal: 48, // Convertido '3rem' para pixels para consistência
    },
    buttonOne: {
        padding: 22,
        backgroundColor: '#3E65CD', // Fundo azul claro
        borderRadius: 12,
    },
    buttonOneText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    buttonTwo: {
        padding: 22,
        backgroundColor: 'transparent',
        borderRadius: 12,
        borderColor: '#3E65CD', // Borda azul clara
        borderWidth: 1,
    },
    buttonTwoText: {
        color: '#3E65CD', // Texto azul claro
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    riskImage: {
        width: '50vw',
        height: 12,
        resizeMode: 'contain',
    },
    viewCards: {
        marginTop: 40, // Convertido '2.5rem' para pixels para consistência
        marginBottom: 80, // Convertido '5rem' para pixels para consistência
        alignItems: 'center',
        gap: 18, // Convertido '1.15rem' para pixels para consistência
    },
});

export default Styles;
