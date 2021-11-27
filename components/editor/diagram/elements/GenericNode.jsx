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
                const newVal = maxPortNum * 25;

                setWidth(() => minWidth);

                if(maxPortNum * 25 <= 30)
                    setHeight(() => minHeight);
                else
                    setHeight(() => newVal);
            }
            else if((targetPositions === Position.Top && sourcePositions === Position.Bottom) ||
                    (targetPositions === Position.Bottom && sourcePositions == Position.Top)) {
    
                const maxPortNum = Math.max(targetPortNum, sourcePortNum);
                const newVal = maxPortNum * 25;

                setHeight(() => minHeight);

                if(maxPortNum * 25 <= 70)
                    setWidth(() => minWidth);
                else
                    setWidth(() => newVal);
            }
            else {
                if(targetPositions === Position.Top || targetPositions === Position.Bottom) {
                    const newWidth = targetPortNum * 20;
                    const newHeight = sourcePortNum * 20;
    
                    if(targetPortNum * 25 <= 70)
                        setWidth(() => minWidth);
                    else
                        setWidth(() => newWidth);
    
                    if(sourcePortNum * 25 <= 30)
                        setHeight(() => minHeight);
                    else
                        setHeight(() => newHeight);
                }
                else {
                    const newWidth = sourcePortNum * 40;
                    const newHeight = targetPortNum * 40;
    
                    if(sourcePortNum * 25 <= 70)
                        setWidth(() => minWidth);
                    else
                        setWidth(() => newWidth);
    
                    if(targetPortNum * 25 <= 30)
                        setHeight(() => minHeight);
                    else
                        setHeight(() =>newHeight);
                }
            }
        }
        
    }, [data, width, height])

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
                        offset = {top : `${10 + (index+1)*height/(sourcePortNum+1)}px`};
                    }                

                    const style = {...val.style, ...offset};

                    return (
                    <Handle type="source"
                            position={sourcePositions}
                            id={val.id}
                            key={val.id}
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
                            key={val.id}
                            style={style}
                            isConnectable={val.isConnectable}/>)
                })

            )
        }
    }

    const renderPortNames = (ports, positions) => {

        if(ports) {
            const sourcePortNum = ports.length;

            var axis1 = 0;
            var axis2 = 0;
            

            if(positions === Position.Left) {
                axis1 = 0;
                axis2 = 0;
            }
            else if(positions === Position.Right) {
                axis1 = 0;
                axis2 = 1;
            }
            else if(positions === Position.Top) {
                axis1 = 1;
                axis2 = 0;
            }
            else if(positions === Position.Bottom) {
                axis1 = 1;
                axis2 = 1;
            }

            return (
                ports.map((val, index) => {
                    if(axis1 === 0 && axis2 === 0) {

                        return(
                            <Tooltip fontSize="x-small" placement="right" label={`${val.name}`} bg="white">
                                <Text 
                                    isTruncated 
                                    width={`${15}px`}
                                    fontSize="0.4rem"
                                    position="absolute"
                                    top={`${35 + (index+1)*height/(sourcePortNum+1)}px`}
                                    left="5px">
                                    {val.name}
                                </Text>
                            </Tooltip>
                        )
                    }
                    else if(axis1 === 0 && axis2 === 1) {

                        return(
                            <Tooltip fontSize="x-small" placement="right" label={`${val.name}`} bg="white">
                                <Text 
                                    isTruncated 
                                    width={`${15}px`}
                                    fontSize="0.4rem"
                                    position="absolute"
                                    top={`${35 + (index+1)*height/(sourcePortNum+1)}px`}
                                    right="5px">
                                    {val.name}
                                </Text>
                            </Tooltip>
                        )
                    }
                    else if(axis1 === 1 && axis2 === 0) {
                        return(
                            <Tooltip fontSize="x-small" placement="bottom" label={`${val.name}`} bg="white">
                                <Text 
                                    isTruncated 
                                    width={`${15}px`}
                                    fontSize="0.4rem"
                                    position="absolute"
                                    top="5px"
                                    left={`${(index+1)*(width+20)/(sourcePortNum+1) - 7}px`}>
                                    {val.name}
                                </Text>
                            </Tooltip>
                        )
                    }
                    else if(axis1 === 1 && axis2 === 1) {
                        return(
                            <Tooltip fontSize="x-small" placement="top" label={`${val.name}`} bg="white">
                                <Text 
                                    isTruncated 
                                    width={`${15}px`}
                                    fontSize="0.4rem"
                                    position="absolute"
                                    bottom="5px"
                                    left={`${(index+1)*(width+20)/(sourcePortNum+1) - 7}px`}>
                                    {val.name}
                                </Text>
                            </Tooltip>
                        )
                    }

                })
            )

        }
    }

    return (
        <Flex
            flexDirection = "column"
            alignItems = "center"
            justifyContent="center"
            justifyItems="center"
            minWidth = {`${minWidth}px`}
            width = {`${width}px`}            
            minHeight = {`${minHeight}px`}
            height = {`${height}px`}>
            {renderTargetPorts(data.targetPorts, data.targetPositions)}
            <Tooltip fontSize="x-small" placement="top" label={`Heading adasd`} bg="white">
                <Text isTruncated height="20px" width={`${width}px`} fontSize="x-small" textAlign="center">Heading adasd</Text>
            </Tooltip>
            <Flex
                flexDirection= "row"
                height="0px"
                fontSize= "0.40rem"
                fontFamily="Inconsolata"
                justifyContent="space-between">
                <div className="sources" height="100%" width="1em" position="relative">
                    {renderPortNames(data.sourcePorts, data.sourcePositions)}                   
                </div>
                <div className="targets" position="relative">
                    {renderPortNames(data.targetPorts, data.targetPositions)}
                </div>
            </Flex>
            {renderSourcePorts(data.sourcePorts, data.sourcePositions)}
        </Flex>
    )
}


export default memo(GenericNode);