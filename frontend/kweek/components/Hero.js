'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Link } from '@chakra-ui/react'

export default function WithBackgroundImage(props) {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url("/images/background-image.jpg")'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            {props.currentLang=='en'?
            'Korean Week is one of the big event in APU. We provide Korean traditional culture via this event.':
            'コリアンウィークはAPUの大きなイベントの一つです。 私たちはこのイベントを通じて韓国の伝統文化を提供します。'}
          </Text>
          <Stack direction={'row'}>
            <Link href='/blog'>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                {props.currentLang=='en'?
              'Show me more':
              'もっと見る'}
              </Button>
            </Link>
            <Button
            bg={'whiteAlpha.300'}
            rounded={'full'}
            color={'white'}
            _hover={{ bg: 'whiteAlpha.500' }}
            as={'a'}
            href='https://www.facebook.com/koreanweek/'
            target="_blank"
            >

                {props.currentLang=='en'?
                'Show me Facebook':
                'フェイスブックを見る'}

            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}