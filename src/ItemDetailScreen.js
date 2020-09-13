import React, { useState } from 'react';
import {View, Text, Image} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalScreen from '../src/ModalScreen';

const ItemDetailScreen =({navigation})=>{
    const[modalState, setModalState] = useState(false);

    const openModal = ()=>{
        setModalState(true)
    }

    const closeModal = ()=>{
        setModalState(false)
    }
    return(
        <View style={{flex:1, padding:20}}>
           <View style={{paddingTop:40, flexDirection:"row"}}>
             <Feather
             name="arrow-left"
             size={24}
             color="black"/>
              <Feather
               name="heart"
               size={24}
               color="black"
               style={{paddingLeft:"85%"}}/>
           </View>

           <View style={{justifyContent:"center", alignItems:"center", marginTop:-50}}>
               <Image source={require('../assets/shoe2.jpeg')} style={{width:"100%", height:"60%"}}/>
           </View>

           <View style={{flexDirection:"row", marginTop:-90}}>
               <View>
               <Text style={{fontSize:25, fontWeight:"500"}}>Select Size</Text>
               </View>
              <View style={{paddingLeft:"60%"}}>
                  <Feather
                  name="info"
                  size={24}
                  color="black"
                  />
              </View>
           </View>

           <View style={{paddingTop:10, flexWrap:"wrap", flexDirection:"row"}}>
               <View style={{width:70, height:70, backgroundColor:"white", borderRadius:10, justifyContent:"center", alignItems:"center", marginRight:10, marginTop:10, borderWidth:1, borderColor:"#D7D7D7"}}>
                   <Text style={{fontSize:20}}>UK 6</Text>
               </View>
               <View style={{width:70, height:70, backgroundColor:"white", borderRadius:10, justifyContent:"center", alignItems:"center", marginRight:10, marginRight:10, marginTop:10}}>
                   <Text style={{fontSize:20}}>UK 6</Text>
               </View>
               <View style={{width:70, height:70, backgroundColor:"white", borderRadius:10, justifyContent:"center", alignItems:"center", marginRight:10, marginRight:10, marginTop:10}}>
                   <Text style={{fontSize:20}}>UK 6</Text>
               </View>
               <View style={{width:70, height:70, backgroundColor:"white", borderRadius:10, justifyContent:"center", alignItems:"center", marginRight:10, marginRight:10, marginTop:10}}>
                   <Text style={{fontSize:20}}>UK 6</Text>
               </View>

               <View style={{width:70, height:70, backgroundColor:"white", borderRadius:10, justifyContent:"center", alignItems:"center", marginRight:10, marginRight:10, marginTop:20}}>
                   <Text style={{fontSize:20}}>UK 6</Text>
               </View>
           </View>

          <TouchableOpacity style={{width:"100%", height:50, backgroundColor:"#24292C", borderRadius:20, marginTop:20, justifyContent:"center", alignItems:"center"}} >
              <Text style={{color:"white"}}>Add to cart</Text>
          </TouchableOpacity>

           <View style={{marginTop:50, backgroundColor:"#CBCBCB", height:"8%", borderTopLeftRadius:30, borderTopRightRadius:30}} onPress={openModal} >
           <View style={{backgroundColor:"black", height:5, width:30, marginLeft:"45%", marginTop:"5%", borderRadius:20}} />
           <ModalScreen closeModal={closeModal} modalState={modalState}/>
           
           </View>











        </View>
    );
}

export default ItemDetailScreen;