'use client'

import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

// title, body1, imgPath, author, date

export default function BlogCard(props) {
  function formatDatetime(dateTimeStr) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const date = new Date(dateTimeStr);
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    const formattedDatetimeJp = `${year}-${month}-${day}`;
    const formattedDatetimeEn = `${day} ${months[month-1]} ${year}`;
    return [formattedDatetimeJp, formattedDatetimeEn];
  }
  const imgUrl = props.data.boxes[0].img
  return (
    <Box py={6}>
      <Box
        w={'445px'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box h={'250px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          {props.data.boxes[0].img==null?
            <Center>
              image not founded
            </Center>
          :
            <Image
              src={imgUrl}
              layout="fill"
              alt='img'
              style={{ objectFit: 'cover' }}
            />
          }
          
        </Box>
        <Stack>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {props.currentLang=='en'?props.data.titleEn:props.data.titleJp}
          </Heading>
          <Text color={'gray.500'} noOfLines={4} H={'400px'}>
            {props.currentLang=='en'?props.data.boxes[0].bodyEn:props.data.boxes[0].bodyJp}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{props.currentLang=='en'?`${props.data.author[0]} ${props.data.author[1]}`:`${props.data.author[1]} ${props.data.author[0]}`}</Text>
            <Text color={'gray.500'}>{props.currentLang=='en'?formatDatetime(props.data.posted_time)[1]:formatDatetime(props.data.posted_time)[0]}</Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}