// Components/CustomDrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, backgroundColor: '#1a1a2e' }}>
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Image
          source={require('../assets/smarty.png')}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <Text style={{ color: '#fff', fontSize: 18, marginTop: 10 }}>Smartboole</Text>
      </View>
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
