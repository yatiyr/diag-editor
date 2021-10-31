import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

import { useState } from "react";

import Properties from "components/editor/diagramUtils/Properties";
import Output from "components/editor/diagramUtils/Output";

// TODO: Will be implemented soon
const PropOutGroup = () => {

    const [activeComponent, setActiveComponent] = useState("output");

    const selectionTextColor = useColorModeValue("gray.600", "gray.500");
    const selectionTextHoverColor = useColorModeValue("black", "white");
    const selectionSelectedTextColor = useColorModeValue("black", "white");

    const makePropertiesActive = () => {
        setActiveComponent("properties");
    }

    const makeOutputActive = () => {
        setActiveComponent("output");
    }

    const propOutGroupBorderColor = useColorModeValue("gray.50", "#ff00662f")
    return(
        <Flex
            flexDirection="column"
            height="100%"
            width="100%"
            borderRight="1px"
            borderRightColor={propOutGroupBorderColor}>
                <Flex
                    flexDirection="row"
                    width="100%"
                    height="2rem"
                    padding="0.3rem 0.3rem 0.3rem 1rem"
                    alignItems="center"
                    justifyContent="flex-start"
                    userSelect="none">
                    <Box 
                        className="PropOutGroupSelection"
                        cursor="pointer"
                        onClick={makeOutputActive}
                        marginRight="1.2rem"
                        fontFamily="Inter"
                        fontSize="xx-small"
                        position="relative"
                        color={activeComponent === 'output' ? selectionSelectedTextColor : selectionTextColor}
                        _hover={{color: selectionTextHoverColor}}
                        transition="color .3s"
                        _before={{content: `""`,
                                 position: "absolute",
                                 bg: "#ff006685",
                                 width: "100%",
                                 height: `${activeComponent === 'output' ? '10%' : '0'}`,
                                 transform: "translateY(15px)"}}>
                        OUTPUT
                    </Box>
                    <Box
                        className="PropOutGroupSelection"
                        cursor="pointer"
                        onClick={makePropertiesActive}
                        marginLeft="1.2rem"
                        fontFamily="Inter"
                        fontSize="xx-small"
                        color={activeComponent === 'properties' ? selectionSelectedTextColor : selectionTextColor}
                        _hover={{color: selectionTextHoverColor}}
                        transition="color .3s"                                                
                        position="relative"
                        _before={{content: `""`,
                                 position: "absolute",
                                 bg: "#ff006685",
                                 width: "100%",
                                 height: `${activeComponent === 'properties' ? '10%' : '0'}`,
                                 transform: "translateY(15px)"}}                        >
                        PROPERTIES
                    </Box>
                </Flex>
                <Flex
                    flexDirection="column"
                    width="100%"
                    height="100%"
                    padding="0.5rem 0rem 0rem 1rem">
                    <Output display={activeComponent === 'output' ? 'flex' : 'none'}/>
                    <Properties display={activeComponent === 'properties' ? 'flex' : 'none'}/>
                </Flex>
        </Flex>
    )
}

export default PropOutGroup;

