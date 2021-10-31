import { Flex, useColorModeValue } from "@chakra-ui/react"

const Sidebar = () => {

    const sidebarBackgroundColor = useColorModeValue("white", "gray.900");
    const sidebarBorderColor     = useColorModeValue("gray.300", "#ff006685");

    return(
        <Flex
            flexDirection="column"
            height="100%"
            width="15rem"
            minWidth="15rem"
            backgroundColor={sidebarBackgroundColor}
            borderRight="1px"
            borderRightColor={sidebarBorderColor}
            transition="color .3s, background-color .3s"
            display={["none", "none", "none", "flex", "flex","flex", "flex"]}>
            {/* TODO: Will be implemented */}
        </Flex>
    )
}

export default Sidebar;