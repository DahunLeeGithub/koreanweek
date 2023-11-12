import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Button, Text, ModalFooter,
    Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, 
} from "@chakra-ui/react";
import { useState } from 'react';
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

export default function LoginModal(props) {
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)
    const [emailInput, setEmailInput] = useState('')
    const [password, setPassword] = useState('')

  
    return (
      <>
        <Button
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
          Login
        </Button>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <EmailInput setEmailInput={setEmailInput} currentLang={props.currentLang} />
              <PasswordInput setPassword={setPassword} currentLang={props.currentLang} />
            </ModalBody>
            <ModalFooter>

            <Popover>
                <PopoverTrigger>
                    <Button>Login</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>{props.currentLang=='en'?'Login failed':'ログインに失敗しました'}</PopoverHeader>
                    <PopoverBody>{props.currentLang=='en'?'Please check again.':'もう一度確認お願いします'}</PopoverBody>
                </PopoverContent>
            </Popover>

              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }