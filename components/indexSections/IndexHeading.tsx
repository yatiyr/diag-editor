import { color, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import NextLink from 'next/link';

interface IndexHeadingProps {
    headingColor: any;
    subtitleColor: any;
    buttonTextColor: any;
    buttonColor: any;
    buttonTextHoverColor: any;
}

const IndexHeading = (props : IndexHeadingProps) => {

    return(
        <Flex
            mx = {["0rem", "0rem", "5rem", "7rem", "9rem", "11rem", "14rem"]}
            marginTop = "5rem"
            marginBottom = "2rem"
            flexDirection={["column", "column", "column", "column", "column", "column", "column" ]}
            justifyContent="space-around"
            alignContent="center"
            alignItems="center"
            height="100%">
                <Flex
                    flexDirection="column"
                    justifyContent="start"
                >
                    <Heading
                        marginBottom="3rem" 
                        textAlign="center"
                        fontSize={["6xl", "6xl", "6xl", "6xl", "7xl", "7xl", "8xl" ]}
                        color={props.headingColor}
                        fontWeight="medium"
                        >Diagram Editor
                    </Heading>
                    <Text 
                        textAlign="center"
                        fontSize={["3xl", "3xl", "3xl", "3xl", "3xl", "4xl", "5xl" ]}
                        marginBottom="2rem"
                        color={props.subtitleColor}
                        fontFamily="Inter"
                        fontWeight="light">
                        Define agent behaviors with diagram editor and generate c++ 
                        code for the simulation interface.
                    </Text>
                </Flex>
                <NextLink href='/editor' passHref>
                    <Flex 
                        width="18rem" 
                        height="6rem"
                        backgroundColor=""
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                        _hover={{color: props.buttonTextHoverColor, backgroundColor: props.buttonColor, transform: "translateY(-8px)"}}
                        transition="background-color .3s, transform .3s, color .3s"
                        border="1px"
                        borderColor={props.buttonColor}
                        color={props.buttonTextColor}
                        borderRadius="35px"
                        fontFamily="UbuntuMono"
                        cursor="pointer"
                        userSelect="none"
                        fontSize="2xl"> Start Editor</Flex>
                </NextLink>
        </Flex>
    )
}


export default IndexHeading;