import React, { useState, useContext } from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {Feather} from '@expo/vector-icons';
import ListScreen from './ListScreen';
import {GlobalContext} from './contextFolder/globalContext';
import { TouchableOpacity } from 'react-native-gesture-handler';


const LikedScreen = () =>{

    const {favShoes, deleteFav, addtoCart} = useContext(GlobalContext);
    const handleDel =(id)=>{
        //   setlikedShoe(data);
        //   const newData = likedShoe
          deleteFav(id)
    }
    return(
        <View style={{flex:1, padding:30}}>
            <View style={{justifyContent:"center", alignItems:"center", paddingTop:30}}>
                <Text style={{fontSize:30, fontWeight:"bold"}}>FAVOURITES</Text>
            </View>
            {favShoes.length === 0 ? (
                <View style={{justifyContent:"center", alignItems:"center", paddingTop:230}}>
                    <Text style={{fontSize:20}}>Oops, No favourites</Text>
                </View>
            ) :
            (
                <View>
                    {favShoes.map(favShoe=>{
                        return(
                            // <View>
                            //     <Text>{favShoe.picture}</Text>
                            //     <Text>{favShoe.name}</Text>

                            //     <TouchableOpacity onPress={()=>{handleDel(favShoe.id)}}>
                            //        <View>
                            //        <Feather
                            //     name="trash"
                            //     size={24}
                            //     color="black"/>
                            //        </View>
                            //     </TouchableOpacity>
                               
                            // </View>

                            <View style={{ height:90, flexDirection:"row", alignItems:"center", paddingLeft:10, borderBottomWidth:.5, borderBottomColor:"#d8ded9"}}>
                            <View>
                            <Text>{favShoe.picture}</Text>
                            </View>
                            <View style={{flex:2, paddingLeft:20}}>
                            <Text style={{fontSize:20, fontWeight:"bold"}}>{favShoe.name}</Text>
                            <Text style={{fontSize:20, fontWeight:"bold"}}>{favShoe.price}</Text>
                            </View>
                            <View style={{flexDirection:"row"}}>
                            <TouchableOpacity style={{paddingRight:20}}>
                            <Feather
                            name="plus"
                            size={24}
                            color="#432a76"/>
                            </TouchableOpacity>
                           
                            <TouchableOpacity onPress={()=>{handleDel(favShoe.id)}}>
                            <Feather
                            name="trash"
                            size={24}
                            color="#432a76"/>
                            </TouchableOpacity>
                           
                            </View>
                            </View>
                        )
                    })}
                </View>
            )
            
            }
         
        </View>
    );
} 

export default LikedScreen;