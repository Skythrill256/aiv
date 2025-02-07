import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { CheckCircleIcon } from 'react-native-heroicons/solid';

interface TextFieldProps {
  placeholder: string;
  type: 'name' | 'aadhar' | 'role';
  secureTextEntry?: boolean;
}

const CustomTextField: React.FC<TextFieldProps> = ({ placeholder, type, secureTextEntry = false }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateInput = (text: string) => {
    if (type === 'name') return /^[A-Za-z\s]+$/.test(text) && text.length > 2;
    if (type === 'aadhar') return /^[0-9]{12}$/.test(text);
    if (type === 'role') return text.length > 2;
    return false;
  };

  const handleChange = (text: string) => {
    setValue(text);
    setIsValid(validateInput(text));
  };

  const getKeyboardType = () => (type === 'aadhar' ? 'numeric' : 'default');

  return (
    <View className="w-full mb-3 flex-row items-center bg-[#26242E] rounded-2xl px-4 py-2 h-16">
      <TextInput
        className="flex-1 text-white text-lg h-full leading-none"
        placeholder={placeholder}
        placeholderTextColor="#bbb"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={handleChange}
        keyboardType={getKeyboardType()}
      />
      {isValid && <CheckCircleIcon size={24} color="green" />}
    </View>
  );
};

export default CustomTextField;
