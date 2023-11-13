import { Box, Flex, Image, Text, UnorderedList, ListItem, useColorModeValue, Heading, Divider } from "@chakra-ui/react";

const Contact = (props) => {
	return (
		<>
			<Box maxW="1200px" minH='100vh' mx="auto" p={8}>
				<Heading textAlign='center' my='5'>{props.currentLang=='en'?'Location':'場所'}</Heading>
				<Flex justify='center' p='3'>
					<Box
						boxSize='auto'
						borderWidth='5px'
						borderRadius='md'
						boxShadow='md'
					>
						<Image
							src='/images/RitsumeikanAPU.jpeg'
							alt="school picture"
						/>
					</Box>
				</Flex>
				<Heading textAlign='center' fontSize='lg' marginTop={5}>{props.currentLang=='en'?'Ritsumeikan APU':'立命館アジア太平洋大学'}</Heading>
				<Text textAlign='center'>{props.currentLang=='en'?'address: 1-1 Jumonjibaru, Beppu, Oita':'住所：大分県別府市十文字原1-1'}</Text>
				<Divider py='5'/>
				<Box bg={useColorModeValue('gray.100', 'gray.700')} py={10} >
					<Heading textAlign='center' my='5'>{props.currentLang=='en'?'About this website':'このサイトについて'}</Heading>
					<Heading textAlign='center' fontSize='lg'>{props.currentLang=='en'?'Used library, framework and technology':'使用したライブラリ・フレームワーク・技術'}</Heading>
					<Flex justify='center' p='3'>
						<Box
							boxSize='auto'
							marginTop='10'
						>
							<UnorderedList
								spacing='30'
								listStyleType='none'
							>
								<ListItem>
								<Flex justify='center' align="center" p='3'>
									<Image
										height='150'
										maxW='400'
										w={'100%'}
										objectFit='contain'
										src='/images/django-logo.png'
										alt="django logo"
									/>
									</Flex>
								</ListItem>
								<ListItem>
								<Flex justify='center' align="center" p='3'>
									<Image
										height='150'
										maxW='400'
										w={'100%'}
										objectFit='contain'
										src='/images/drf-logo.png'
										alt="django rest framework logo"
									/>
									</Flex>
								</ListItem>
								<ListItem>
								<Flex justify='center' align="center" p='3'>
									<Image
										height='150'
										maxW='400'
										w={'100%'}
										objectFit='contain'
										src='/images/react-logo.png'
										alt="react logo"
									/>
									</Flex>
								</ListItem>
								<ListItem>
								<Flex justify='center' align="center" p='3'>
									<Image
										height='150'
										maxW='400'
										w={'100%'}
										objectFit='contain'
										src='/images/Nextjs-logo.png'
										alt="Nextjs logo"
									/>
									</Flex>
								</ListItem>
								<ListItem>
								<Flex justify='center' align="center" p='3'>
									<Image
										height='150'
										maxW='400'
										w={'100%'}
										objectFit='contain'
										src='/images/chakraui-logo.png'
										alt="chakraui logo"
									/>
									</Flex>
								</ListItem>
								<ListItem>
								<Flex justify='center' align="center" p='3'>
									<Image
										height='150'
										maxW='400'
										w={'100%'}
										objectFit='contain'
										src='/images/aws-logo.png'
										alt="aws logo"
									/>
									</Flex>
								</ListItem>
							</UnorderedList>
							
						</Box>
					</Flex>
				</Box>
				<Divider py='5'/>
				<Heading textAlign='center' my='5'>{props.currentLang=='en'?'About Editor':'作成者について'}</Heading>
				<Heading textAlign='center' fontSize='lg' marginTop={5}>{props.currentLang=='en'?'E-mail':'Eメール'}</Heading>
				<Text textAlign='center'>Dahunlee1704@gmail.com</Text>
				<Heading textAlign='center' fontSize='lg' marginTop={5}>{props.currentLang=='en'?'educational background':'学歴'}</Heading>
				<Text textAlign='center'>{props.currentLang=='en'?'Ritsumeikan APU':'立命館アジア太平洋大学'}</Text>
				<Text textAlign='center'>{props.currentLang=='en'?'College of International Management':'国際経営学部'}</Text>
				<Text textAlign='center'>{props.currentLang=='en'?'Accounting and Finance':'会計・ファイナンス'}</Text>
				<Text textAlign='center'>{props.currentLang=='en'?'Expected to graduate in March 2024':'2024年3月卒業予定'}</Text>
			</Box>
		</>
		
	);
};

export default Contact;
