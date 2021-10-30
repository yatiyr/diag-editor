import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import IconElement from "components/ui/IconElement";
import {FaSun, FaMoon} from "react-icons/fa";

interface DarkModeSwitchProps {
    display?     : any | undefined;
    margin?     : any | undefined;
    baseColor   : any;
    hoverColor  : any;
    activeColor : any;
    height?      : any | undefined;
    width?       : any | undefined;
    position?    : any | undefined;
    opacity?     : any | undefined;
    visibility?  : any | undefined;
    padding?     : any | undefined;
}

const DarkModeSwitch = (props : DarkModeSwitchProps) => {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <IconElement 
            display={props.display}
            margin={props.margin}
            icon={colorMode === 'dark' ? FaSun : FaMoon}
            onClickHandler={toggleColorMode}
            baseColor={props.baseColor}
            hoverColor={props.hoverColor}
            activeColor={props.activeColor}
            height={props.height}
            width={props.width}
            position={props.position}
            opacity={props.opacity}
            visibility={props.visibility}
            padding={props.padding}
        />
    );
}

export default DarkModeSwitch;