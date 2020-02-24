import React, {Component} from 'react';
import {connect} from 'react-redux';
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
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import {addChildVaccine} from '../store/actions/child';

class AdministerModal extends Component {
  state = {
    hbv: {
      text: '',
      taken: false,
      refused: false,
      remark: '',
    },
    opv: {
      text: '',
      taken: false,
      refused: false,
      remark: '',
    },
    bcg: {
      text: '',
      taken: false,
      refused: false,
      remark: '',
    },
    opv1: {
      text: '',
      taken: false,
      refused: false,
      remark: '',
    },
    penta1: {
      text: '',
      taken: false,
      refused: false,
      remark: '',
    },
    rota1: {
      text: '',
      taken: false,
      refused: false,
      remark: '',
    },
    sessionType: {
      text: '',
    },
    siteName: {
      text: '',
    },
    childWeight: {
      text: '',
    },
  };

  componentDidMount() {
    // console.log(this.props.children);
  }

  onTextChanged(id, type, data) {
    const newType = {...this.state[id]};
    newType[type] = data;
    this.setState({[id]: newType});
  }

  onCheckChanged(id, type) {
    console.log(id, type);
    const newType = {...this.state[id]};
    newType[type] = !newType[type];
    this.setState({[id]: newType});
  }

  onSubmit = id => {
    this.props.addChildVaccine(id, this.state);
    this.props.closeModal();
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
                  <Text style={styles.userDataBold}>Name:</Text>{' '}
                  {`${this.props.firstName} ${this.props.middleName} ${this.props.lastName}`}
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
                      <CheckBox
                        value={this.state.hbv.taken}
                        onValueChange={() =>
                          this.onCheckChanged('hbv', 'taken')
                        }
                      />
                      <Text>{this.state.hbv.taken ? 'TAKEN' : 'PENDING'}</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Vaccine Batch Number</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={text =>
                          this.onTextChanged('hbv', 'text', text)
                        }
                        value={this.state.hbv.text}
                      />
                    </View>
                  </View>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox
                        value={this.state.hbv.refused}
                        onValueChange={() =>
                          this.onCheckChanged('hbv', 'refused')
                        }
                      />
                      <Text>Was the vaccine refused by care giver?</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Other Remarks (e.g. out of stock/given)</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={text =>
                          this.onTextChanged('hbv', 'remark', text)
                        }
                        value={this.state.hbv.remark}
                      />
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
                      <CheckBox
                        value={this.state.opv.taken}
                        onValueChange={() =>
                          this.onCheckChanged('opv', 'taken')
                        }
                      />
                      <Text>{this.state.opv.taken ? 'TAKEN' : 'PENDING'}</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Vaccine Batch Number</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={text =>
                          this.onTextChanged('opv', 'text', text)
                        }
                        value={this.state.opv.text}
                      />
                    </View>
                  </View>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox
                        value={this.state.opv.refused}
                        onValueChange={() =>
                          this.onCheckChanged('opv', 'refused')
                        }
                      />
                      <Text>Was the vaccine refused by care giver?</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Other Remarks (e.g. out of stock/given)</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={text =>
                          this.onTextChanged('opv', 'remark', text)
                        }
                        value={this.state.opv.remark}
                      />
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
                      <CheckBox
                        value={this.state.bcg.taken}
                        onValueChange={() =>
                          this.onCheckChanged('bcg', 'taken')
                        }
                      />
                      <Text>{this.state.bcg.taken ? 'TAKEN' : 'PENDING'}</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Vaccine Batch Number</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={text =>
                          this.onTextChanged('bcg', 'text', text)
                        }
                        value={this.state.bcg.text}
                      />
                    </View>
                  </View>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox
                        value={this.state.bcg.refused}
                        onValueChange={() =>
                          this.onCheckChanged('bcg', 'refused')
                        }
                      />
                      <Text>Was the vaccine refused by care giver?</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Other Remarks (e.g. out of stock/given)</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={text =>
                          this.onTextChanged('bcg', 'remark', text)
                        }
                        value={this.state.bcg.remark}
                      />
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
                      <CheckBox
                        value={this.state.opv1.taken}
                        onValueChange={() =>
                          this.onCheckChanged('opv1', 'taken')
                        }
                      />
                      <Text>{this.state.opv1.taken ? 'TAKEN' : 'PENDING'}</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Vaccine Batch Number</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={text =>
                          this.onTextChanged('opv1', 'text', text)
                        }
                        value={this.state.opv1.text}
                      />
                    </View>
                  </View>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox
                        value={this.state.opv1.refused}
                        onValueChange={() =>
                          this.onCheckChanged('opv1', 'refused')
                        }
                      />
                      <Text>Was the vaccine refused by care giver?</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Other Remarks (e.g. out of stock/given)</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={text =>
                          this.onTextChanged('opv1', 'remark', text)
                        }
                        value={this.state.opv1.remark}
                      />
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
                      <CheckBox
                        value={this.state.penta1.taken}
                        onValueChange={() =>
                          this.onCheckChanged('penta1', 'taken')
                        }
                      />
                      <Text>
                        {this.state.penta1.taken ? 'TAKEN' : 'PENDING'}
                      </Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Vaccine Batch Number</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={text =>
                          this.onTextChanged('penta1', 'text', text)
                        }
                        value={this.state.penta1.text}
                      />
                    </View>
                  </View>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox
                        value={this.state.penta1.refused}
                        onValueChange={() =>
                          this.onCheckChanged('penta1', 'refused')
                        }
                      />
                      <Text>Was the vaccine refused by care giver?</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Other Remarks (e.g. out of stock/given)</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={text =>
                          this.onTextChanged('penta1', 'remark', text)
                        }
                        value={this.state.penta1.remark}
                      />
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
                      <CheckBox
                        value={this.state.rota1.taken}
                        onValueChange={() =>
                          this.onCheckChanged('rota1', 'taken')
                        }
                      />
                      <Text>
                        {this.state.rota1.taken ? 'TAKEN' : 'PENDING'}
                      </Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Vaccine Batch Number</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={text =>
                          this.onTextChanged('rota1', 'text', text)
                        }
                        value={this.state.rota1.text}
                      />
                    </View>
                  </View>
                  <View style={styles.vaccineVertical}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox
                        value={this.state.rota1.refused}
                        onValueChange={() =>
                          this.onCheckChanged('rota1', 'refused')
                        }
                      />
                      <Text>Was the vaccine refused by care giver?</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                      <Text>Other Remarks (e.g. out of stock/given)</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={text =>
                          this.onTextChanged('rota1', 'remark', text)
                        }
                        value={this.state.rota1.remark}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.vaccineSection}>
                <View style={styles.vaccineHorizontal}>
                  <View style={styles.textInputContainer}>
                    <Text>Session Type</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={text =>
                        this.onTextChanged('sessionType', 'text', text)
                      }
                      value={this.state.sessionType.text}
                    />
                  </View>
                  <View style={styles.textInputContainer}>
                    <Text>Site Name (for outreach/mobile)</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={text =>
                        this.onTextChanged('siteName', 'text', text)
                      }
                      value={this.state.siteName.text}
                    />
                  </View>
                  <View style={styles.textInputContainer}>
                    <Text>Weight of the Child</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={text =>
                        this.onTextChanged('childWeight', 'text', text)
                      }
                      value={this.state.childWeight.text}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.vaccineHorizontal}>
                <Text style={styles.vaccineText}>
                  <Text style={styles.vaccineTextBold}>Geo Location:</Text> 15N,
                  30E
                </Text>
                <Text style={styles.vaccineText}>
                  <Text style={styles.vaccineTextBold}>Date/Timesamp:</Text>{' '}
                  {moment().format('MMMM Do YYYY, h:mm:ss a')}
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.onSubmit(this.props.id);
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

const mapStateToProps = state => ({
  children: state.child.children,
});

export default connect(mapStateToProps, {addChildVaccine})(AdministerModal);
