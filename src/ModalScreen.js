import React from 'react';
import { Text, View, Image, Modal, Dimensions } from 'react-native';

const ModalScreen = ({ modalState, closeModal }) => {
  // const { width, height } = Dimensions.get('window');
  return (
    <Modal visible={modalState} animationType="slide" presentationStyle="formSheet">
      <View style={{height:300, width:300}}>
        <Text>jdhhhjsdbjnknkdyfgvbnmbjhgfcgvb i</Text>
      </View>
    </Modal>
  );
};

export default ModalScreen;
