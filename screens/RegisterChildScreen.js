import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  TextInput,
  ScrollView,
  Platform,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Picker,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import LinearGradient from 'react-native-linear-gradient';
import {addChild} from '../store/actions/child';

import HeaderButton from '../components/HeaderButton';
import TopHeader from '../components/TopHeader';
import moment from 'moment';

class RegisterChildScreen extends PureComponent {
  state = {
    childFirstName: '',
    childMiddleName: '',
    childLastName: '',
    childPos: '',
    childSex: 'male',
    dob: new Date(),
    childWeight: '',
    houseNo: '',
    villageSettle: '',
    townCity: '',
    ward: '',
    lga: '',
    state: '',
    motherName: '',
    motherNo: '',
    fatherName: '',
    fatherNo: '',
    careGiverFirstName: '',
    careGiverMiddleName: '',
    careGiverLastName: '',
    careGiverNo: '',
    showDate: false,
  };

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

  onChange = (id, text) => {
    this.setState({[id]: text});
  };

  onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;

    this.setState({dob: currentDate, showDate: !this.state.showDate});
    // setShow(Platform.OS === 'ios' ? true : false);
  };

  onToggleDate = () => {
    this.setState({showDate: !this.state.showDate});
  };

  onSubmit() {
    const newData = {...this.state};
    // newData.id = this.props.children.length + 1;
    newData.dob = newData.dob.toString();
    this.props.addChild(newData);
    this.props.navigation.navigate('Biometrics');
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        keyboardVerticalOffset={60}>
        <TopHeader>
          please kindly select an option below to perform an action
        </TopHeader>
        <ScrollView>
          <View style={styles.form}>
            <View style={styles.formSection}>
              <Text style={styles.sectionText}>BASIC INFORMATION</Text>
              <View style={styles.formPart}>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Child's First Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input Childs first name"
                    onChangeText={text => this.onChange('childFirstName', text)}
                    value={this.state.childFirstName}
                  />
                </View>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Child’s Middle Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input Childs middle"
                    onChangeText={text =>
                      this.onChange('childMiddleName', text)
                    }
                    value={this.state.childMiddleName}
                  />
                </View>
              </View>
              <View style={styles.formPart}>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Child's Last Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input childs last name"
                    onChangeText={text => this.onChange('childLastName', text)}
                    value={this.state.childLastName}
                  />
                </View>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>
                    Child’s Position in the family
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input childs Position in family"
                    onChangeText={text => this.onChange('childPos', text)}
                    value={this.state.childPos}
                  />
                </View>
              </View>
              <View style={styles.formPart}>
                <View style={styles.formHorizontal}>
                  <View style={styles.formHorizontalContainer}>
                    <Text style={styles.inputText}>Childs Sex</Text>
                    <View style={{...styles.input, padding: 0}}>
                      <Picker
                        selectedValue={this.state.childSex}
                        onValueChange={(itemValue, itemIndex) =>
                          this.onChange('childSex', itemValue)
                        }>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                      </Picker>
                    </View>
                  </View>
                  <View style={styles.formHorizontalContainer}>
                    <Text style={styles.inputText}>Date of Birth</Text>
                    <TouchableOpacity
                      style={styles.input}
                      onPress={this.onToggleDate}>
                      <Text style={{paddingVertical: 5}}>
                        {moment(this.state.dob).format('L')}
                      </Text>
                    </TouchableOpacity>
                    {this.state.showDate && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={this.state.dob}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={this.onChangeDate}
                      />
                    )}
                  </View>
                </View>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Child's Weight</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Weight at Birth(kg)"
                    onChangeText={text => this.onChange('childWeight', text)}
                    value={this.state.childWeight}
                  />
                </View>
              </View>
            </View>
            <View style={styles.formSection}>
              <Text style={styles.sectionText}>RESIDENTIAL INFORMATION</Text>
              <View style={styles.formPart}>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>House Number</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input childs house no."
                    onChangeText={text => this.onChange('houseNo', text)}
                    value={this.state.houseNo}
                  />
                </View>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Village/Settlement</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input childs Village/Settlement"
                    onChangeText={text => this.onChange('villageSettle', text)}
                    value={this.state.villageSettle}
                  />
                </View>
              </View>
              <View style={styles.formPart}>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Town/City</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input childs town or city"
                    onChangeText={text => this.onChange('townCity', text)}
                    value={this.state.townCity}
                  />
                </View>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Ward</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input childs ward"
                    onChangeText={text => this.onChange('ward', text)}
                    value={this.state.ward}
                  />
                </View>
              </View>
              <View style={styles.formPart}>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>LGA</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input childs LGA"
                    onChangeText={text => this.onChange('lga', text)}
                    value={this.state.lga}
                  />
                </View>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>State</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input childs state"
                    onChangeText={text => this.onChange('state', text)}
                    value={this.state.state}
                  />
                </View>
              </View>
            </View>
            <View style={styles.formSection}>
              <Text style={styles.sectionText}>PARENTS INFORMATION</Text>
              <View style={styles.formPart}>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Mothers Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input mothers name"
                    onChangeText={text => this.onChange('motherName', text)}
                    value={this.state.motherName}
                  />
                </View>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Mother’s GSM No.</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input mother’s GSM number"
                    onChangeText={text => this.onChange('motherNo', text)}
                    value={this.state.motherNo}
                  />
                </View>
              </View>
              <View style={styles.formPart}>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Fathers Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input father’s name"
                    onChangeText={text => this.onChange('fatherName', text)}
                    value={this.state.fatherName}
                  />
                </View>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Father’s GSM No.</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input father’s GSM number"
                    onChangeText={text => this.onChange('fatherNo', text)}
                    value={this.state.fatherNo}
                  />
                </View>
              </View>
            </View>
            <View style={styles.formSection}>
              <Text style={styles.sectionText}>CARE GIVERS INFORMATION</Text>
              <View style={styles.formHorizontal}>
                <View style={styles.formHorizontalContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      this.props.navigation.navigate('Drawer');
                      // props.navigation.dispatch(resetAction);
                    }}>
                    <LinearGradient
                      colors={['#27AE60', 'rgba(33, 150, 83, 1)']}
                      style={styles.button}>
                      <Text style={styles.buttonText}>New</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
                <View style={styles.formHorizontalContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      this.props.navigation.navigate('Drawer');
                      // props.navigation.dispatch(resetAction);
                    }}>
                    <LinearGradient
                      colors={['#fff', '#fff']}
                      style={styles.button}>
                      <Text
                        style={{
                          ...styles.buttonText,
                          color: '#27AE60',
                        }}>
                        Existing
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.formPart}>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Care givers First Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input care giver’s first name"
                    onChangeText={text =>
                      this.onChange('careGiverFirstName', text)
                    }
                    value={this.state.careGiverFirstName}
                  />
                </View>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Care givers Middle Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input care giver’s middle name"
                    onChangeText={text =>
                      this.onChange('careGiverMiddleName', text)
                    }
                    value={this.state.careGiverMiddleName}
                  />
                </View>
              </View>
              <View style={styles.formPart}>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Care givers Last Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input care giver’s last name"
                    onChangeText={text =>
                      this.onChange('careGiverLastName', text)
                    }
                    value={this.state.careGiverLastName}
                  />
                </View>
                <View style={styles.formControl}>
                  <Text style={styles.inputText}>Care givers GSM No.</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Input care giver’s GSM number"
                    onChangeText={text => this.onChange('careGiverNo', text)}
                    value={this.state.careGiverNo}
                  />
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.onSubmit();
                }}>
                <LinearGradient
                  colors={['#27AE60', 'rgba(33, 150, 83, 1)']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Next</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
    marginBottom: 50,
  },
  formSection: {
    borderBottomWidth: 2,
    borderBottomColor: '#E5E5E5',
    marginVertical: 10,
  },
  sectionText: {
    fontSize: 18,
    color: '#20A086',
    marginBottom: 10,
  },
  formPart: {
    flexDirection: Dimensions.get('window').width > 300 ? 'row' : 'column',
    justifyContent: Dimensions.get('window').width > 300 ? 'space-between' : '',
    alignItems: Dimensions.get('window').width > 300 ? 'center' : '',
  },
  formControl: {
    marginVertical: 10,
    marginRight: Dimensions.get('window').width > 300 ? 10 : '',
    flex: Dimensions.get('window').width > 300 ? 1 : '',
  },
  inputText: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderColor: 'rgba(33, 150, 83, 0.5)',
    borderWidth: 2,
    padding: 11,
    borderRadius: 8,
  },
  formHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginVertical: 10,
    marginRight: Dimensions.get('window').width > 300 ? 10 : '',
    flex: Dimensions.get('window').width > 300 ? 1 : '',
  },
  formHorizontalContainer: {
    flex: 1,
    marginRight: 10,
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

const mapStateToProps = state => ({
  children: state.child.children,
});

export default connect(mapStateToProps, {addChild})(RegisterChildScreen);
