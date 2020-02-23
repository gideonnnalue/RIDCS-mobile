import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  BackHandler,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import LinearGradient from 'react-native-linear-gradient';

import HeaderButton from '../components/HeaderButton';
import TopHeader from '../components/TopHeader';
import dummyData from '../data/dummy-tools';

const ToolCard = props => {
  return (
    <TouchableOpacity
      style={styles.toolCard}
      onPress={() => {
        props.navigation();
      }}>
      <Image style={styles.toolImage} source={props.img} />
      <Text style={styles.toolText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

class DataToolsScreen extends PureComponent {
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

  handleNavigaton(comp) {
    this.props.navigation.navigate(comp);
  }
  render() {
    return (
      <View>
        <TopHeader>
          Kindly select a data tool to view
        </TopHeader>
        <ScrollView contentContainerStyle={styles.screen}>
          {dummyData.map(data => (
            <ToolCard
              key={data.id}
              img={data.img}
              text={data.name}
              comp={data.comp}
              navigation={() => this.handleNavigaton(data.comp)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolCard: {
    width: 170,
    height: 170,
    backgroundColor: 'white',
    margin: 7,
    borderRadius: 8,
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
  },
  toolImage: {
    width: 70,
    height: 70,
  },
  toolText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default DataToolsScreen;
