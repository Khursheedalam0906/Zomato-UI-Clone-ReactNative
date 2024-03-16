import {View, StyleSheet, Image, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  });
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'red'} barStyle={'light-content'} />
      <Text style={styles.logo}>Zomato</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  logo: {
    fontSize: 70,
    fontStyle: 'italic',
    color: 'white',
    fontWeight: '900',
  },
});
