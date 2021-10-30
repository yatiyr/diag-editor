import type { NextPage } from 'next'

import BaseLayout from 'components/layouts/BaseLayout';
import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';


const Home: NextPage = () => {

  const indexBackgroundColor = useColorModeValue("gray.700", "gray.200");
  const indexHeadingColor    = useColorModeValue("gray.200", "gray.800");
  return (
    <>
      <BaseLayout>
        <Flex 
          flexDirection="column"
          height="100vh"
          backgroundColor={indexBackgroundColor}>
            <Heading fontFamily="Ubuntu" color={indexHeadingColor}>Eren Dere</Heading>
        </Flex>
      </BaseLayout>  
    </>
  )
}

export default Home
