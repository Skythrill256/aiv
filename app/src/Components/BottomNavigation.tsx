import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import 'nativewind';

const BottomNavigation = ({ selected, onSelect }: { selected: string; onSelect: (tab: string) => void }) => {
  return (
    <View className="flex-row justify-around items-center h-16 bg-[#26242E] border-t border-gray-700">
      <TouchableOpacity onPress={() => onSelect('left')}>
        <Ionicons name="qr-code-outline" size={30} color={selected === 'left' ? '#FF00AA' : '#FFF'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelect('center')}>
        <Ionicons name="grid-outline" size={30} color={selected === 'center' ? '#FF00AA' : '#FFF'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelect('right')}>
        <Ionicons name="person-circle-outline" size={30} color={selected === 'right' ? '#FF00AA' : '#FFF'} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;