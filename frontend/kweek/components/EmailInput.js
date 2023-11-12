import { FormControl, FormLabel, Input, FormHelperText, FormErrorMessage } from "@chakra-ui/react";
import { useState, useEffect } from 'react';

export default function EmailInput(props) {
  const [input, setInput] = useState('')
  useEffect(()=>{
    props.setEmailInput(input)
  },[input])

    
  
    const handleInputChange = (e) => setInput(e.target.value)
  
    function isValidEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input);
    }

    function isValidInput(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    return (
      <FormControl isInvalid={isValidEmail}>
        <FormLabel>Email</FormLabel>
        <Input type='email' value={input} onChange={handleInputChange} />
        {isValidInput(input) ? (
          <FormHelperText>
            {props.currentLang=='en'?'You\'d entered the valid email':'有効なメールアドレスを入力しました'}
            
          </FormHelperText>
        ) : (
          <FormErrorMessage>
            {props.currentLang=='en'?'Email is required.':'有効なメールアドレスを入力してください'}
          </FormErrorMessage>
        )}
      </FormControl>
    )
  }