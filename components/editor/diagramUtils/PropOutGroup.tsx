import { Flex, useColorModeValue } from "@chakra-ui/react";

import Properties from "components/editor/diagramUtils/Properties";
import Output from "components/editor/diagramUtils/Output";

// TODO: Will be implemented soon
const PropOutGroup = () => {

    const propOutGroupBorderColor = useColorModeValue("gray.300", "#ff006685")
    return(
        <Flex
            flexDirection="column"
            height="100%"
            width="100%"
            borderRight="1px"
            borderRightColor={propOutGroupBorderColor}>

        </Flex>
    )
}

export default PropOutGroup;

