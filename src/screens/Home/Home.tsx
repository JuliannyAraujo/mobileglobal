import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import clock from '../../../public/clock.svg';
import cloud from '../../../public/cloud.svg';
import code from '../../../public/code.svg';
import Fundo from '../../../public/fundo.svg'; // Atualize esta linha
import CardHome from '../../components/CardHome/CardHome';
import Footer from '../../components/Footer/Footer';
import Styles from './Styles';

interface HomeProps {
  navigation: {
    push: (screen: string) => void;
  };
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.viewOne}>
        <ImageBackground source={Fundo} style={Styles.bgImageOne} imageStyle={{ borderRadius: 16 }}>
          <Text style={Styles.textTitle}>
            Os oceanos são grande parte <Text style={{ color: '#3E65CD' }}>de nossas vidas</Text> e é hora de percebemos a importância dele!
          </Text>
          <Text style={Styles.textDefault}>
            A chave para um planeta saudável começa com a proteção dos oceanos
          </Text>
          <View style={Styles.buttons}>
            <TouchableOpacity
              onPress={() => {
                navigation.push('Login');
              }}
              style={Styles.buttonOne}
            >
              <Text style={Styles.buttonOneText}>Faça o login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={{ width: '92%' }}>
        <Text style={{ fontSize: 30, color: '#3E65CD', textAlign: 'center' }}>Sobre nós</Text>

        <Text style={{ color: '#3E65CD', fontSize: 20 }}>
          Missão, visão e valores
        </Text>
      </View>
      <View style={Styles.viewCards}>
        <CardHome
          srcImage={clock}
          title='Missão'
          text="Nossa missão é utilizar tecnologias avançadas para monitorar, mapear e combater a poluição plástica nos oceanos, facilitando a intervenção de organizações e comunidades dedicadas à proteção dos ecossistemas marinhos. Através de nossa plataforma inovadora, visamos aumentar a conscientização pública e promover práticas sustentáveis, criando um impacto positivo duradouro no meio ambiente."
        />
        <CardHome
          srcImage={code}
          title='Visão'
          text="Nossa visão é ser a principal plataforma global de combate à poluição oceânica, contribuindo significativamente para a preservação dos oceanos e promovendo um futuro sustentável. Queremos capacitar comunidades, ONGs e autoridades a proteger e revitalizar os ecossistemas marinhos, garantindo que as gerações futuras possam desfrutar de oceanos limpos e saudáveis."
        />
        <CardHome
          srcImage={cloud}
          title='Valores'
          text="Sustentabilidade: Comprometemo-nos a promover práticas que protejam e preservem o meio ambiente, visando um impacto positivo a longo prazo nos ecossistemas marinhos.
        Inovação: Valorizamos a inovação contínua e a utilização de tecnologias avançadas para resolver os desafios ambientais mais urgentes.
        Transparência: Acreditamos na transparência e no compartilhamento aberto de informações para fomentar a conscientização e a colaboração na luta contra a poluição."
        />
      </View>
      <Footer />
    </View>
  );
};

export default Home;
