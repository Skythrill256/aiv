import { Link, router } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import CustomButton from "../../Components/CustomButton";

const HomeScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-black items-center justify-center px-5">
      <Image
        source={require("../../../assets/favicon.png")} 
        className="w-32 h-32 rounded-full mb-6"
      />

      <Text className="text-white text-4xl font-bold mb-2">
        Voting <Text className="text-pink-500">APP</Text>
      </Text>

      {/* Description */}
      <Text className="text-center text-white text-xl mb-8">
        <Text className="text-pink-500 font-bold">Zero Knowledge Proof</Text>{" "}
        BlockChain Application where users can{" "}
        <Text className="text-pink-500 font-bold">vote</Text> for different
        events.
      </Text>

      <Link href="/register" asChild>
  <CustomButton title="Register" />
</Link>


    </View>
  );
};

export default HomeScreen;
