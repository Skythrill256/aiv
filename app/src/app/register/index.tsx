import React from 'react';
import { View, Text, Image } from 'react-native';
import CustomTextField from '../../Components/CustomTextField';
import CustomButton from '../../Components/CustomButton';

const RegisterScreen = () => {
  return (
    <View className="flex-1 bg-black items-center justify-center p-5">
      <Image source={{ uri: 'https://www.bing.com/images/search?view=detailV2&ccid=i2VOzjsP&id=32666C0C3C3C617A10C87F0EE850501F0EC8835E&thid=OIP.i2VOzjsP0NYAMV0-3yaUKQHaIO&mediaurl=https%3a%2f%2fcelebritate.com%2fwp-content%2fuploads%2f2023%2f05%2fLana-Rhoades-922x1024.jpg&exph=1024&expw=922&q=Lana+Rhoades&simid=608044048731951776&FORM=IRPRST&ck=7C4D1BDC444A9DFBD18A68037D3D4F08&selectedIndex=2&itb=0' }} className="w-20 h-20 rounded-full mb-5" />
      <Text className="text-white text-3xl font-bold mb-5">Please Register to continue</Text>

      <CustomTextField placeholder="Enter your Name" type="name" />
<CustomTextField placeholder="Enter your Aadhar Number" type="aadhar" />
<CustomTextField placeholder="Enter your Role" type="role" />


      <CustomButton title="Register" onPress={() => console.log('Register Pressed')} />
    </View>
  );
};

export default RegisterScreen;
