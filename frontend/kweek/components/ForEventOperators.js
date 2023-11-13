'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'


const Testimonial = (props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      minW={295}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function ForEventOperators(props) {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>
            {props.currentLang=='en'?
              'Messages from Operators':
              '運営側からのメッセージ'
            }
          </Heading>
          <Text>
            {props.currentLang=='en'?
              'We will always do our best to spread Korean culture in the right way.':
              '我々は韓国の文化を正しいやり方で広げられるよう、いつも最善を尽くします。'
            }
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                {props.currentLang=='en'?
                  'thanks to team members':
                  'チームメンバーへの感謝'
                }
              </TestimonialHeading>
              <TestimonialText>
              {props.currentLang=='en'?
                  'I am participating in Korea Week 2023 as the team leader of the sponsor team. I was satisfied that I successfully played the role of middle manager as a bridge connecting team members and management positions. Although I am not good enough, I want to thank my team members for trusting and following me.':
                  'スポンサーチームのチーム長としてコリアウィーク2023に参加することになりました。 チームメンバーと管理職をつなぐ架け橋として、成功的に中間管理者の役割を果たしたようで満足でした。 足りない自分でも、信じてついてきてくれたチームメンバーに感謝したいです。'
                }
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                ''
              }
              name={'Jeong Jeong-gyun'}
              title={props.currentLang=='en'?
                'Leader of Sponsor Team':
                'スポンサーチームのリーダー'
              }
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                {props.currentLang=='en'?
                  'Business experience':
                  'ビジネス経験'
                }
              </TestimonialHeading>
              <TestimonialText>
                {props.currentLang=='en'?
                  'Working as a sponsor team, I did direct sales to companies. It wasn\'t easy, but the sense of accomplishment when I succeeded in sales was indescribably good. APU students, you should try it too.':
                  'スポンサーチームとして活動しながら、企業を相手に直接的な営業をしました。 簡単ではありませんでしたが、営業を成功したときの達成感は言葉では言い表せないほど良かったです。 APU在学生の皆さんも挑戦してみてください。'
                }
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '/images/songchan.PNG'
              }
              name={'LEE SEONGCHAN'}
              title={props.currentLang=='en'?
                'Member of Sponsor Team':
                'スポンサーチームのメンバー'
              }
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                {props.currentLang=='en'?
                  'Enhanced communication':
                  'コミュニケーションの強化'
                }
              </TestimonialHeading>
              <TestimonialText>
                {props.currentLang=='en'?
                  'We decided to create a web page so that participants, students, and business participants don\'t have any worries or complaints. Now that we\'re in a mobile environment, I thought making web pages was the best platform to convey our values.':
                  '参加者や学生、企業の参加者の皆様が不安や不満がないようにウェブページを作ることにしました。モバイル環境になった今、ウェブページを作るのが私たちの価値を伝えるのに最も優れたフラットフォームだと思ったからです。'
                }
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '/images/LEEDAHUN.jpeg'
              }
              name={'LEE DAHUN'}
              title={props.currentLang=='en'?
                'Website Creator':
                'ウェブサイト作成者'
              }
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}