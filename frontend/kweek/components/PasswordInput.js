import { FormControl, FormLabel, Input, FormHelperText, FormErrorMessage } from "@chakra-ui/react";
import { useState, useEffect } from 'react';

export default function PasswordInput(props) {
  const [input, setInput] = useState('')
  useEffect(()=>{
    props.setPassword(input)
  },[input])

    
  
    const handleInputChange = (e) => setInput(e.target.value)
  
    function isValidPassword() {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(input);
      }

      function isValidPassword(password) {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
      }
  
    return (
      <FormControl isInvalid={isValidPassword}>
        <FormLabel>password</FormLabel>
        <Input type='password' value={input} onChange={handleInputChange} />
        {isValidPassword(input) ? (
          <FormHelperText>
            {props.currentLang=='en'?'You\'d entered the valid password':'有効な暗証番号を入力しました'}
          </FormHelperText>
        ) : (
          <FormErrorMessage>
            {props.currentLang=='en'?'Passwords must contain at least 8 characters, one alphabet, or at least one number.':'パスワードには8文字以上、アルファベット1つまたは数字1つ以上が含まれている必要があります'}
          </FormErrorMessage>
        )}
      </FormControl>
    )
  }