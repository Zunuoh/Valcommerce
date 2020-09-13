import React, { useState } from 'react';
import {View, Text} from 'react-native';
import {Feather} from '@expo/vector-icons';

const BrandList=[{"id":"0", "name":"Adidas"}, {"id":"1", "name":"Nike"}, {"id":"2", "name":"Gucci"}, {"id":"3", "name":"Puma"}, {"id":"4", "name":"Dior"}, {"id":"5", "name":"Louis Vuitton"},
{"id":"6", "name":"Zara"}, {"id":"7", "name":"Puma"}, {"id":"8", "name":"Givenchy"}]

const BrandsScreen=()=>{
    const [brands, useBrands] = useState(BrandList);
    return(
     <View style={{flex:1, backgroundColor:"white"}}>
       {brands && brands.map(brand=>{
           return(
            <View style={{ height:60, flexDirection:"row", alignItems:"center", paddingLeft:20, borderBottomWidth:.5, borderBottomColor:"#d8ded9"}}>
            <View style={{flex:6}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>{brand.name}</Text>
            </View>
            <View style={{flex:1}}>
            <Feather
            name="chevron-right"
            size={24}
            color="black"/>
            </View>
            </View>
           );
       })}
         <View style={{flexDirection:"row", marginTop:40, justifyContent:"center", alignItems:"center"}}>
        <Feather 
        name="facebook"
        size={24}
        color="turqoiuse"/>

       <Feather style={{paddingLeft:20}}
        name="instagram"
        size={24}
        color="black"/>

        <Feather style={{paddingLeft:20}} 
        name="twitter"
        size={24}
        color="black"/>
        </View>
     </View>
    );
}

export default BrandsScreen;