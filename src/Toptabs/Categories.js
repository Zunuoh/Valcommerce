import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CatList = [
  { id: '0', name: 'Sneakers' },
  { id: '1', name: 'Sandals' },
  { id: '2', name: 'Slippers' },
  { id: '3', name: 'Loafers' },
  { id: '4', name: 'Stilettos' },
  { id: '5', name: 'Platforms' },
  { id: '6', name: 'Desert Boots' },
  { id: '7', name: 'Wedge Heels' },
  { id: '8', name: 'Mules' },
];

const CategoriesScreen = () => {
  const [categories, setCategory] = useState(CatList);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {categories &&
        categories.map((category) => {
          return (
            <View
              style={{
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
                borderBottomWidth: 0.5,
                borderBottomColor: '#d8ded9',
              }}
            >
              <View style={{ flex: 6 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{category.name}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Feather name="chevron-right" size={24} color="black" />
              </View>
            </View>
          );
        })}

      <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
        <Feather name="facebook" size={24} color="turqoiuse" />

        <Feather style={{ paddingLeft: 20 }} name="instagram" size={24} color="black" />

        <Feather style={{ paddingLeft: 20 }} name="twitter" size={24} color="black" />
      </View>
    </View>
  );
};

export default CategoriesScreen;
