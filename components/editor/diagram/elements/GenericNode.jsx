import React, {memo, useEffect} from 'react';
import { AccordionItem, Box, Flex, Text, Tooltip } from '@chakra-ui/react';
import { Handle, Position } from 'react-flow-renderer';
import { useState } from 'react';


const targetHandleStyle = {background: '#555'};


const GenericPorts = memo(({ports, portPositions, width, height}) => {

    if(ports) {

        const sourcePortNum = ports.length;              

        // axis 0 -> horizontal
        // axis 1 -> vertical
        var axis = 0;

        if(portPositions === Position.Left || portPositions === Position.Right) {
            axis = 1;
        }
        else if(portPositions === Position.Top || portPositions === Position.Bottom) {
            axis = 0;
        }
        return(
            ports.map((val, index) => {

                const offset = {};

                if(axis === 0) {
                    offset = {left: `${(index+1)*(width+20)/(sourcePortNum+1)}px`};
                }
                else if(axis === 1) {
                    offset = {top : `${10 + (index+1)*height/(sourcePortNum+1)}px`};
                }                

                const style = {...val.style, ...offset};

                return(
                <Handle type="source"
                        position={portPositions}
                        id={val.id}
                        key={val.id}
                        style={style}
                        isConnectable={val.isConnectable}/>)
            })

        )

    }
    else
    {
        return(
            <>
            </>
        )
    }
});

const GenericPortNames = memo(({ports, portPositions, width, height}) => {

    if(ports) {
        const sourcePortNum = ports.length;

        var axis1 = 0;
        var axis2 = 0;
        

        if(portPositions === Position.Left) {
            axis1 = 0;
            axis2 = 0;
        }
        else if(portPositions === Position.Right) {
            axis1 = 0;
            axis2 = 1;
        }
        else if(portPositions === Position.Top) {
            axis1 = 1;
            axis2 = 0;
        }
        else if(portPositions === Position.Bottom) {
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
                                top={`${5 + (index+1)*height/(sourcePortNum+1)}px`}
                                left="5px">
                                {val.name}
                            </Text>
                        </Tooltip>
                    )
                }
                else if(axis1 === 0 && axis2 === 1) {

                    return(
                        <Tooltip fontSize="x-small" placement="left" label={`${val.name}`} bg="white">
                            <Text 
                                isTruncated 
                                width={`${15}px`}
                                fontSize="0.4rem"
                                position="absolute"
                                top={`${5 + (index+1)*height/(sourcePortNum+1)}px`}
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
    else
    {
        return(
            <>
            </>
        )
    }        
});

const GenericNodeContent = memo(({data, isConnectible}) => {

    const minHeight = 30;
    const minWidth = 100;

    const [height, setHeight] = useState(minHeight);
    const [width, setWidth] = useState(minWidth);
    const padding = 0.625;

    console.log("asdasd");

    useEffect(() => {

        if(data.targetPorts && data.sourcePorts) {
            const targetPortNum = data.targetPorts.length;
            const sourcePortNum = data.sourcePorts.length;
            const sourcePositions = data.sourcePositions;
            const targetPositions = data.targetPositions;
            
    
            const minHeight = 30;
            const minWidth = 100;
            
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

                if(maxPortNum * 25 <= 100)
                    setWidth(() => minWidth);
                else
                    setWidth(() => newVal);
            }
            else {
                if(targetPositions === Position.Top || targetPositions === Position.Bottom) {
                    const newWidth = targetPortNum * 20;
                    const newHeight = sourcePortNum * 20;
    
                    if(targetPortNum * 25 <= 100)
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
    
                    if(sourcePortNum * 25 <= 100)
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

    return(
        <Flex
            flexDirection = "column"
            alignItems = "center"
            justifyContent="center"
            justifyItems="center"
            minWidth = {`${minWidth}px`}
            width = {`${width}px`}            
            minHeight = {`${minHeight}px`}
            height = {`${height}px`}>
            {<GenericPorts ports={data.targetPorts} portPositions={data.targetPositions} width={width} height={height}/> || null}
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
                    {<GenericPortNames ports={data.sourcePorts} portPositions={data.sourcePositions} width={width} height={height}/> || null}                
                </div>
                <div className="targets" position="relative">
                    {<GenericPortNames ports={data.targetPorts} portPositions={data.targetPositions} width={width} height={height}/> || null}
                </div>
            </Flex>
            {<GenericPorts ports={data.sourcePorts} portPositions={data.sourcePositions} width={width} height={height}/> || null} 
        </Flex>
    )
});


const GenericNode = memo(({data, isConnectible}) => {
    return(
        <GenericNodeContent data={data} isConnectible={isConnectible}/>
    )
});

export default GenericNode;