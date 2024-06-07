import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import Styles from './Styles';

type CardHomeProps = {
  srcImage: ImageSourcePropType;
  title: string;
  text: string;
};

const CardHome: React.FC<CardHomeProps> = ({ srcImage, title, text }) => {
  return (
    <View style={Styles.container}>
      <View style={{ padding: 12 }}>
        <Image source={srcImage} style={Styles.image} />
      </View>
      <View>
        <Text style={Styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={Styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default CardHome;
