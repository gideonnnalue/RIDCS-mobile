import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Alert,
  StyleSheet,
  ScrollView,
  CheckBox,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

class AdministerModal extends Component {
  state = {
    hbv: {
      text: '',
      check: 'pending',
      refused: 'no',
      remark: '',
    },
    opv: {
      text: '',
      check: 'pending',
      refused: 'no',
      remark: '',
    },
    bcg: {
      text: '',
      check: 'pending',
      refused: 'no',
      remark: '',
    },
  };
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <ScrollView contentContainerStyle={styles.modal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={() => {
                  this.props.closeModal();
                }}>
                <Icon name="close" size={25} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.modalHeaderText}>Administer Vaccine</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.closeModal();
                }}>
                <Icon name="check" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.modalBody}>
              <View style={styles.userData}>
                <Text style={styles.userDataText}>
                  <Text style={styles.userDataBold}>Name:</Text> Emeka Femi Musa
                </Text>
                <Text style={styles.userDataText}>
                  <Text style={styles.userDataBold}>Age:</Text> 0 weeks and 2
                  days
                </Text>
              </View>
              <View style={styles.vaccineSection}>
                <Text style={styles.vaccineText}>
                  <Text style={styles.vaccineTextBold}>Vaccine Name:</Text> HBV
                  0
                </Text>
                <View style={styles.vaccineHorizontal}>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox />
                      <Text>TAKEN</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Vaccine Batch Number</Text>
                      <TextInput style={styles.input} />
                    </View>
                  </View>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox />
                      <Text>Was the vaccine refused by care giver?</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Other Remarks (e.g. out of stock/given)</Text>
                      <TextInput style={styles.input} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.vaccineSection}>
                <Text style={styles.vaccineText}>
                  <Text style={styles.vaccineTextBold}>Vaccine Name:</Text> OPV
                  0
                </Text>
                <View style={styles.vaccineHorizontal}>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox />
                      <Text>PENDING</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Vaccine Batch Number</Text>
                      <TextInput style={styles.input} />
                    </View>
                  </View>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox />
                      <Text>Was the vaccine refused by care giver?</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Other Remarks (e.g. out of stock/given)</Text>
                      <TextInput style={styles.input} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.vaccineSection}>
                <Text style={styles.vaccineText}>
                  <Text style={styles.vaccineTextBold}>Vaccine Name:</Text> BCG
                </Text>
                <View style={styles.vaccineHorizontal}>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox />
                      <Text>PENDING</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Vaccine Batch Number</Text>
                      <TextInput style={styles.input} />
                    </View>
                  </View>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox />
                      <Text>Was the vaccine refused by care giver?</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Other Remarks (e.g. out of stock/given)</Text>
                      <TextInput style={styles.input} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.vaccineSection}>
                <Text style={styles.vaccineText}>
                  <Text style={styles.vaccineTextBold}>Vaccine Name:</Text> OPV
                  1
                </Text>
                <View style={styles.vaccineHorizontal}>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox />
                      <Text>PENDING</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Vaccine Batch Number</Text>
                      <TextInput style={styles.input} />
                    </View>
                  </View>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox />
                      <Text>Was the vaccine refused by care giver?</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Other Remarks (e.g. out of stock/given)</Text>
                      <TextInput style={styles.input} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.vaccineSection}>
                <Text style={styles.vaccineText}>
                  <Text style={styles.vaccineTextBold}>Vaccine Name:</Text>{' '}
                  Penta 1
                </Text>
                <View style={styles.vaccineHorizontal}>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox />
                      <Text>PENDING</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Vaccine Batch Number</Text>
                      <TextInput style={styles.input} />
                    </View>
                  </View>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox />
                      <Text>Was the vaccine refused by care giver?</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Other Remarks (e.g. out of stock/given)</Text>
                      <TextInput style={styles.input} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.vaccineSection}>
                <Text style={styles.vaccineText}>
                  <Text style={styles.vaccineTextBold}>Vaccine Name:</Text> Rota
                  1
                </Text>
                <View style={styles.vaccineHorizontal}>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox />
                      <Text>PENDING</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Vaccine Batch Number</Text>
                      <TextInput style={styles.input} />
                    </View>
                  </View>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox />
                      <Text>Was the vaccine refused by care giver?</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Other Remarks (e.g. out of stock/given)</Text>
                      <TextInput style={styles.input} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.vaccineSection}>
                <View style={styles.vaccineHorizontal}>
                  <View style={styles.textInputContainer}>
                    <Text>Session Type</Text>
                    <TextInput style={styles.input} />
                  </View>
                  <View style={styles.textInputContainer}>
                    <Text>Site Name (for outreach/mobile)</Text>
                    <TextInput style={styles.input} />
                  </View>
                  <View style={styles.textInputContainer}>
                    <Text>Weight of the Child</Text>
                    <TextInput style={styles.input} />
                  </View>
                </View>
              </View>
              <View style={styles.vaccineHorizontal}>
                <Text style={styles.vaccineText}>
                  <Text style={styles.vaccineTextBold}>Geo Location:</Text> 15N,
                  30E
                </Text>
                <Text style={styles.vaccineText}>
                  <Text style={styles.vaccineTextBold}>Date/Timesamp:</Text> 18
                  Feb 2020, 12:08:56 PM
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.closeModal();
                  }}>
                  <LinearGradient
                    colors={['#27AE60', 'rgba(33, 150, 83, 1)']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    // flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  modalContainer: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
  },
  modalHeader: {
    width: '100%',
    height: 40,
    backgroundColor: '#27AE60',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  modalHeaderText: {
    color: 'white',
    fontSize: 18,
  },
  modalBody: {
    padding: 10,
  },
  userData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbd',
  },
  userDataBold: {
    fontWeight: 'bold',
  },
  vaccineSection: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbd',
  },
  vaccineTextBold: {
    fontWeight: 'bold',
  },
  vaccineHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputContainer: {
    marginVertical: 7,
  },
  input: {
    borderColor: 'rgba(33, 150, 83, 0.5)',
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    marginTop: 4,
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

export default AdministerModal;
