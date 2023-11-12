import { useRouter } from 'next/router';
import api from "../../components/apisetting";
import BlogBox from '@/components/BlogBox';
import { useEffect, useState } from "react";
import { Box, Flex, Image, Center, Link, Heading, Divider } from "@chakra-ui/react";

export default function BlogPost(props) {
  const router = useRouter();
  const { pk } = router.query;

  const [data, setData] = useState(null);
  useEffect(() => {
    if (pk) {
      api.get(`detail/${pk}`)
        .then(response => {
          console.log(response.data)
          response.data.boxes.sort((a, b)=> a.index - b.index)
          setData(response.data);
        })
        .catch(error => {
          setData('Loading false');
        });
    }
  }, [pk]); // pk를 dependency로 추가

  return (
    <>{
    data?
      <Box maxW="1200px" mx="auto" minH='100vh' p={8}>
        <Heading>
            {props.currentLang=='en'?data.titleEn:data.titleJp}
        </Heading>
        <Divider colorScheme="linkedin" />
        {data.boxes.map((box, i)=>{
          return(
            <BlogBox data={box} key={i} currentLang={props.currentLang}/>
          )
        })}
      </Box>
    :
      <></>
    }
    </>
  );
}
