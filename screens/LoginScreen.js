import React, {PureComponent} from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class LoginScreen extends PureComponent {
  render() {
    return (
      <View style={styles.screen}>
        <StatusBar barStyle="light-content" backgroundColor="#27AE60" />
        <ScrollView contentContainerStyle={styles.loginContainer}>
          <ImageBackground
            source={require('../assets/img/RIDCS.png')}
            style={styles.backgroundImage}
          />
          <View style={styles.form}>
            <Image
              source={require('../assets/img/logo.png')}
              style={{width: 100, height: 100}}
            />
            <View style={styles.formControl}>
              <Text style={styles.inputName}>Username</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.formControl}>
              <Text style={styles.inputName}>Password</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.props.navigation.navigate('Drawer');
                  // props.navigation.dispatch(resetAction);
                }}>
                <LinearGradient
                  colors={['#27AE60', 'rgba(33, 150, 83, 1)']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const tabletScreen = {
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 30,
  },
};

const phoneScreen = {
  loginContainer: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    padding: 20,
    alignItems: 'flex-start',
    width: '100%',
  },
};

const mainStyle =
  Dimensions.get('window').width > 300 ? {...tabletScreen} : {...phoneScreen};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  ...mainStyle,

  formControl: {
    width: '100%',
    marginBottom: 10,
  },
  inputName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  input: {
    borderColor: 'rgba(33, 150, 83, 0.5)',
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 14,
  },
  buttonText: {
    color: 'white',
  },
});

export default LoginScreen;
