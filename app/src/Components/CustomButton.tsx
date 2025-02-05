import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

const StyledLinearGradient = styled(LinearGradient)`
  padding: 12px 40px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
  width: 100%;
`;

const StyledText = styled(Text)`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const CustomButton: React.FC<ButtonProps> = ({ title, onPress, ...props }) => {
  return (
    <StyledTouchableOpacity 
      onPress={onPress} 
      activeOpacity={0.8}
      {...props}
    >
      <StyledLinearGradient
        colors={['#FF00FF', '#8A2BE2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <StyledText>{title}</StyledText>
      </StyledLinearGradient>
    </StyledTouchableOpacity>
  );
};

export default CustomButton;