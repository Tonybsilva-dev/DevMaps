import React from 'react';
import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/core'

// import { Container } from './styles';

const Input: React.FC<ChakraInputProps> = (props) => {
  return (
    <ChakraInput
      height="50px"
      backgroundColor="#2D4059"
      focusBorderColor="#87cefa"
      borderRadius="sm"
      {...props}
    />
  )
}

export default Input;