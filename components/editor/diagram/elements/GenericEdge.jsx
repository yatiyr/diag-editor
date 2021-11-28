import { useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { getBezierPath, getMarkerEnd, getSmoothStepPath } from 'react-flow-renderer';


const GenericEdge = ({
    id,
    source,
    target,
    selected,
    animated,
    label,
    labelStyle,
    labelShowBg,
    labelBgStyle,
    labelBgPadding,
    labelBgBorderRadius,
    data,
    style = {},
    arrowHeadType,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    markerEndId,
}) => {

    const borderRadius = 0;
    const markerColor = useColorModeValue("light", "dark");
    const edgeColor = useColorModeValue("#1f2233","#fff");

    const edgePath = getSmoothStepPath({sourceX,
                                    sourceY,
                                    sourcePosition,
                                    targetX,
                                    targetY,
                                    targetPosition,
                                    borderRadius});

    const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
    console.log(markerEnd);
    return(
        <>
        <path
            id={id}
            style={{stroke: edgeColor}}
            className="react-flow__edge-path"
            d={edgePath}
            markerEnd={`url(#${data.markerEnd}_${markerColor})`}
        />
        <text>
            <textPath href={`#${id}`} style={{ fontSize: '12px' }} startOffset="50%" textAnchor="middle">
                {data.text}
            </textPath>
        </text>
      </>
    );
}

export default GenericEdge;