import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';

const HeaderScreen=({navigation})=>{
    return(
    <View style={{backgroundColor:"white"}}>
        <View style={{paddingTop:60, paddingLeft:20, paddingBottom:10,flexDirection:"row"}}>
                <View>
                <Text style={{fontSize:35, fontWeight:"bold"}}>Shoes</Text>
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate("LikedScreen")}}>
                <View style={{paddingLeft:180}}>
                <Feather
                    name="bookmark"
                    size={24}
                    color="black"/>
                </View>
                </TouchableOpacity>
                <View style={{paddingLeft:18}}>
                    <Feather
                    name="user"
                    size={24}
                    color="black"/>
                </View>
            </View>
    </View>
    );
    
}

export default HeaderScreen;