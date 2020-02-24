import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  Platform,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SectionGrid} from 'react-native-super-grid';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import LinearGradient from 'react-native-linear-gradient';

import HeaderButton from '../components/HeaderButton';
import TopHeader from '../components/TopHeader';
import dummyData from '../data/dummy-data';

import {loadChildRecords, getChildRecord} from '../store/actions/child';

const ChildTab = props => {
  return (
    <TouchableOpacity style={styles.childTab} onPress={props.onNavigate}>
      <Image
        style={styles.childImg}
        source={require('../assets/img/bebe.png')}
      />
      <Text
        style={
          styles.childFullName
        }>{`${props.firstName} ${props.middleName} ${props.lastName}`}</Text>
      <Text
        style={
          styles.childParentName
        }>{`${props.careGiverFirstName} ${props.careGiverMiddleName} ${props.careGiverLastName}`}</Text>
      <Text style={styles.childRegNo}>{'N89JDJI97899'}</Text>
    </TouchableOpacity>
  );
};

class AllChildrenScreen extends PureComponent {
  componentDidMount() {
    console.log(this.props.children);
    this.props.loadChildRecords();
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

  goToChildProfile(id) {
    this.props
      .getChildRecord(id)
      .then(data => {
        console.log(data);
        this.props.navigation.navigate('ChildProfile', {
          id,
          child: data,
        });
      })
      .catch(err => {
        Alert.alert(
          'Data unavailable',
          "The selected child's data is unavailable",
          [{text: 'ok'}],
        );
        console.log(err.message);
      });
  }

  render() {
    return (
      <View>
        <TopHeader>
          please kindly select an option below to perform an action
        </TopHeader>
        <View style={styles.childContainer}>
          <SectionGrid
            // items={dummyData}
            sections={[
              {
                title: 'Settlement A',
                data: this.props.children,
              },
            ]}
            // numColumns={3}
            style={styles.childList}
            itemDimension={130}
            renderItem={({item}) => (
              <ChildTab
                img={item.img}
                firstName={item.firstName}
                middleName={item.middleName}
                lastName={item.lastName}
                fullName={item.fullName}
                careGiverFirstName={item.careGiverFirstName}
                careGiverMiddleName={item.careGiverMiddleName}
                careGiverLastName={item.careGiverLastName}
                regNo={item.regNo}
                onNavigate={() => this.goToChildProfile(item.id)}
              />
            )}
            renderSectionHeader={({section}) => (
              <View style={styles.childSection}>
                <Text style={styles.childSectionText}>{section.title}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  childContainer: {
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 115,
    width: '100%',
  },
  childSection: {
    backgroundColor: '#ddd',
    padding: 10,
  },
  childSectionText: {
    color: '#757575',
    fontSize: 14,
    fontWeight: 'bold',
  },
  childList: {width: '100%'},
  childTab: {
    padding: 5,
    backgroundColor: 'white',
    margin: 2,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  childImg: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  childFullName: {
    color: '#303030',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  childParentName: {
    color: '#757575',
    fontSize: 13,
    textAlign: 'center',
  },
  childRegNo: {
    color: '#2ECC71',
    fontSize: 13,
  },
});

const mapStateToProps = state => ({
  children: state.child.children,
});

export default connect(mapStateToProps, {loadChildRecords, getChildRecord})(
  AllChildrenScreen,
);
