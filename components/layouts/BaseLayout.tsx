import { Flex, useColorModeValue } from '@chakra-ui/react';
import Header from 'components/ui/Header';
import Head from 'next/head'

interface BaseLayoutProps {
    children: JSX.Element;
};

const BaseLayout = (props : BaseLayoutProps) => {
    const {children}      = props;
    const iconBaseColor   = useColorModeValue("gray.900", "gray.100");
    const iconHoverColor  = useColorModeValue("black", "white");
    const iconActiveColor = useColorModeValue("black", "white");
    
    const backgroundColor = useColorModeValue("gray.50", "gray.900");
    const headerBackgroundColor = useColorModeValue("gray.50", "gray.900");
    const headerBorderBottomColor = useColorModeValue("gray.600", "#f06")
    const headerTextColor = useColorModeValue("gray.900", "gray.50");

    const logoIconEdgeColor  = useColorModeValue("#f06", "#f06");
    const logoIconNode1Color = useColorModeValue("#241c22", "#fff");
    const logoIconNode2Color = useColorModeValue("#2a7fff", "#2a7fff");


    return (
        <>
            <Head>
                <title>Diagram Editor</title>
                <meta property="og:image" content=""/>
            </Head>
            <Flex
                direction="column"
                minHeight="500px"
                height="100vh"
                width="100%"
                transition="background-color .3s, opacity .5s"                
                backgroundColor={backgroundColor}
            >
                <Header
                    iconBaseColor={iconBaseColor}
                    iconHoverColor={iconHoverColor}
                    iconActiveColor={iconActiveColor}
                    backgroundColor={headerBackgroundColor}
                    borderBottomColor={headerBorderBottomColor}
                    textColor={headerTextColor}
                    logoIconEdgeColor={logoIconEdgeColor}
                    logoIconNode1Color={logoIconNode1Color}
                    logoIconNode2Color={logoIconNode2Color}
                    />
                {children}
            </Flex>
        </>
    )
}

export default BaseLayout;