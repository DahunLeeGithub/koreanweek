'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import Link from 'next/link'
import { FaTwitter, FaFacebook } from 'react-icons/fa'

const Logo = (props) => {
  return (
    <Box
    bgImage={'url("/images/logo-whitemode.png")'}
    w={'100px'}
    bgSize={'cover'}
    minH={'42px'}
    />
  )
}

const SocialButton = ({ children, label, href}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Logo />
        <Stack direction={'row'} spacing={6}>
          <Link href={'/'}>
            <Box>
              Home
            </Box>
          </Link>
          <Link href={'/blog'}>
            <Box>
              blog
            </Box>
          </Link>
          <Link href={'/contact'}>
            <Box>
              contact us
            </Box>
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2023 Dahun Lee. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/KoreanWeekAPU'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/koreanweek/'}>
              <FaFacebook />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}