import { Flex, useColorModeValue } from "@chakra-ui/react";
import Flow from "./flow/Flow";


const Diagram = () => {

    const diagramBackgroundColor = useColorModeValue("white","gray.900");
    const diagramBorderColor     = useColorModeValue("gray.50", "#ff00665d");

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
                <Flow/>
            </Flex>
        </>
    )
}


export default Diagram;