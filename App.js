/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExisitingMenu from './app/screens/existingMenu'
import EditItem from './app/screens/editMenuItem'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={ExisitingMenu} />
        <Stack.Screen name="Edit" component={EditItem} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
