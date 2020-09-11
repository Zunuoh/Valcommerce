import React from 'react';
import {Text, View, Image, Modal} from 'react-native';

const ModalScreen = ({modalState, closeModal})=>{
    return(
        <Modal visible={modalState} animationType="slide" presentationStyle="pageSheet">
             <View>
            <Text>jdhh</Text>
        </View>
        </Modal>
       
    )
}

export default ModalScreen;