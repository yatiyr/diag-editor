import { Flex, useColorModeValue, Box } from "@chakra-ui/react";
import {ReactTerminalStateless} from 'react-terminal-component';
import {
    EmulatorState, OutputFactory, CommandMapping,
    EnvironmentVariables, FileSystem, History,
    Outputs, defaultCommandMapping
} from 'javascript-terminal';

import { useState, useEffect } from "react";
import Terminal from "./terminal/Terminal";

// TODO: Will be implemented soon
const Console = () => {

    const [inputStr, setInputStr] = useState("");
    const [emulatorState, setEmulatorState] = useState(EmulatorState.createEmpty());

    const colorMode = useColorModeValue("light", "dark");

    const selectionTextColor = useColorModeValue("gray.600", "gray.500");
    const selectionTextHoverColor = useColorModeValue("black", "white");
    const selectionSelectedTextColor = useColorModeValue("black", "white");    

    useEffect(() => {

        const state = EmulatorState.createEmpty();
        const outputs = state.getOutputs();

        const newOutputs = Outputs.addRecord(
            outputs, OutputFactory.makeTextOutput(
                `Console has been initialized.\nIt will expect some commands\nfrom the user and perform\noperations such as running the\ndiagram or generating code...\n`
            )
        );

        const initialState = state.setOutputs(newOutputs);
        setEmulatorState(initialState);

        console.log(initialState.getOutputs());

    },[]);

    return(
        <Flex
            flexDirection="column"
            height="100%"
            width="100%">
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
                        marginRight="1.2rem"
                        fontFamily="Inter"
                        fontSize="xx-small"
                        position="relative"
                        color={selectionSelectedTextColor}
                        _hover={{color: selectionTextHoverColor}}
                        transition="color .3s"
                        _before={{content: `""`,
                                 position: "absolute",
                                 bg: "#ff006685",
                                 width: "100%",
                                 height: "10%",
                                 transform: "translateY(15px)"}}>
                        CONSOLE
                    </Box>                   
            </Flex>
            <Flex
                flexDirection="column"
                width="100%"
                height="100%"
                padding="0.5rem 0rem 0rem 1rem"
                position="relative"
                className={colorMode}>
                <Terminal 
                    emulatorState={emulatorState}
                    setEmulatorState={setEmulatorState}
                    inputStr={inputStr}
                    setInputStr={setInputStr}
                    acceptInput={true}
                />                        
            </Flex>                            
        </Flex>
    )
}


export default Console;