import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';

class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <StatusBar barStyle="light-content" backgroundColor="#27AE60" />
        <Image source={require('../assets/img/logo.png')} style={styles.logo} />
        <Text style={styles.text}>RIDCS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 120,
    height: 120,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'rgba(33, 150, 83, 1)',
  },
});

export default SplashScreen;
