'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Replace test data with your own


export default function ForSponsors(props) {

  const features = [
    {
      id: 0,
      title: props.currentLang=='en'?'advertising effect to the citizens of Beppu':'別府市民への宣伝効果',
      text: props.currentLang=='en'?'Korean Week is not only for Koreans and APU students, but also for Beppu citizens.In particular, the Korean Week grand show is very popular among Beppu citizens.':'コリアンウィークは韓国人やAPUの学生のみのイベントではなく、別府市民も大勢参加するイベントです。特に、コリアンウィークのグランドショーは別府市民にとって大人気です。',
    },
    {
      id: 1,
      title: props.currentLang=='en'?'contribution to local communities':'地域コミュニティへの貢献',
      text: props.currentLang=='en'?'The citizens of Beppu are looking forward to the event and their sponsorship will be a great contribution to the community.':'別府市民はこのイベントを楽しみにしており、スポンサーとしてのご支援は地域社会に対する素晴らしい貢献となります。',
    },
    {
      id: 2,
      title: props.currentLang=='en'?'Networking Opportunities':'ネットワーキングの機会',
      text: props.currentLang=='en'?'There are opportunities to interact with other business leaders and investors during the eventually.':'イベント中に他のビジネスリーダーや投資家との交流ができる機会があります。',
    },
    {
      id: 4,
      title: props.currentLang=='en'?'advertising effect to the citizens of Beppu':'ブランド認知度の向上',
      text: props.currentLang=='en'?'Sponsorship for Korean Week is a great opportunity to spread the sponsor\'s brand.Attract the attention of event participants and communities, and allow the sponsor\'s name to permeate.':'コリアンウィークへのスポンサーシップは、スポンサーのブランドを広める絶好の機会です。イベントの参加者や地域社会からの注目を集め、スポンサーの名前を浸透させることができます。',
    }
  ];
  return (
    <Box mt={'50px'} p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>{props.currentLang=='en'?'For our sponsors':'企業参加者の方々へ'}</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          {props.currentLang=='en'?'If you participate as a sponsor of Korean Week, you can convey the following values to ordinary participants.':'コリアンウィークにスポンサーとして参加すると以下の価値を一般参加者の方々にへお伝えすることができます。'}
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}