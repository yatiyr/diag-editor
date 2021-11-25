import React, {memo} from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Handle, Position } from 'react-flow-renderer';
import { useState } from 'react';


const targetHandleStyle = {background: '#555'};

const GenericNode = ({data, isConnectible}) => {
    const [height, setHeight] = useState(60);
    const padding = 0.625;

    const renderSourcePorts = () => {
        return(
            data.sourcePorts.map((val) => (
                <Handle type="source"
                        position={Position.Right}
                        id={val.id}
                        style={val.style}
                        isConnectable={val.isCOnnectable}/>
            ))
        )
    }

    const renderTargetPorts = () => {
        return(
            data.targetPorts.map((val) => (
                <Handle type="target"
                        position={Position.Left}
                        id={val.id}
                        style={val.style}
                        isConnectable={val.isConnectable}/>
            ))
        )
    }

    const renderSourcePortNames = () => {

    }

    const renderTargetPortNames = () => {

    }

    return (
        <Flex
            flexDirection = "column"
            alignItems = "center"
            minWidth = "70px"
            minHeight = "50px">
            {renderTargetPorts()}
            <Text height="20px" fontSize="sm" marginBottom="5px">Heading adasd</Text>
            <Flex
                flexDirection= "row"
                height = {`${height}px`}
                width = "100%"
                fontSize= "x-small"
                justifyContent="space-between">
                <div fontSize="x-small" className="targets" height="100%" width="1em" position="relative">
                    <Text position="absolute" top={`${35}px`} right="5px" fontWeight="bold">output1</Text>
                    <Text position="absolute" top={`${70}px`} right="5px" fontWeight="bold">output1</Text>                    
                </div>
                <div fontSize="x-small" className="sources" position="relative">
                    <Text position="absolute" top={`${35 + height/2 - 7}px`} left="5px" fontWeight="bold">input1</Text>
                </div>
            </Flex>
            {renderSourcePorts()}
        </Flex>
    )
}


export default memo(GenericNode);