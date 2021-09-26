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
import { Provider } from "react-redux";
import store from './app/state/store'
import ExisitingMenu from './app/screens/existingMenu'
import EditItem from './app/screens/editMenuItem'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={ExisitingMenu} />
          <Stack.Screen name="Edit" component={EditItem} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default App;
