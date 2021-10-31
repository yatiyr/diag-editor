import { Flex, NumberInputStepper, useColorModeValue } from "@chakra-ui/react";
import {ReactTerminalStateless} from 'react-terminal-component';
import {
    EmulatorState, OutputFactory, CommandMapping,
    EnvironmentVariables, FileSystem, History,
    Outputs, defaultCommandMapping
  } from 'javascript-terminal';

import { useState } from "react";

interface TerminalProps {
    emulatorState: any;
    inputStr: any;
    setInputStr: any;
    setEmulatorState: any;
    acceptInput: any;
}

// TODO: Will be implemented soon
const Terminal = (props: TerminalProps) => {


    const prompSymbolColor = useColorModeValue("#457000", "#9dff00");
    const commandColor     = useColorModeValue("#000000","#ffffff")
    const outputColor      = useColorModeValue("#424242", "#b5b5b5");
    const errorOutputColor = useColorModeValue("#ff0000", "#ff6161")

    return(

        <ReactTerminalStateless
            emulatorState={props.emulatorState}
            inputStr={props.inputStr}
            onInputChange={(inputStr) => props.setInputStr(inputStr)}
            onStateChange={(emulatorState) => {
                props.setEmulatorState(emulatorState);
                props.setInputStr("");
            }}
            acceptInput={props.acceptInput}
            promptSymbol='>'
            theme={{
                background: `#ffffff00`,
                promptSymbolColor: `${prompSymbolColor}`,
                commandColor: `${commandColor}`,
                outputColor: `${outputColor}`,
                errorOutputColor: `${errorOutputColor}`,
                fontSize: '0.8rem',
                spacing: '0%',
                fontFamily: 'UbuntuMono',
                width: '95%',
                height: '95%'
            }}            
        />                         
    )
}


export default Terminal;