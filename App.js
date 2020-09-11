import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListScreen from './src/ListScreen';
import ItemDetailScreen from './src/ItemDetailScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();


export default function App({navigation}) {
  return (
   <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen name="ListScreen" component={ListScreen} options={{headerShown:false}}/>
     <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} options={{headerShown:false}}/>
   </Stack.Navigator>
   </NavigationContainer>

  // <ItemDetailScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
