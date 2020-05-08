
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Main from './pages/Main';
import AddContact from './pages/AddContact';
import ListContact from './pages/ListContact';


export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="AddContact" component={AddContact} />
        <AppStack.Screen name="ListContact" component={ListContact} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
