import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListScreen from './src/ListScreen';
import ItemDetailScreen from './src/ItemDetailScreen';
import Popular from './src/Toptabs/Header';
import Categories from './src/Toptabs/Categories';
import Brands from './src/Toptabs/Brands';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MainSectionTab=(props)=>{
  return(
    <Tab.Navigator>
      <Tab.Screen name="Popular" component={ListScreen}/>
      <Tab.Screen name="Categories" component={Categories}/>
      <Tab.Screen name="Brands" component={Brands}/>
    </Tab.Navigator>
  )
}
export default function App({navigation}) {
  return (
   <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen name="MainSectionTab" component={MainSectionTab} options={{headerShown:false}}/>
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
