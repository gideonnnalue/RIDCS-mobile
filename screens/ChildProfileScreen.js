import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AdministerModal from '../components/AdministerModal';

class ChildProfileScreen extends PureComponent {
  state = {
    modalVisible: false,
    childData: null,
  };

  getData = (id, child) => {
    this.setState({childData: child});
  };

  componentDidMount() {
    this.props.route.params && this.props.route.params.id
      ? this.getData(this.props.route.params.id, this.props.route.params.child)
      : null;
    // this.props.getChildRecord(0)
  }

  toggleModal() {
    this.setState({modalVisible: !this.state.modalVisible});
  }
  render() {
    if (!this.state.childData) {
      return (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={'rgba(33, 150, 83, 1)'} />
        </View>
      );
    }
    return (
      <ScrollView>
        <AdministerModal
          modalVisible={this.state.modalVisible}
          closeModal={() => this.toggleModal()}
          firstName={this.state.childData.firstName}
          middleName={this.state.childData.middleName}
          lastName={this.state.childData.lastName}
          id={this.state.childData.id}
        />
        <View style={styles.head}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#27AE60', 'rgba(33, 150, 83, 1)']}
            style={styles.headBg}>
            <Image
              source={require('../assets/img/bebe.png')}
              style={styles.headImage}
            />
            <View style={styles.headDesc}>
              <View style={styles.headSection}>
                <Text style={styles.headText}>
                  <Text style={styles.headBold}>Name:</Text>{' '}
                  {`${this.state.childData.firstName} ${this.state.childData.middleName} ${this.state.childData.lastName}`}
                </Text>
                <Text style={styles.headText}>
                  <Text style={styles.headBold}>Care Giver:</Text>{' '}
                  {`${this.state.childData.careGiverFirstName} ${this.state.childData.careGiverMiddleName} ${this.state.childData.careGiverLastName}`}
                </Text>
                <Text style={styles.headText}>
                  <Text style={styles.headBold}>Card No.:</Text> N78DJJ8D9KEOK
                </Text>
              </View>
              <View style={styles.headSection}>
                <Text style={styles.headText}>
                  <Text style={styles.headBold}>Age:</Text> 0 - 2 weeks
                </Text>
                <Text style={styles.headText}>
                  <Text style={styles.headBold}>Next Vaccination Date:</Text>{' '}
                  4th March 2020
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.page}>
          <View style={styles.pageSection}>
            <Text style={styles.pageHead}>PROFILE OVERVIEW</Text>
            <View
              style={{
                ...styles.pageHorizontal,
                borderWidth: 1,
                borderColor: '#bdbdbd',
                padding: 5,
                borderRadius: 5,
              }}>
              <View style={styles.pageHorizontalPart}>
                <Text style={styles.pageText}>
                  <Text style={styles.pageTextBold}>Mothers Name:</Text>{' '}
                  {this.state.childData.motherName}
                </Text>
                <Text style={styles.pageText}>
                  <Text style={styles.pageTextBold}>Fathers Name:</Text>{' '}
                  {this.state.childData.fatherName}
                </Text>
                <Text style={styles.pageText}>
                  <Text style={styles.pageTextBold}>State:</Text>{' '}
                  {this.state.childData.state}
                </Text>
                <Text style={styles.pageText}>
                  <Text style={styles.pageTextBold}>Town/City:</Text>{' '}
                  {this.state.childData.city}
                </Text>
                <Text style={styles.pageText}>
                  <Text style={styles.pageTextBold}>Village settlement:</Text>{' '}
                  {this.state.childData.settlement}
                </Text>
              </View>
              <View style={styles.pageHorizontalPart}>
                <Text style={styles.pageText}>
                  <Text style={styles.pageTextBold}>Mothers Number:</Text>{' '}
                  {this.state.childData.motherNo}
                </Text>
                <Text style={styles.pageText}>
                  <Text style={styles.pageTextBold}>Fathers Number:</Text>{' '}
                  {this.state.childData.fatherNo}
                </Text>
                <Text style={styles.pageText}>
                  <Text style={styles.pageTextBold}>L.G.A.:</Text>{' '}
                  {this.state.childData.lga}
                </Text>
                <Text style={styles.pageText}>
                  <Text style={styles.pageTextBold}>Ward:</Text>{' '}
                  {this.state.childData.ward}
                </Text>
                <Text style={styles.pageText}>
                  <Text style={styles.pageTextBold}>House No.:</Text>{' '}
                  {this.state.childData.houseNo}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.pageSection}>
            <Text style={styles.pageHead}>VACCINATION</Text>
            <View style={styles.pageHorizontal}>
              <View style={styles.pageHorizontalPart}>
                <Text style={styles.pageText}>
                  <Text style={styles.pageTextBold}>Current Week:</Text> 1
                </Text>
                <Text style={styles.pageText}>
                  <Text style={styles.pageTextBold}>
                    Date of Next Vaccination:
                  </Text>{' '}
                  Today
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      this.toggleModal();
                    }}>
                    <LinearGradient
                      colors={['#27AE60', 'rgba(33, 150, 83, 1)']}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Start Vaccination</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.pageHorizontalPart}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={{...styles.button, backgroundColor: '#EB5757'}}
                    onPress={() => {}}>
                    <Text style={styles.buttonText}>Report AEFI</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={{...styles.button, backgroundColor: '#9B51E0'}}
                    onPress={() => {}}>
                    <Text style={styles.buttonText}>
                      View Child Weight Chart
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.pageSection}>
            <Text style={styles.pageHead}>VACCINATION SCHEDULE</Text>
            <View style={styles.vaccineSection}>
              <Text style={styles.vaccineHeadText}>At Birth</Text>
              <View style={styles.pageHorizontal}>
                <TouchableOpacity
                  style={{...styles.vaccineButton, borderColor: '#27AE60'}}
                  onPress={() => {}}>
                  <Image
                    source={require('../assets/img/vaccine.png')}
                    style={styles.vaccineBtnIcon}
                  />
                  <View style={styles.vaccineBtnRight}>
                    <Text style={styles.vaccineBtnText}>BCG</Text>
                    <Text style={styles.vaccineBtnStatus}>25/01/2020</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.vaccineButton, borderColor: '#27AE60'}}>
                  <Image
                    source={require('../assets/img/dropper.png')}
                    style={styles.vaccineBtnIcon}
                  />
                  <View style={styles.vaccineBtnRight}>
                    <Text style={styles.vaccineBtnText}>OPV 0</Text>
                    <Text style={styles.vaccineBtnStatus}>25/01/2020</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.vaccineButton, borderColor: '#27AE60'}}>
                  <Image
                    source={require('../assets/img/vaccine.png')}
                    style={styles.vaccineBtnIcon}
                  />
                  <View style={styles.vaccineBtnRight}>
                    <Text style={styles.vaccineBtnText}>HBV</Text>
                    <Text style={styles.vaccineBtnStatus}>25/01/2020</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.vaccineSection}>
              <Text style={styles.vaccineHeadText}>6 Weeks</Text>
              <View style={styles.pageHorizontal}>
                <TouchableOpacity
                  style={{...styles.vaccineButton, borderColor: '#EB5757'}}>
                  <Image
                    source={require('../assets/img/vaccine.png')}
                    style={styles.vaccineBtnIcon}
                  />
                  <View style={styles.vaccineBtnRight}>
                    <Text style={styles.vaccineBtnText}>Penta 1</Text>
                    <Text style={styles.vaccineBtnStatus}>Pending</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.vaccineButton, borderColor: '#EB5757'}}>
                  <Image
                    source={require('../assets/img/dropper.png')}
                    style={styles.vaccineBtnIcon}
                  />
                  <View style={styles.vaccineBtnRight}>
                    <Text style={styles.vaccineBtnText}>OPV 1</Text>
                    <Text style={styles.vaccineBtnStatus}>Pending</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.vaccineButton, borderColor: '#EB5757'}}>
                  <Image
                    source={require('../assets/img/vaccine.png')}
                    style={styles.vaccineBtnIcon}
                  />
                  <View style={styles.vaccineBtnRight}>
                    <Text style={styles.vaccineBtnText}>PCV 1</Text>
                    <Text style={styles.vaccineBtnStatus}>Pending</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.vaccineButton, borderColor: '#EB5757'}}>
                  <Image
                    source={require('../assets/img/dropper.png')}
                    style={styles.vaccineBtnIcon}
                  />
                  <View style={styles.vaccineBtnRight}>
                    <Text style={styles.vaccineBtnText}>Rota 1</Text>
                    <Text style={styles.vaccineBtnStatus}>Pending</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.vaccineSection}>
              <Text style={styles.vaccineHeadText}>10 Weeks</Text>
              <View style={styles.pageHorizontal}>
                <TouchableOpacity
                  style={{...styles.vaccineButton, borderColor: '#EB5757'}}>
                  <Image
                    source={require('../assets/img/vaccine.png')}
                    style={styles.vaccineBtnIcon}
                  />
                  <View style={styles.vaccineBtnRight}>
                    <Text style={styles.vaccineBtnText}>Penta 2</Text>
                    <Text style={styles.vaccineBtnStatus}>Pending</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.vaccineButton, borderColor: '#EB5757'}}>
                  <Image
                    source={require('../assets/img/dropper.png')}
                    style={styles.vaccineBtnIcon}
                  />
                  <View style={styles.vaccineBtnRight}>
                    <Text style={styles.vaccineBtnText}>OPV 2</Text>
                    <Text style={styles.vaccineBtnStatus}>Pending</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.vaccineButton, borderColor: '#EB5757'}}>
                  <Image
                    source={require('../assets/img/vaccine.png')}
                    style={styles.vaccineBtnIcon}
                  />
                  <View style={styles.vaccineBtnRight}>
                    <Text style={styles.vaccineBtnText}>PCV 2</Text>
                    <Text style={styles.vaccineBtnStatus}>Pending</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.vaccineButton, borderColor: '#EB5757'}}>
                  <Image
                    source={require('../assets/img/dropper.png')}
                    style={styles.vaccineBtnIcon}
                  />
                  <View style={styles.vaccineBtnRight}>
                    <Text style={styles.vaccineBtnText}>Rota 1</Text>
                    <Text style={styles.vaccineBtnStatus}>Pending</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  headBg: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: Dimensions.get('window').width > 300 ? 'row' : 'column',
    padding: 20,
  },
  headImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
  headDesc: {
    flexDirection: 'row',
    paddingLeft: 10,
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width > 300 ? '70%' : '100%',
  },
  headSection: {
    flex: 1,
  },
  headText: {
    color: 'white',
    fontSize: 12,
    marginVertical: 5,
  },
  headBold: {
    fontWeight: 'bold',
  },
  page: {
    padding: 10,
  },
  pageSection: {
    paddingBottom: 15,
    marginTop: 15,
  },
  pageHead: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
  pageHorizontal: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  pageHorizontalPart: {
    flex: 1,
  },
  pageText: {
    marginVertical: 3,
  },
  pageTextBold: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  button: {
    width: 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    marginVertical: 2,
  },
  buttonText: {
    color: 'white',
  },
  vaccineSection: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
  },
  vaccineHeadText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  vaccineButton: {
    padding: 10,
    width: 200,
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    marginVertical: 4,
  },
  vaccineBtnIcon: {
    width: 40,
    height: 40,
  },
  vaccineBtnRight: {
    marginLeft: 14,
  },
  vaccineBtnText: {
    fontWeight: 'bold',
    color: '#333',
  },
  vaccineBtnStatus: {
    color: '#757575',
  },
  centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default ChildProfileScreen;
