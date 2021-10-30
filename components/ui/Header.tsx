import { Flex, Box, Text, useColorModeValue } from "@chakra-ui/react";
import DarkModeSwitch from "components/ui/DarkModeSwitch";
import {LogoIcon} from "styles/icons/customIcons";

interface HeaderProps {

    iconBaseColor   : any;
    iconHoverColor  : any;
    iconActiveColor : any;

    logoIconEdgeColor : any;
    logoIconNode1Color: any;
    logoIconNode2Color: any;

    backgroundColor : any;

    textColor: any;
}

const Header = (props : HeaderProps) => {
    return (
        <Flex 
            flexDirection="row"
            height="3rem"
            justifyContent="space-between"
            backgroundColor={props.backgroundColor}
            transition="background .3s"
            >
            <Flex
                flexDirection="row"
                height="100%"
                justifyContent="start"
                mx="2rem"
                >
                <Box padding=".5rem .5rem .5rem .5rem" minWidth="5rem">
                    <LogoIcon edgeColor={props.logoIconEdgeColor} node1Color={props.logoIconNode1Color} node2Color={props.logoIconNode2Color}/>
                </Box>
                <Flex mx="1rem" alignItems="center" minWidth="7rem">
                    <Text fontWeight="bold" transition="color .3s" color={props.textColor}>Diagram Editor</Text>
                </Flex>
            </Flex>
            <Flex flexDirection="column" mx="3rem" minWidth="5rem" justifyContent="center">
                <DarkModeSwitch
                    hoverColor={props.iconHoverColor}
                    baseColor={props.iconBaseColor}
                    activeColor={props.iconActiveColor}
                    display="flex"
                    padding="0.7rem 0.7rem 0.7rem 0.7rem"/>
            </Flex>
        </Flex>
    )
}

export default Header;