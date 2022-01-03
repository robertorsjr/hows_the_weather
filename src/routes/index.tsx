import React from 'react';
import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeatherDetail from '../screens/WeatherDetail';

const Stack = createNativeStackNavigator();

const commonOptions = {headerShown: false, gestureEnabled: false};

function Routes() {
  return (
    <Stack.Navigator screenOptions={commonOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="WeatherDetail" component={WeatherDetail} />
    </Stack.Navigator>
  );
}

export default Routes;
