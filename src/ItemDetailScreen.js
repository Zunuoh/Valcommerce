import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalScreen from '../src/ModalScreen';
import ListScreen from '../src/ListScreen'; 
import { GlobalContext } from '../src/contextFolder/globalContext';

const sizeList = [{"id":"0", "ssize":"UK 6"}, {"id":"1", "ssize":"UK 7"}, {"id":"2", "ssize":"UK 8"}, {"id":"3", "ssize":"UK 9"}, 
{"id":"4", "ssize":"UK 10"}, {"id":"5", "ssize":"UK 11"}, {"id":"6", "ssize":"UK 12"}]

const ItemDetailScreen = ({ navigation }, route) => {
  const[sizes, useSizes] = useState(sizeList);
  const [modalState, setModalState] = useState(false);
  // const [isModalVisible, setModalVisible] = useState(false);
  const [userChoice, setUserChoice] = useState(null);

  const {id} = route.params;
  const filterDataFunction = (id) =>{
    setUserChoice(contextData?.filter(item => item.id === id)[0]);
  }

  // useEffect(()=>{
  //   if(id){
  //     filterDataFunction();
  //   }
  // }, [id])
// console.log(id)

  const openModal = () => {
    setModalState(true);
  };

  // const toggleModal = () => {
  //   setModalVisible(modalState);
  // };


  const closeModal = () => {
    setModalState(false);
  };

  const { addtoCart, deleteCart } = useContext(GlobalContext);

  // const handleCart = (data) => {
  //   addtoCart(data);
  //   // setActive(true)
  // };
// console.log(userChoice)
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ paddingTop: 40, flexDirection: 'row' }}>
        <Feather name="arrow-left" size={24} color="black" />
        <Feather name="heart" size={24} color="black" style={{ paddingLeft: '85%' }} />
      </View>
          
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -50 }}>
        <Image source={require('../assets/shoe2.jpeg')} style={{ width: '100%', height: '60%' }} />
      </View>

      <View style={{ flexDirection: 'row', marginTop: -90 }}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: '500' }}>Select Size</Text>
        </View>
        <View style={{ paddingLeft: '60%' }}>
          <Feather name="info" size={24} color="black" />
        </View>
      </View>

      <View style={{ paddingTop: 10, flexWrap: 'wrap', flexDirection: 'row' }}>
        {sizes && sizes.map((size=>{
          return(
            <TouchableOpacity
            style={{
              width: 70,
              height: 70,
              backgroundColor: 'white',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
              marginTop: 10,
              borderWidth: 1,
              borderColor: '#D7D7D7',
            }}
          >
            <Text style={{ fontSize: 20 }}>{size.ssize}</Text>
          </TouchableOpacity>
  
          );
        }))}
      </View>

      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#24292C',
          borderRadius: 20,
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>Add to cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: 50,
          backgroundColor: '#CBCBCB',
          height: '25%',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        onPress={openModal}
        // onPress={toggleModal}
      >
        <View
          style={{
            backgroundColor: 'black',
            height: 5,
            width: 30,
            marginLeft: '45%',
            marginTop: '5%',
            borderRadius: 20,
          }}
        />
        <ModalScreen closeModal={closeModal} modalState={modalState} />
      </TouchableOpacity>
    </View>
  );
};

export default ItemDetailScreen;
