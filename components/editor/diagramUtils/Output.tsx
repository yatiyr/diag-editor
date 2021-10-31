import { Flex, Box } from "@chakra-ui/react";
import Terminal from "components/editor/diagramUtils/terminal/Terminal";
import {useState, useEffect} from "react";
import {
    EmulatorState, OutputFactory, CommandMapping,
    EnvironmentVariables, FileSystem, History,
    Outputs, defaultCommandMapping
  } from 'javascript-terminal';

interface OutputProps {
    display: any;
}

// TODO: Will be implemented soon
const Output = (props : OutputProps) => {

    const [emulatorState, setEmulatorState] = useState(EmulatorState.createEmpty());
    const [inputStr, setInputStr] = useState("");

    useEffect(() => {

        const state = EmulatorState.createEmpty();
        const outputs = state.getOutputs();

        const newOutputs = Outputs.addRecord(
            outputs, OutputFactory.makeTextOutput(
                `Outputs are shown here...\n\nFor example:\n\nOutput1....\n\nOutput2...`
            )
        );

        const initialState = state.setOutputs(newOutputs);
        setEmulatorState(initialState);

        console.log(initialState.getOutputs());

    },[]);

    return(
        <Box
            display={props.display}
            height="100%"
            width="100%"
            position="relative">
                <Terminal 
                    emulatorState={emulatorState}
                    setEmulatorState={setEmulatorState}
                    inputStr={inputStr}
                    setInputStr={setInputStr}
                    acceptInput={false}
                />  
        </Box>
    )
}

export default Output;