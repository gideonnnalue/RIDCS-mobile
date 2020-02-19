import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TopHeader from '../components/TopHeader';

class NFCUploadScreen extends PureComponent {
  render() {
    return (
      <View>
        <TopHeader>Upload Child Record to Card</TopHeader>
        <ScrollView style={styles.screen}>
          <View style={styles.heading}>
            <Text style={styles.headingHead}>Upload Child Record to card</Text>
            <View style={styles.headingData}>
              <Text style={styles.headingText}>
                - Make sure the child health card is properly placed on the NFC
                reader on the tablet
              </Text>
              <Text style={styles.headingText}>
                - Wait till success message is displayed before removing the
                card
              </Text>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.detailsTop}>
              <Image
                source={require('../assets/img/bebe.png')}
                style={{width: 80, height: 80, marginRight: 10}}
              />
              <View>
                <Text style={styles.textBold}>
                  Child Card No: <Text style={styles.textReg}>00001234</Text>
                </Text>
                <Text style={styles.textBold}>
                  Full Name:{' '}
                  <Text style={styles.textReg}>Michelle Teju Omoogun</Text>
                </Text>
                <Text style={styles.textBold}>
                  Date of Birth: <Text style={styles.textReg}></Text>
                </Text>
                <Text style={styles.textBold}>
                  Birth Cert No: <Text style={styles.textReg}></Text>
                </Text>
              </View>
            </View>
            <View style={styles.detailBottom}>
              <Text style={styles.textBold}>
                Mother’s Name:{' '}
                <Text style={styles.textReg}>Funmilayo Omoogun</Text>
              </Text>
              <Text style={styles.textBold}>
                Father’s Name:{' '}
                <Text style={styles.textReg}>Folorunsho Omoogun</Text>
              </Text>
              <Text style={styles.textBold}>
                Village/Settlement: <Text style={styles.textReg}></Text>
              </Text>
              <Text style={styles.textBold}>
                HF Name: <Text style={styles.textReg}></Text>
              </Text>
              <Text style={styles.textBold}>
                L.G.A: <Text style={styles.textReg}></Text>
              </Text>
              <Text style={styles.textBold}>
                State: <Text style={styles.textReg}></Text>
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                Alert.alert('Success', 'Child record succesfully saved!', [
                  {
                    text: 'Finish',
                  },
                ]);
              }}>
              <LinearGradient
                colors={['#27AE60', 'rgba(33, 150, 83, 1)']}
                style={styles.button}>
                <Text style={styles.buttonText}>Upload info</Text>
              </LinearGradient>
            </TouchableOpacity>
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
  detailsContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsTop: {
    flexDirection: 'row',
  },
  detailBottom: {
    marginTop: 20,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textReg: {
    fontWeight: 'normal',
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

export default NFCUploadScreen;
