import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import 'nativewind';

const VotingScreen = () => {
  const campaigns = [
    { title: 'General Election', date: '20 February 2025', status: 'Starts in 2 days' },
    { title: 'General Election', date: '20 February 2025', status: 'Starts in 2 days' },
    { title: 'General Election', date: '20 February 2025', status: 'Starts in 2 days' },
    { title: 'General Election', date: '20 February 2025', status: 'Starts in 2 days' },
    { title: 'General Election', date: '20 February 2025', status: 'Starts in 2 days' },
    { title: 'General Election', date: '20 February 2025', status: 'Starts in 2 days' },
    { title: 'General Election', date: '20 February 2025', status: 'Starts in 2 days' },
    { title: 'General Election', date: '20 February 2025', status: 'Starts in 2 days' },
  ];

  return (
    <View className="flex-1 bg-gray-900">
      <Text className="text-3xl font-bold text-white mb-6 px-4 pt-2">
        Active Voting Campaigns
      </Text>
      
      <ScrollView className="flex-1 px-4">
        <View className="p-2">
          {campaigns.map((campaign, index) => (
            <View key={index} className="bg-[#26242E] rounded-lg mb-2 px-4">
              <Text className="text-3xl font-bold text-white py-2">{campaign.title}</Text>
              <Text className="text-3xl text-white">{campaign.date}</Text>
              <Text className="text-xl text-white mt-2 py-2">{campaign.status}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default VotingScreen;