import React, {useState} from 'react';
import {Input, InputContainer} from './styles';
import {Colors} from '../../resources';
import {ActivityIndicator, TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  isLoading?: boolean;
}

function WeatherInput({isLoading, ...props}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <InputContainer isFocused={isFocused}>
      {/*// @ts-ignore*/}
      <Input
        selectionColor={Colors.purple}
        placeholderTextColor={'#77604999'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoCapitalize={'none'}
        {...props}
      />
      {isLoading && (
        <ActivityIndicator
          style={{alignSelf: 'center'}}
          color={Colors.purple}
        />
      )}
    </InputContainer>
  );
}

export default WeatherInput;
