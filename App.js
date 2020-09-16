import { StatusBar } from 'expo-status-bar';
import React, {Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListScreen from './src/ListScreen';
import ItemDetailScreen from './src/ItemDetailScreen';
import Header from './src/Toptabs/Header';
import Categories from './src/Toptabs/Categories';
import Brands from './src/Toptabs/Brands';
import LikedScreen from './src/LikedScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {GlobalProvider} from './src/contextFolder/globalContext';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MainSectionTab=({navigation})=>{
  return(
    <Fragment>
        <Header name="Header" navigation={navigation}/>
       <Tab.Navigator tabBarOptions={{labelStyle: { fontSize: 20, fontWeight:"400" },
      indicatorStyle:{backgroundColor:"black", width:20, height:3, marginLeft:25}
    }}>
      <Tab.Screen name="Popular" component={ListScreen}/>
      <Tab.Screen name="Categories" component={Categories}/>
      <Tab.Screen name="Brands" component={Brands}/>
    </Tab.Navigator>
    </Fragment>
   
  )
}
export default function App({navigation}) {
  return (
   <GlobalProvider>
   <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen name="MainSectionTab" component={MainSectionTab} options={{headerShown:false}}/>
     <Stack.Screen name="ListScreen" component={ListScreen} options={{headerShown:false}}/>
     <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} options={{headerShown:false}}/>
     <Stack.Screen name="LikedScreen" component={LikedScreen} options={{headerShown:false}}/>
   </Stack.Navigator>
   </NavigationContainer>
   </GlobalProvider> 
  

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
