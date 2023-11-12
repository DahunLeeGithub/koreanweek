import { Box, Flex, Image, Center, Link, Heading, Spacer } from "@chakra-ui/react";
import api from "../../components/apisetting";
import LoadingSpinner from "@/components/LoadingSpinner";
import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";

const Blog = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(()=>{
    api.get('list/', {
      headers: {
        'Content-Type': 'application/json',
      }})
  .then(response => {
    // 성공적으로 데이터를 가져왔을 때의 처리
    console.log(response.data);
    setData(response.data);
    setLoading(false);
  })
  .catch(error => {
    // 요청이 실패했을 때의 처리
    console.log(error);
    setData('Loading false')
    setLoading(false);
  });
  },[])
  
	return (
		<>
			<Box maxW="1200px" mx="auto" p={8}>
        {loading?
          <LoadingSpinner />
        :
          data=='Loading false'?
            <Box> Loading False. try again. </Box>
          :
            <Flex
              flexWrap='wrap'
              justifyContent={'space-evenly'}
            >
              {
                data.map((element, i) => (

                    
                    <Link key={element.id} href={`blog/${element.id}`}>
                      <BlogCard data={element} currentLang={props.currentLang} />
                    </Link>
                    

                ))
              }
            </Flex>
        }
      </Box>
		</>
		
	);
};

export default Blog;
