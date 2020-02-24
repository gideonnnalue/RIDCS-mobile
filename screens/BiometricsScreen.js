import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TopHeader from '../components/TopHeader';

class BiometricsScreen extends PureComponent {
  uploadComplete() {
    this.props.navigation.navigate('NFCUpload');
  }
  render() {
    return (
      <View>
        <TopHeader>
        <Text style={styles.headingHead}>Input Biometrics Data</Text>
        </TopHeader>
        <ScrollView style={styles.screen}>
          <View style={styles.heading}>
            
            <View style={styles.headingData}>
              <Text style={styles.headingText}>
                - Make sure the persons hands is properly clean to improve
                fingerprint capture
              </Text>
              <Text style={styles.headingText}>
                - Make sure the persons face is upright when capturing image
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.layout}>
              <View style={styles.optionsContainer}>
                <View style={styles.option}>
                  <TouchableOpacity style={styles.optionsBtn}>
                    <LinearGradient
                      colors={['#27AE60', 'rgba(33, 150, 83, 1)']}
                      style={styles.optionsBtnBg}>
                      <Image
                        source={require('../assets/img/fingerprint.png')}
                        style={styles.optionsImg}
                      />
                      <Text style={styles.optionsBtnText}>Finger Print</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <Image
                    source={require('../assets/img/success.png')}
                    style={{width: 30, height: 30, marginVertical: 5}}
                  />
                  <Text style={styles.optionDesc}>Accepted</Text>
                </View>
                <View style={styles.option}>
                  <TouchableOpacity style={styles.optionsBtn}>
                    <LinearGradient
                      colors={['#fff', '#fff']}
                      style={styles.optionsBtnBg}>
                      <Image
                        source={require('../assets/img/landscape.png')}
                        style={styles.optionsImg}
                      />
                      <Text
                        style={{
                          ...styles.optionsBtnText,
                          color: 'rgba(33, 150, 83, 1)',
                        }}>
                        Picture
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <Image
                    source={require('../assets/img/dots.png')}
                    style={{width: 100, marginVertical: 5, marginTop: 20}}
                  />
                  <Text style={styles.optionDesc}>Pending</Text>
                </View>
              </View>
              <View style={styles.previewSection}>
                <View style={styles.previewContainer}>
                  <View style={styles.previewBox} />
                  <Text style={styles.previewText}>Right Index Finger</Text>
                </View>
                <View style={styles.previewContainer}>
                  <View style={styles.previewBox} />
                  <Text style={styles.previewText}>Left Index Finger</Text>
                </View>
                <View style={styles.previewContainer}>
                  <View style={styles.previewBox} />
                  <Text style={styles.previewText}>Right Thumb Finger</Text>
                </View>
                <View style={styles.previewContainer}>
                  <View style={styles.previewBox} />
                  <Text style={styles.previewText}>Left Thumb Finger</Text>
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.uploadComplete();
                }}>
                <LinearGradient
                  colors={['#27AE60', 'rgba(33, 150, 83, 1)']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Save</Text>
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
  },
  heading: {
    padding: 10,
  },
  headingHead: {
    color: '#ffffff',
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
  layout: {
    flexDirection:
      Dimensions.get('window').width > 300 ? 'row-reverse' : 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    // flex: Dimensions.get('window').width > 300 ? 1 : '',
    width: Dimensions.get('window').width > 300 ? '80%' : '',
    flexDirection: 'row',
    justifyContent:
      Dimensions.get('window').width > 300 ? 'space-around' : 'space-between',
    padding: 10,
  },
  option: {
    alignItems: 'center',
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
  },
  optionsImg: {
    width: 80,
    height: 80,
  },
  optionsBtnText: {
    color: 'white',
    marginTop: 10,
  },
  optionDesc: {
    color: '#BDBDBD',
  },
  previewBox: {
    width: 75,
    height: 75,
    borderWidth: 2,
    borderColor: '#333333',
  },
  previewSection: {
    flexDirection: Dimensions.get('window').width > 300 ? 'column' : 'row',
    padding: 10,
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Dimensions.get('window').width > 300 ? 8 : '',
  },
  previewText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#333333',
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
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default BiometricsScreen;
