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

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import LinearGradient from 'react-native-linear-gradient';

import HeaderButton from '../components/HeaderButton';
import TopHeader from '../components/TopHeader';

class ScanHealthChildScreen extends PureComponent {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this.props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }
  render() {
    return (
      <View>
        <TopHeader>Vaccinate and update child immunization record</TopHeader>
        <ScrollView style={styles.screen}>
          <View style={styles.heading}>
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
          <View>
            <View style={styles.option}>
              <TouchableOpacity
                style={styles.optionsBtn}
                onPress={() => {
                  this.props.navigation.navigate('ChildProfile');
                }}>
                <LinearGradient
                  colors={['#27AE60', 'rgba(33, 150, 83, 1)']}
                  style={styles.optionsBtnBg}>
                  <Image
                    source={require('../assets/img/nfc.png')}
                    style={styles.optionsImg}
                  />
                  <Text style={styles.optionsBtnText}>
                    Scan Child Health Card
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <View>
                <Text style={styles.optionDesc}>
                  Child health card not available?
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('ScanFingerPrint');
                  }}>
                  <Text style={styles.optionDescLink}>
                    Scan Fingerprint or search card No.
                  </Text>
                </TouchableOpacity>
              </View>
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

export default ScanHealthChildScreen;
