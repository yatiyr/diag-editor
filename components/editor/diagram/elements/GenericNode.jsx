import React, {memo, useEffect} from 'react';
import { AccordionItem, Box, Flex, Text, Tooltip } from '@chakra-ui/react';
import { Handle, Position } from 'react-flow-renderer';
import { useState } from 'react';


const targetHandleStyle = {background: '#555'};

const GenericNode = ({data, isConnectible}) => {

    const minHeight = 30;
    const minWidth = 70;

    const [height, setHeight] = useState(minHeight);
    const [width, setWidth] = useState(minWidth);
    const padding = 0.625;


    useEffect(() => {

        if(data.targetPorts && data.sourcePorts) {
            const targetPortNum = data.targetPorts.length;
            const sourcePortNum = data.sourcePorts.length;
            const sourcePositions = data.sourcePositions;
            const targetPositions = data.targetPositions;
            
    
            const minHeight = 30;
            const minWidth = 70;
            
            if((targetPositions === Position.Left && sourcePositions === Position.Right) ||
               (targetPositions === Position.Right && sourcePositions === Position.Left)) {
    
                const maxPortNum = Math.max(targetPortNum, sourcePortNum);
                const newVal = maxPortNum * 20;
                if(maxPortNum * 20 <= 30)
                    setHeight(minHeight);
                else
                    setHeight(newVal);
            }
            else if((targetPositions === Position.Top && sourcePositions === Position.Bottom) ||
                    (targetPositions === Position.Bottom && sourcePositions == Position.Top)) {
    
                const maxPortNum = Math.max(targetPortNum, sourcePortNum);
                const newVal = maxPortNum * 20;
                if(maxPortNum * 20 <= 70)
                    setWidth(minWidth);
                else
                    setWidth(newVal);
            }
            else {
                if(targetPositions === Position.Top || targetPositions === Position.Bottom) {
                    const newWidth = targetPortNum * 20;
                    const newHeight = sourcePortNum * 20;
    
                    if(targetPortNum * 20 <= 70)
                        setWidth(minWidth);
                    else
                        setWidth(newWidth);
    
                    if(sourcePortNum * 20 <= 30)
                        setHeight(minHeight);
                    else
                        setHeight(newHeight);
                }
                else {
                    const newWidth = sourcePortNum * 20;
                    const newHeight = targetPortNum * 20;
    
                    if(sourcePortNum * 20 <= 70)
                        setWidth(minWidth);
                    else
                        setWidth(newWidth);
    
                    if(targetPortNum * 20 <= 30)
                        setHeight(minHeight);
                    else
                        setHeight(newHeight);
                }
            }
        }
        
    }, [data])

    const renderSourcePorts = (sourcePorts, sourcePositions) => {      

        if(sourcePorts) {

            const sourcePortNum = sourcePorts.length;              

            // axis 0 -> horizontal
            // axis 1 -> vertical
            var axis = 0;

            if(sourcePositions === Position.Left || sourcePositions === Position.Right) {
                axis = 1;
            }
            else if(sourcePositions === Position.Top || sourcePositions === Position.Bottom) {
                axis = 0;
            }

            return(
                sourcePorts.map((val, index) => {

                    const offset = {};

                    if(axis === 0) {
                        offset = {left: `${(index+1)*(width+20)/(sourcePortNum+1)}px`};
                    }
                    else if(axis === 1) {
                        offset = {top : `${35 + (index+1)*height/(sourcePortNum+1)}px`};
                    }                

                    const style = {...val.style, ...offset};

                    return (
                    <Handle type="source"
                            position={sourcePositions}
                            id={val.id}
                            style={style}
                            isConnectable={val.isConnectable}/>)
                })

            )

        }

    }

    const renderTargetPorts = (targetPorts, targetPositions) => {

        if(targetPorts)
        {
            const targetPortNum = targetPorts.length;

            // axis 0 -> horizontal
            // axis 1 -> vertical
            var axis = 0;

            if(targetPositions === Position.Left || targetPositions === Position.Right) {
                axis = 1;
            }
            else if(targetPositions === Position.Top || targetPositions === Position.Bottom) {
                axis = 0;
            }

            return(
                targetPorts.map((val, index) => {

                    const offset = {};

                    if(axis === 0) {
                        offset = {left: `${(index+1)*(width+20)/(targetPortNum+1)}px`};
                    }
                    else if(axis === 1) {
                        offset = {top : `${35 + (index+1)*height/(targetPortNum+1)}px`};
                    }                

                    const style = {...val.style, ...offset};

                    return (
                    <Handle type="target"
                            position={targetPositions}
                            id={val.id}
                            style={style}
                            isConnectable={val.isConnectable}/>)
                })

            )
        }
    }

    const renderSourcePortNames = (sourcePorts, sourcePositions) => {
        if(sourcePorts) {

        }
    }

    const renderTargetPortNames = (targetPorts, targetPositions) => {
        if(targetPorts) {
            
        }
    }

    return (
        <Flex
            flexDirection = "column"
            alignItems = "center"
            minWidth = {`${minWidth}px`}
            width = {`${width}px`}            
            minHeight = {`${minHeight}px`}>
            {renderTargetPorts(data.targetPorts, data.targetPositions)}
            <Tooltip fontSize="x-small" placement="top" label={`Heading adasd`} bg="white">
                <Text isTruncated height="20px" width={`${width}px`} fontSize="x-small" marginBottom="5px">Heading adasd</Text>
            </Tooltip>
            <Flex
                flexDirection= "row"
                height = {`${height}px`}
                fontSize= "0.35rem"
                justifyContent="space-between">
                <div className="targets" height="100%" width="1em" position="relative">
                    <Text position="absolute" top={`${35 + height/3 - 5}px`} right="5px" fontWeight="bold">output1</Text>
                    <Text position="absolute" top={`${35 + 2*height/3 - 5}px`} right="5px" fontWeight="bold">output1</Text>                    
                </div>
                <div className="sources" position="relative">
                    <Text position="absolute" top={`${35 + height/2 - 5}px`} left="5px" fontWeight="bold">input1</Text>
                </div>
            </Flex>
            {renderSourcePorts(data.sourcePorts, data.sourcePositions)}
        </Flex>
    )
}


export default memo(GenericNode);