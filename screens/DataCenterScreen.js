import React, {PureComponent} from 'react';
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
  Image,
  SafeAreaView,
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import LinearGradient from 'react-native-linear-gradient';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import HeaderButton from '../components/HeaderButton';
import TopHeader from '../components/TopHeader';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundColor: '#fff',
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(33, 150, 83, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(33, 150, 83, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: 'rgba(33, 150, 83,1)',
  },
};

class DataCenterScreen extends PureComponent {
  state = {
    data: {
      labels: ['Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 11', 'Week 12'],
      datasets: [
        {
          data: [
            Math.random() * 30,
            Math.random() * 30,
            Math.random() * 30,
            Math.random() * 30,
            Math.random() * 30,
            Math.random() * 30,
          ],
          color: (opacity = 1) => `rgba(33, 150, 83, ${opacity})`, // optional
        },
      ],
    },
    barData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
        },
      ],
    },
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
  render() {
    return (
      <View style={styles.screen}>
        <TopHeader>
          please kindly select an option below to perform an action
        </TopHeader>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}>Welcome to RIDCS: Maigemu PHC</Text>
            <View style={styles.headerGroup}>
              <Text style={styles.headerGrpText}>
                <Text style={styles.headerGrpBullet}>.</Text>
                <Text style={styles.headerGrpBold}>Status: </Text>Offline
              </Text>
              <Text style={styles.headerGrpText}>
                <Text style={styles.headerGrpBold}>Date: </Text>1st January 2020
              </Text>
              <Text style={styles.headerGrpText}>
                <Text style={styles.headerGrpBold}>Time: </Text>12:00 PM
              </Text>
              <Text style={styles.headerGrpText}>
                <Text style={styles.headerGrpBold}>Location: </Text>15N, 30E
              </Text>
              <Text style={styles.headerGrpText}>
                <Text style={styles.headerGrpBold}>Facility Type: </Text>Public
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                style={{width: 270}}
                onPress={() => {
                  this.props.navigation.navigate('ChildRegistration');
                }}>
                <LinearGradient
                  colors={['#27AE60', 'rgba(33, 150, 83, 1)']}
                  style={{...styles.tab, width: '100%'}}>
                  <Image
                    source={require('../assets/img/baby.png')}
                    style={styles.tabImage}
                  />
                  <View style={styles.tabDesc}>
                    <Text style={styles.tabHead}>Register Child</Text>
                    <Text style={styles.tabText}>
                      Begin child registeration for Immunization Record
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.tab, backgroundColor: 'white'}}>
                <Image
                  source={require('../assets/img/mother.png')}
                  style={styles.tabImage}
                />
                <View style={styles.tabDesc}>
                  <Text
                    style={{...styles.tabHead, color: 'rgba(33, 150, 83, 1)'}}>
                    Register for TD
                  </Text>
                  <Text
                    style={{...styles.tabText, color: 'rgba(33, 150, 83, 1)'}}>
                    Begin registeration
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.tab, backgroundColor: 'white'}}
                onPress={() => {
                  this.props.navigation.navigate('ScanChild');
                }}>
                <Image
                  source={require('../assets/img/injection.png')}
                  style={styles.tabImage}
                />
                <View style={styles.tabDesc}>
                  <Text
                    style={{...styles.tabHead, color: 'rgba(33, 150, 83, 1)'}}>
                    Administer Vaccine
                  </Text>
                  <Text
                    style={{...styles.tabText, color: 'rgba(33, 150, 83, 1)'}}>
                    Begin vaccine administration
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.tab, backgroundColor: 'white'}}>
                <Image
                  source={require('../assets/img/vaccinate.png')}
                  style={styles.tabImage}
                />
                <View style={styles.tabDesc}>
                  <Text
                    style={{...styles.tabHead, color: 'rgba(33, 150, 83, 1)'}}>
                    Due for Vaccination
                  </Text>
                  <Text
                    style={{...styles.tabText, color: 'rgba(33, 150, 83, 1)'}}>
                    check the tally for the month
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.graphContainer}>
              <View style={styles.graphSection}>
                <Text style={styles.graphText}>Fixed Sessions Planned</Text>
                <LineChart
                  data={this.state.data}
                  width={500} // from react-native
                  height={220}
                  chartConfig={chartConfig}
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                  }}
                />
              </View>
              <View style={styles.graphSection}>
                <Text style={styles.graphText}>
                  Number of vaccine doses open
                </Text>
                <BarChart
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                  }}
                  data={this.state.barData}
                  width={screenWidth}
                  height={220}
                  yAxisLabel="$"
                  chartConfig={chartConfig}
                  verticalLabelRotation={30}
                />
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
    flex: 1,
  },
  header: {
    padding: 10,
  },
  headerText: {
    fontSize: 22,
    color: 'rgba(33, 150, 83, 1)',
  },
  headerGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headerGrpText: {
    marginRight: 20,
    color: '#757575',
  },
  headerGrpBullet: {
    fontSize: 14,
    color: 'red',
  },
  headerGrpBold: {
    fontWeight: 'bold',
  },
  body: {
    padding: 10,
  },
  graphContainer: {flex: 1},
  tabsContainer: {flex: 1},
  tab: {
    flexDirection: 'row',
    width: 270,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },
  tabImage: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  tabDesc: {
    flex: 1,
  },
  tabHead: {
    color: 'white',
    fontSize: 18,
  },
  tabText: {
    color: 'white',
  },
  graphSection: {
    marginVertical: 15,
  },
  graphText: {
    marginVertical: 10,
    fontSize: 16,
  },
});

export default DataCenterScreen;
