import { ChakraProvider } from "@chakra-ui/react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react';



function MyApp({ Component, pageProps }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const handleLanguageChange = () => {
    if(currentLanguage=='jp'){
      setCurrentLanguage('en');
    }else{
      setCurrentLanguage('jp');
    }
  };


  return (
    <ChakraProvider>
      <Header langChange={handleLanguageChange} currentLang={currentLanguage} />
      <Component {...pageProps} currentLang={currentLanguage} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
