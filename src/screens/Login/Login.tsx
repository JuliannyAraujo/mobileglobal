import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import iconEmail from '../../../public/mail-icon.svg';
import iconPassword from '../../../public/password-icon.svg';
import openEye from '../../../public/svgexport-3.svg';
import closeEye from '../../../public/svgexport-4-1.svg';
import firebase_app from '../../firebase/config';
import Styles from './Styles';

const auth = getAuth(firebase_app);

type Props = {
    navigation: any;
};

export default function Login({ navigation }: Props) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const storeData = async (value: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('user', jsonValue);
        } catch (e) {
            console.log(e);
        }
    };

    async function signIn() {
        setError('');
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'User',
                            params: { user: user },
                        },
                    ],
                })
            );
        } catch (error: any) {
            console.log(error);
            error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password'
                ? setError('Email ou senha incorretos')
                : setError('Erro ao tentar login');
        }
    }

    const validateEmail = (emailTest: string) => {
        return String(emailTest)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function handleSubmit() {
        setError('');
        if (!validateEmail(email)) {
            setError('Digite um email válido');
            return;
        } else if (senha.length === 0) {
            setError('Digite a senha');
            return;
        }
        signIn();
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={Styles.container}>
            <View style={{ width: '70%', alignItems: 'center', marginBottom: 20 }}>
                <Text style={Styles.subTitle}>Digite seu e-mail e sua senha</Text>
            </View>

            {/* Add the Image here */}
            <Image
                source={require('../../../public/oceano.png')} // Substitua pelo caminho do seu logotipo PNG
                style={{ width: 150, height: 150, marginBottom: 20 }} // Ajuste o tamanho conforme necessário
            />

            <View style={Styles.inputContainer}>
                <Image source={iconEmail} style={Styles.imgs} />
                <TextInput
                    style={{ justifyContent: 'flex-start', ...Styles.input }}
                    placeholder='email@easytech.com'
                    autoComplete='off'
                    keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
            </View>
            <View style={Styles.inputContainerSenha}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={iconPassword} style={Styles.imgs} />
                    <TextInput
                        style={Styles.input}
                        secureTextEntry={showPassword}
                        placeholder='Senha'
                        autoComplete='off'
                        keyboardType='default'
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                    />
                </View>
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image source={showPassword ? openEye : closeEye} style={Styles.imgs} />
                </TouchableOpacity>
            </View>
            {error && <Text style={{ color: 'red', marginVertical: 12 }}>*{error}*</Text>}
            <View style={{ width: '60%', alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ marginVertical: 12 }}><Text style={{ color: '#9CE5C9' }}>Esqueceu a senha?</Text></TouchableOpacity>
            </View>
            <TouchableOpacity style={Styles.buttonLogin} onPress={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <Text style={Styles.textButtonLogin}>Entrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}
