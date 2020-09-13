import React from 'react';
import {View, Text, Image} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderScreen from './Toptabs/Header';


const ShoeList = [{"id":"0", "name":"Kyrie 6", "price":"$130.00", "size":"39", "desc":"Designed with the comfort of the users feet in mind"},{"id":"1", "name":"ZK 2K", "price":"$200.00", "size":"40", "desc":"Designed with the comfort of the users feet in mind"},
{"id":"2", "name":"Kyrie Flytrap", "price":"$148.00", "size":"41", "desc":"Designed with the comfort of the users feet in mind"},{"id":"3", "name":"Adidas", "price":"$50.00", "size":"39", "desc":"Designed with the comfort of the users feet in mind"}]

const ListScreen =({navigation})=>{
    return(
        <View style={{flex:1, padding:20}}>
          
          {/* <HeaderScreen/> */}
            {/* <View style={{flexDirection:"row", justifyContent:"space-between", paddingTop:15}}>
                <Text style={{fontSize:25, fontWeight:"bold"}}>Popular</Text>
                <Text style={{fontSize:25, fontWeight:"bold"}}>Categories</Text>
                <Text style={{fontSize:25, fontWeight:"bold"}}>Brands</Text>
            </View> */}
            <View>
            <ScrollView horizontal={true}>
               <View style={{width:210, height:280, backgroundColor:"turquoise", marginTop:20, borderRadius:10, padding:10, marginRight:30}}>
                  <View style={{flex:4, paddingTop:10, flexDirection:"row"}}>
                      <View>
                      <Text style={{fontSize:20, fontWeight:"bold", color:"white"}}>Kyrie 6</Text>
                      <Text style={{fontSize:20, paddingTop:5, color:"white"}}>$130.00</Text>
                      </View>
                      <View style={{paddingLeft:70}}>
                          <Feather
                          name="heart"
                          size={24}
                          color="white"/>
                      </View>
                      <Feather style={{paddingLeft:10}}
                          name="plus"
                          size={26}
                          color="white"
                          onPress={()=>navigation.navigate("ItemDetailScreen")}/>
                  </View>
                  <View style={{flex:8, justifyContent:"center", alignItems:"center"}}>
                     <Image source={require('../assets/shoe1.jpeg')} style={{width:"90%", height:"90%"}}/>
                  </View>
               </View>

               <View style={{width:210, height:280, backgroundColor:"turquoise", marginTop:20, borderRadius:10, padding:10}}>
                  <View style={{flex:4, paddingTop:10, flexDirection:"row"}}>
                      <View>
                      <Text style={{fontSize:20, fontWeight:"bold", color:"white"}}>Kyrie 6</Text>
                      <Text style={{fontSize:20, paddingTop:5, color:"white"}}>$130.00</Text>
                      </View>
                      <View style={{paddingLeft:70}}>
                          <Feather
                          name="heart"
                          size={24}
                          color="white"/>
                      </View>
                      <Feather style={{paddingLeft:10}}
                          name="plus"
                          size={26}
                          color="white"
                          onPress={()=>navigation.navigate("ItemDetailScreen")}/>
                  </View>
                  <View style={{flex:8, justifyContent:"center", alignItems:"center"}}>
                     <Image source={require('../assets/shoe1.jpeg')} style={{width:"90%", height:"90%"}}/>
                  </View>
               </View>
            </ScrollView>
            </View>
         

            <View style={{paddingTop:30, flexDirection:"row"}}>
                <View>
                <Text style={{fontSize:30, fontWeight:"bold"}}>DISCOVER</Text>
                </View>
                <View style={{paddingLeft:180}}>
                <Feather
                name="list"
                size={24}
                color="black"/>
                </View>
               
               </View>
            
            
           
        </View>
    );
}

export default ListScreen;