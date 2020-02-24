import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const TopHeader = props => {
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#27AE60" />
      <View style={styles.topHeader}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#27AE60', 'rgba(33, 150, 83, 1)']}
          style={styles.topHeaderBackground}>
          <Text style={styles.topHeaderText}>{props.children}</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topHeader: {
    width: '95%',
  },
  topHeaderBackground: {
    width: '95%',
    paddingBottom: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 30,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  topHeaderText: {
    color: 'white',
  },
});

export default TopHeader;
