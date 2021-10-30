import type { NextPage } from 'next'

import BaseLayout from 'components/layouts/BaseLayout';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import IndexHeading from 'components/indexSections/IndexHeading';

const Home: NextPage = () => {

  const indexBackgroundColor = useColorModeValue("white", "gray.900");

  const indexHeading_headingColor    = useColorModeValue("gray.900", "gray.50");
  const indexHeading_subtitleColor   = useColorModeValue("gray.800", "gray.200");
  const indexHeading_buttonTextColor = useColorModeValue("black", "white");
  const indexHeading_buttonColor     = useColorModeValue("#f06", "#f06");
  const indexHeading_buttonTextHoverColor = useColorModeValue("white", "white");

  return (
    <>
      <BaseLayout>
        <Flex 
          flexDirection="column"
          height="100vh"
          backgroundColor={indexBackgroundColor}
          transition="background-color .3s, color .3s">
            <IndexHeading 
              headingColor={indexHeading_headingColor}
              subtitleColor={indexHeading_subtitleColor}
              buttonTextColor={indexHeading_buttonTextColor}
              buttonColor={indexHeading_buttonColor}
              buttonTextHoverColor={indexHeading_buttonTextHoverColor}/>
        </Flex>
      </BaseLayout>  
    </>
  )
}

export default Home
