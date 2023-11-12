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

// bodyEn, bodyJp, img, index, titleEn, titleJp

export default function BlogBox(props) {

  return (
   <Box py="10">
    {props.data.titleEn?
        <Heading as='h3' py='3'>
            {props.currentLang=='en'?props.data.titleEn:props.data.titleJp}
        </Heading>
    :null}
    {props.data.img?
        <Box maxW='100%'>
            <Image
                py='5'
                src={props.data.img}
                layout="responsive"
                alt='img'
                style={{ objectFit: 'cover', position:'relative' }}
                maxw='100%'
                sizes='100%'
                width='1200'
                height='800'
            />
        </Box> 
    :null}
    {props.data.bodyEn? 
        <Text py='5'>
            {props.currentLang=='en'?props.data.bodyEn:props.data.bodyJp}
        </Text>
    :null}
   </Box>
  )
}