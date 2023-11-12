import { Box, Flex, Image, Center, Link, Heading } from "@chakra-ui/react";
import Hero from '../components/Hero'
import ForParticipants from '../components/ForParticipants'
import ForEventOperators from '../components/ForEventOperators'
import ForSponsors from "../components/ForSponsors";
import Sponsors from "../components/Sponsors";
const Home = (props) => {
	return (
		<>
			<Hero currentLang={props.currentLang}/>
			<Box>
				{/* Main Content Container */}
				<Box maxW="1200px" mx="auto" p={8}>
					{/* 내용 추가 */}
					<ForParticipants currentLang={props.currentLang} />
					<ForEventOperators currentLang={props.currentLang} />
					<ForSponsors currentLang={props.currentLang} />
					<Sponsors />
				</Box>
			</Box>
		</>
		
	);
};

export default Home;
