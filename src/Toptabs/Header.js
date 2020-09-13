import React from 'react';
import {View, Text} from 'react-native';
import {Feather} from '@expo/vector-icons';

const HeaderScreen=()=>{
    return(
    <View>
        <View style={{paddingTop:50, flexDirection:"row"}}>
                <View>
                <Text style={{fontSize:35, fontWeight:"bold"}}>Shoes</Text>
                </View>
                <View style={{paddingLeft:180}}>
                <Feather
                    name="search"
                    size={24}
                    color="black"/>
                </View>
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