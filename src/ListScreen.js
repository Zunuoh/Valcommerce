import React, { useState } from 'react';
import {View, Text, Image, TouchableWithoutFeedback, useContext} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderScreen from './Toptabs/Header';
import {GlobalContext} from './contextFolder/globalContext';


const ShoeList = [{"id":"0", "name":"Kyrie 6", "price":"$130.00", "size":"39", "desc":"Designed with the comfort of the users feet in mind", "picture":require('../assets/shoe3.jpeg')},{"id":"1", "name":"ZK 2K", "price":"$200.00", "size":"40", "desc":"Designed with the comfort of the users feet in mind", "picture":require('../assets/shoe1.jpeg')},
{"id":"2", "name":"Kyrie Flytrap", "price":"$148.00", "size":"41", "desc":"Designed with the comfort of the users feet in mind", "picture":require('../assets/shoe2.jpeg')}]

const DisList= [{"id":"0", "name":"Adidas", "price":"$50.00", "size":"39", "desc":"Designed with the comfort of the users feet in mind", "picture":require('../assets/shoe4.jpeg')}, {"id":"1", "name":"Adidas", "price":"$50.00", "size":"39", "desc":"Designed with the comfort of the users feet in mind", "picture":require('../assets/shoe5.jpeg')},
{"id":"2", "name":"Adidas", "price":"$50.00", "size":"39", "desc":"Designed with the comfort of the users feet in mind", "picture":require('../assets/shoe6.jpeg')} ]

const ListScreen =({navigation})=>{
    const[shoes, setShoes] = useState(ShoeList);
    const[discShoes, setdiscShoes] = useState(DisList);
    const[likedShoe, setlikedShoe] = useState(null);

    // const {addtoFav,favShoes} = useContext(GlobalContext);
     const handleLikes =(data)=>{
          setlikedShoe(data);
          const newData = likedShoe
          addtoFav(newData)
    }
// console.log(likedShoe);
// console.log(favShoes)

    return(
        <View style={{flex:1, padding:20, backgroundColor:"white"}}>
            <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{marginTop:1, flexDirection:"row"}}>
                {shoes && shoes.map(shoe=>{
                    return(
                       
                        <View style={{width:240, height:260, backgroundColor:"turquoise", borderRadius:10, padding:10, marginRight:30}}>
                  <View style={{flex:4, paddingTop:10, flexDirection:"row"}}>
                      <View>
                      <Text style={{fontSize:20, fontWeight:"bold", color:"white"}}>{shoe.name}</Text>
                      <Text style={{fontSize:20, paddingTop:5, color:"white"}}>{shoe.price}</Text>
                      </View>
                      <TouchableWithoutFeedback onPress={() => handleLikes(shoe)}>
                      <View style={{paddingLeft:100}}>
                          <Feather
                          name="heart"
                          size={24}
                          color="white"/>
                      </View>
                      
                      </TouchableWithoutFeedback>
                      
                  </View>
                  <View style={{flex:8, justifyContent:"center", alignItems:"center"}}>
                     <Image source={shoe.picture} style={{width:"90%", height:"90%"}}/>
                  </View>
               </View>
                    );
                })}
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

            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {discShoes && discShoes.map(discShoe=>{
                    return(
                        <View style={{marginTop:20, marginRight:20}}>
                        <View style={{borderWidth:1, borderColor:"#f2f4f2", borderRadius:20, height:180, width:160, shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                            <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Image source={discShoe.picture} style={{width:100, height:100}}/>
                            </View>
                            <View style={{paddingTop:18}}>
                            <Text style={{fontSize:20, paddingLeft:10}}>{discShoe.name}</Text>
                            <View style={{flexDirection:"row", paddingTop:10}}>
                                <Text style={{paddingLeft:10, fontSize:20}}>{discShoe.price}</Text>
                               <Feather style={{paddingLeft:55}}
                               name="heart"
                               size={24}
                               color="black"/>
                            </View>
                            </View>
                        </View>
                        </View>
                    );
                })} 
               


                </ScrollView>
            </View>

            <View>
                <View style={{flexDirection:"row", borderWidth:1, borderRadius:30, width:150, height:50, marginTop:30, marginLeft:90, justifyContent:"center", alignItems:"center", backgroundColor:"black"}}>
                <Feather
                name="home"
                size={24}
                color="white"/>
                <View style={{paddingLeft:10}}>
                    <Text style={{fontSize:20, fontWeight:"bold", color:"white"}}>Home</Text>
                </View>
                </View>
                
            </View>


            <View>
            </View>
            
            
           
        </View>
    );
}

export default ListScreen;