import { Flex, Box, Text } from "@chakra-ui/react";
import DarkModeSwitch from "components/ui/DarkModeSwitch";
import {LogoIcon} from "styles/icons/customIcons";

import NextLink from 'next/link';

interface HeaderProps {

    iconBaseColor   : any;
    iconHoverColor  : any;
    iconActiveColor : any;

    logoIconEdgeColor : any;
    logoIconNode1Color: any;
    logoIconNode2Color: any;

    backgroundColor : any;

    textColor: any;

    borderBottomColor: any;
}

const Header = (props : HeaderProps) => {

    return (
        <Flex 
            flexDirection="row"
            height="3rem"
            justifyContent="space-between"
            backgroundColor={props.backgroundColor}
            transition="background .3s"
            borderBottom="1px"
            borderBottomColor={props.borderBottomColor}
            >
            <Flex
                flexDirection="row"
                height="100%"
                justifyContent="start"
                marginLeft="1rem"
                >
                <NextLink href="/" passHref>                      
                    <Box padding=".5rem .5rem .5rem .5rem" minWidth="5rem" cursor="pointer">
                        <LogoIcon edgeColor={props.logoIconEdgeColor} node1Color={props.logoIconNode1Color} node2Color={props.logoIconNode2Color}/>
                    </Box>
                </NextLink>                      
                <NextLink href="/" passHref>                
                    <Flex mx="1rem" alignItems="center" minWidth="7rem" userSelect="none" cursor="pointer">
                            <Text fontFamily="UbuntuMono" fontWeight="light" transition="color .3s" color={props.textColor}>Diagram Editor</Text>                                       
                    </Flex>
                </NextLink>                     
            </Flex>
            <Flex flexDirection="column" mx="2rem" minWidth="5rem" justifyContent="center" userSelect="none">
                <DarkModeSwitch
                    hoverColor={props.iconHoverColor}
                    baseColor={props.iconBaseColor}
                    activeColor={props.iconActiveColor}
                    display="flex"
                    padding="0.6rem 0.6rem 0.6rem 0.6rem"/>
            </Flex>
        </Flex>
    )
}

export default Header;