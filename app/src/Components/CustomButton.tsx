import React, { forwardRef } from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, View } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const CustomButton = forwardRef<View, ButtonProps>(
  ({ title, ...props }, ref) => {
    return (
      <TouchableOpacity 
        ref={ref}
        activeOpacity={0.8} 
        className="w-[60%] bg-[#8A2BE2] px-10 py-3 rounded-2xl items-center justify-center"
        {...props}
      >
        <Text className="text-white text-xl font-bold">
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
);

export default CustomButton;