import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}>DS Delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#DA2C2C',
   height: 90,
   paddingTop: 50,
   flexDirection: 'row',
   justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 33,
    letterSpacing: -0.24,
    color: '#FFF',
    marginLeft: 15,
    fontFamily: 'OpenSans_700Bold'
    
  }
});
