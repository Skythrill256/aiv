import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRouter } from "expo-router"; 
import CustomTextField from '../../Components/CustomTextField';
import CustomButton from '../../Components/CustomButton';

const RegisterScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black items-center justify-center p-5">
      <Image 
        source={{ uri: 'https://example.com/your-image.jpg' }} 
        className="w-20 h-20 rounded-full mb-5" 
      />
      <Text className="text-white text-3xl font-bold mb-5">Please Register to continue</Text>

      <CustomTextField placeholder="Enter your Name" type="name" />
      <CustomTextField placeholder="Enter your Aadhar Number" type="aadhar" />
      <CustomTextField placeholder="Enter your Role" type="role" />

      <CustomButton title="Scan QR Code" onPress={() => router.push('/scanner')} />

      <View className="h-3" /> 
      <CustomButton title="Register" onPress={() => router.push('/home')} />

    </View>
  );
};

export default RegisterScreen;
