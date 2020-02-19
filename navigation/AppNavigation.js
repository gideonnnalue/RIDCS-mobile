import React, {useState, useEffect, useCallback} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from '../screens/LoginScreen';
import RegisterChildScreen from '../screens/RegisterChildScreen';
import BiometricsScreen from '../screens/BiometricsScreen';
import NFCUploadScreen from '../screens/NFCUploadScreen';
import AllChildrenScreen from '../screens/AllChildrenScreen';
import ChildProfileScreen from '../screens/ChildProfileScreen';
import ScanHealthChildScreen from '../screens/ScanHealthChildScreen';
import ScanFingerPrintScreen from '../screens/ScanFingerPrintScreen';
import DataToolsScreen from '../screens/DataToolsScreen';
import ChildDailyTallyScreen from '../screens/ChildDailyTallyScreen';
import HealthMonthlyTallyScreen from '../screens/HealthMonthlyTallyScreen';
import DataCenterScreen from '../screens/DataCenterScreen';
import SplashScreen from '../screens/SplashScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: 'rgba(33, 150, 83, 1)',
  },
  headerTintColor: 'white',
};

const AuthNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const RegisterChildNavigation = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="RegisterChild"
        component={RegisterChildScreen}
        options={{
          title: 'Register Child',
        }}
      />
      <Stack.Screen
        name="Biometrics"
        component={BiometricsScreen}
        options={{
          title: 'Register Child',
        }}
      />
      <Stack.Screen
        name="NFCUpload"
        component={NFCUploadScreen}
        options={{
          title: 'Register Child',
        }}
      />
    </Stack.Navigator>
  );
};

const ChildrenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="AllChildren"
        component={AllChildrenScreen}
        options={{
          title: 'Child Immunization Register',
        }}
      />
      <Stack.Screen
        name="ChildProfile"
        component={ChildProfileScreen}
        options={{
          title: 'Administer Vaccine',
        }}
      />
    </Stack.Navigator>
  );
};

const SearchAdministerNavigation = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="ScanHealthChild"
        component={ScanHealthChildScreen}
        options={{
          title: 'Administer Vaccine to Child',
        }}
      />
      <Stack.Screen
        name="ScanFingerPrint"
        component={ScanFingerPrintScreen}
        options={{
          title: 'Administer Vaccine to Child',
        }}
      />
      <Stack.Screen
        name="ChildProfile"
        component={ChildProfileScreen}
        options={{
          title: 'Administer Vaccine',
        }}
      />
    </Stack.Navigator>
  );
};

const DataNavigation = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="DataTools"
        component={DataToolsScreen}
        options={{
          title: 'Health Facility Data Tools',
        }}
      />
      <Stack.Screen
        name="ChildDailyTally"
        component={ChildDailyTallyScreen}
        options={{
          title: 'Child Daily Immunization Tally Sheet',
        }}
      />
      <Stack.Screen
        name="HealthMonthlyTally"
        component={HealthMonthlyTallyScreen}
        options={{
          title: 'Health Facility Immunization Monthly Summary',
        }}
      />
    </Stack.Navigator>
  );
};

const DataCenterNaigation = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="DataCenter"
        component={DataCenterScreen}
        options={{
          title: 'Data Center',
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#27AE60',
      }}
      drawerContentOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        labelStyle: {
          fontFamily: 'OpenSans-Bold',
        },
      }}>
      <Drawer.Screen
        name="DataCenter"
        component={DataCenterNaigation}
        options={{
          title: 'Data Center',
          drawerIcon: drawerConfig => (
            <Icon name="inbox" size={23} color={drawerConfig.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ChildRegistration"
        component={RegisterChildNavigation}
        options={{
          title: 'Register Child',
          drawerIcon: drawerConfig => (
            <Icon name="inbox" size={23} color={drawerConfig.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="AllChildren"
        component={ChildrenNavigation}
        options={{
          title: 'All Children',
          drawerIcon: drawerConfig => (
            <Icon
              name="odnoklassniki-square"
              size={23}
              color={drawerConfig.color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ScanChild"
        component={SearchAdministerNavigation}
        options={{
          title: 'Administer Vaccine',
          drawerIcon: drawerConfig => (
            <Icon name="plus-square" size={23} color={drawerConfig.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Data"
        component={DataNavigation}
        options={{
          title: 'View All Data Tools',
          drawerIcon: drawerConfig => (
            <Icon name="pencil-square" size={23} color={drawerConfig.color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const AppNavigation = () => {
  const [started, setStarted] = useState(false);

  const changeStart = useCallback(() => {
    setStarted(true);
  }, [setStarted]);

  useEffect(() => {
    setTimeout(() => {
      changeStart();
    }, 3000);
  }, [changeStart]);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {!started ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigation} />
        )}

        <Stack.Screen name="Drawer" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
