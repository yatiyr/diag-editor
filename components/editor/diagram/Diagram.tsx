import { Flex, useColorModeValue } from "@chakra-ui/react";


const Diagram = () => {

    const diagramBackgroundColor = useColorModeValue("white","gray.900");
    const diagramBorderColor     = useColorModeValue("gray.600", "#f06");

    return(
        <>
            {/* This is the container for diagram component*/}        
            <Flex
                position="relative"
                backgroundColor={diagramBackgroundColor}
                borderBottom="1px"
                borderBottomColor={diagramBorderColor}
                flexDirection="column"
                width="100%"
                height="100%"
                transition="color .3s, background-color .3s">
                {/* Will be implemented */}
            </Flex>
        </>
    )
}


export default Diagram;