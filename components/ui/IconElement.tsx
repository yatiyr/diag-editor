import { Icon, Box } from "@chakra-ui/react";

interface IconElementProps {
    position       : any;
    margin         : any;
    display        : any;
    height         : any;
    width          : any;
    opacity        : any;
    visibility     : any;
    baseColor      : any;
    hoverColor     : any;
    activeColor    : any;
    icon           : any;
    onClickHandler : any;
    padding        : any;
}

const IconElement = (props : IconElementProps) => {

    return(
        <Box
            position={props.position}
            margin={props.margin}
            display={props.display}
            justifyContent="center"
            justifySelf="center"
            flexDirection="column"
            height={props.height ? props.height : "90%"}
            width={props.width ? props.width : "90%"}
            padding="0px 0px"
            zIndex="10000"
            opacity={props.opacity ? props.opacity : "1"}
            visibility={props.visibility ? props.visibility : "visible"}>
            <Icon
                padding={props.padding}
                height="90%"
                width="90%"
                alignSelf="center"
                justifySelf="center"
                onClick={props.onClickHandler}
                cursor="pointer"
                color={props.baseColor}
                _hover={{color: props.hoverColor}}
                _active={{color: props.activeColor}}
                as={props.icon}
                opacity={props.opacity ? props.opacity: "1"}
                transition="color .3s, fill .3s"/>
        </Box>
    );
}

export default IconElement;