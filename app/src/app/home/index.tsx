import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import 'nativewind';
import BottomNavigation from '../../Components/BottomNavigation';
import VotingScreen from './VotingScreen';
import ProfileScreen from './ProfileScreen';
import AnotherScreen from './AnotherScreen';

export default function App() {
  const [selectedTab, setSelectedTab] = useState('center');

  let Content;
  if (selectedTab === 'left') {
    Content = <AnotherScreen />;
  } else if (selectedTab === 'center') {
    Content = <VotingScreen />;
  } else if (selectedTab === 'right') {
    Content = <ProfileScreen />;
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 bg-black ">
        {Content}
        <BottomNavigation selected={selectedTab} onSelect={setSelectedTab} />
      </View>
    </SafeAreaView>
  );
}