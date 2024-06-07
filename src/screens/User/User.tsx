import React, { useEffect, useState } from 'react';
import { ImageBackground, Linking, Text, TouchableOpacity, View } from 'react-native';
import bgFuturistic from '../../../public/bg-futuristic.svg';
import { getChatsByUserId } from '../../actions/chats';
import CardHome from '../../components/CardHome/CardHome';
import Footer from '../../components/Footer/Footer';
import Styles from './Styles';

interface UserProps {
  route: {
    params: {
      user: {
        displayName: string;
      };
    };
  };
  navigation: {
    push: (screen: string) => void;
  };
}

const User: React.FC<UserProps> = ({ route, navigation }) => {
  const { user } = route.params;
  const [loading, setLoading] = useState(true);
  const [chats, setChats] = useState<any[]>([]);
  
  const openURL = () => {
    const url = 'https://codai-hub-development.web.app/';
    Linking.openURL(url)
      .catch((err) => console.error('Erro ao abrir a URL:', err));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getChatsByUserId(user);
      setChats(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <View style={Styles.container}>
      <View style={Styles.viewOne}>
        <ImageBackground source={bgFuturistic} style={Styles.bgImageOne} imageStyle={{ borderRadius: 16 }}>
          <Text style={Styles.textTitle}>
            Olá, {user.displayName}
          </Text>
          <View style={Styles.buttons}>
            <TouchableOpacity
              onPress={(e) => {
                e.preventDefault();
                navigation.push('Login');
              }}
              style={Styles.buttonOne}
            >
              <Text style={Styles.buttonOneText}>Voltar ao Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={{ width: '92%' }}>
        <Text style={{ fontSize: 30, color: '#3E65CD', textAlign: 'center' }}>Sobre o Usuário</Text>
        <Text style={{ color: '#3E65CD', fontSize: 20, textAlign: 'center' }}>Detalhes do usuário aqui...</Text>
      </View>
      <View style={Styles.viewCards}>
        {loading ? (
          <Text style={{ color: '#fff', textAlign: 'center', marginTop: '30vh' }}>Carregando chats...</Text>
        ) : (
          chats.map((chat, index) => (
            <CardHome
              key={index}
              srcImage={cloud}
              title={chat.title}
              text={chat.text}
            />
          ))
        )}
      </View>
      <Footer />
    </View>
  );
};

export default User;
