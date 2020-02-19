import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  BackHandler,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import TopHeader from '../components/TopHeader';

class ScanFingerPrintScreen extends PureComponent {
  render() {
    return (
      <View>
        <TopHeader>Vaccinate and update child immunization record</TopHeader>
        <ScrollView contentContainerStyle={styles.screen}>
          <View style={styles.pageScreen}>
            <View style={styles.option}>
              <TouchableOpacity
                style={styles.optionsBtn}
                onPress={() => {
                  this.props.navigation.navigate('ChildProfile');
                }}>
                <LinearGradient
                  colors={['#9B51E0', '#9B51E0']}
                  style={styles.optionsBtnBg}>
                  <Image
                    source={require('../assets/img/fingerprint.png')}
                    style={styles.optionsImg}
                  />
                  <Text style={styles.optionsBtnText}>Scan Fingerprint</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionsBtn}
                onPress={() => {
                  this.props.navigation.navigate('ChildProfile');
                }}>
                <LinearGradient
                  colors={['#F2C94C', '#F2C94C']}
                  style={styles.optionsBtnBg}>
                  <Image
                    source={require('../assets/img/fingerprint.png')}
                    style={styles.optionsImg}
                  />
                  <Text style={styles.optionsBtnText}>Search Card Number</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    marginBottom: 50,
    height: '80%',
  },
  pageScreen: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  heading: {
    padding: 10,
  },
  headingHead: {
    color: '#37474F',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headingData: {
    backgroundColor: 'rgba(33, 150, 83, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(33, 150, 83, 0.5)',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  headingText: {
    color: '#009688',
    marginVertical: 2,
  },
  option: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  optionsBtn: {
    width: 150,
    height: 150,
  },
  optionsBtnBg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
  },
  optionsImg: {
    width: 80,
    height: 80,
  },
  optionsBtnText: {
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
  optionDesc: {
    color: '#37474F',
    textAlign: 'center',
    marginTop: 10,
  },
  optionDescLink: {
    fontWeight: 'bold',
    color: '#BB6BD9',
    textAlign: 'center',
  },
});

export default ScanFingerPrintScreen;
