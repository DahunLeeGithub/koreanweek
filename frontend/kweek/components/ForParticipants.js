'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoFastFoodOutline, IoGameControllerOutline, IoVideocamOutline } from 'react-icons/io5'
import { ReactElement } from 'react'


const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function ForParticipants(props) {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            {props.currentLang=='en'?
                'Participants':
                '参加者'
            }
          </Text>
          <Heading>
            {props.currentLang=='en'?
                'Let\'s enjoy Korea and feel Korea.':
                '韓国を楽しみ、韓国を感じよう。'
            }
          </Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            {props.currentLang=='en'?
                'Experiential events such as Korean culture and Korean food will be held.':
                '韓国の文化や韓国の食べ物など、体験形のイベントが開かれます。'
            }
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={IoFastFoodOutline} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={props.currentLang=='en'?
                'Special menu in Cafeteria':
                'カフェテリアの特別メニュー'
              }
            />
            <Feature
              icon={<Icon as={IoGameControllerOutline} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={props.currentLang=='en'?
                'Various events':
                '様々なイベント'
              }
            />
            <Feature
              icon={<Icon as={IoVideocamOutline} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={props.currentLang=='en'?
                'Grand Show':
                'グランドショー'
              }
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              '/images/ForParticipants.jpeg'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}