import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header() {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home')
  }
  
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
          <Image source={require('../assets/logo.png')} />
        <Text style={styles.text}>DS Delivery</Text>
      </View>
    </TouchableWithoutFeedback>
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
