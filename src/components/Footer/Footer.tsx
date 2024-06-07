import React from 'react';
import { Text, View } from 'react-native';
import Styles from './Styles';

export default function Footer() {
  return (
    <View>
      <View style={Styles.viewText}>
        <Text style={Styles.textFooter}>2024</Text>
      </View>
    </View>
  );
}
