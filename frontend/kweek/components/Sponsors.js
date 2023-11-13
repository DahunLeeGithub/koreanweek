import { Box, VStack, StackDivider, Heading } from '@chakra-ui/react'

const Sponsors = (props) => {
	return (
		<>
            <Heading textAlign={'center'} my={'70px'}>
                Sponsors
            </Heading>
			<VStack
            divider={<StackDivider borderColor={'gray.200'} />}
            spacing={4}
            align={'stretch'}
            >
                <Box maxW={'500px'} mx={'auto'} width={'100%'} textAlign={'center'} my={'30px'}>
                    <Box bgImage={'url("/images/umitamago-logo.png")'} bgSize={'contain'} minW={'300px'} minH={'100px'} bgRepeat={'no-repeat'} bgPos={'center'} width={'100%'} />
                </Box>
                <Box maxW={'500px'} mx={'auto'} width={'100%'} textAlign={'center'} my={'30px'}>
                    <Box bgImage={'url("/images/unt-logo.jpeg")'} bgSize={'contain'} minW={'300px'} minH={'100px'} width={'100%'} bgRepeat={'no-repeat'} bgPos={'center'} />
                </Box>
                <Box maxW={'500px'} mx={'auto'} width={'100%'} textAlign={'center'} my={'30px'}>
                    <Box bgImage={'url("/images/untfitness-logo.png")'} bgSize={'contain'} minW={'300px'} minH={'100px'} width={'100%'} bgRepeat={'no-repeat'} bgPos={'center'} />
                </Box>
                <Box maxW={'500px'} mx={'auto'} width={'100%'} textAlign={'center'} my={'30px'}>
                    <Box bgImage={'url("/images/moin-logo.png")'} bgSize={'contain'} minW={'300px'} minH={'100px'} width={'100%'} bgRepeat={'no-repeat'} bgPos={'center'} />
                </Box><Box maxW={'500px'} mx={'auto'} width={'100%'} textAlign={'center'} my={'30px'}>
                    <Box bgImage={'url("/images/bokko-logo.jpeg")'} bgSize={'contain'} minW={'300px'} minH={'100px'} width={'100%'} bgRepeat={'no-repeat'} bgPos={'center'} />
                </Box><Box maxW={'500px'} mx={'auto'} width={'100%'} textAlign={'center'} my={'30px'}>
                    <Box bgImage={'url("/images/chingu-logo.png")'} bgSize={'contain'} minW={'300px'} minH={'100px'} width={'100%'} bgRepeat={'no-repeat'} bgPos={'center'} />
                </Box><Box maxW={'500px'} mx={'auto'} width={'100%'} textAlign={'center'} my={'30px'}>
                    <Box bgImage={'url("/images/ton-logo.jpeg")'} bgSize={'contain'} minW={'300px'} minH={'100px'} width={'100%'} bgRepeat={'no-repeat'} bgPos={'center'} />
                </Box>
            </VStack>
		</>
		
	);
};

export default Sponsors;