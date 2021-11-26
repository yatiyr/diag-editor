import { useColorModeValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReactFlow, {
  removeElements,
  addEdge,
  Elements,
  MiniMap,
  Controls,
  Background, 
  isEdge,
  Position,
  ArrowHeadType} from 'react-flow-renderer';
import GenericNode from '../elements/GenericNode';


const nodeTypes = {
  GenericNode: GenericNode
};

const initialElements : Elements<any> = [
    {
      id: '1',
      type: 'input', // input node
      data: { label: 'My first node with react flow' },
      position: { x: 250, y: 25 },
    },
    // default node
    {
      id: '2',
      // you can also pass a React component as a label
      data: { label: <div>My second node with react flow</div> },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      type: 'output', // output node
      data: { label: 'My third node with react flow' },
      position: { x: 250, y: 250 },
    },
    // animated edge
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3' },
];

const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
}

const Flow = () => {

    const [elements, setElements] = useState(initialElements);
    const onElementsRemove = (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => setElements((els) => addEdge(params, els));       

    const backgroundColor = useColorModeValue("#000", "#fff");


    useEffect(() => {
      const onChange = (event : any) => {
        setElements((els : any) : any => {
          els.map((e: any) => {
            if (isEdge(e) || e.id !== 2) {
              return e;
            }

            const color = event.target.value;

            return {
              ...e,
              data: {
                ...e.data,
                color,
              },
            };
          })
        })
      };

      setElements([
        {
          id: '1',
          type: 'input',
          data: { label: 'An input node' },
          position: { x: 0, y: 50 },
          sourcePosition: Position.Right,
        },
        {
          id: '2',
          type: 'GenericNode',
          data: { 
                  onChange: onChange, 
                  color: "#fff",
                  sourcePositions: Position.Right,
                  targetPositions: Position.Top,                  
                  targetPorts: [
                                {id: "2_tp1", style: {background: '#555'}, isConnectible: true},                                                                                                                                                                                                                                                                                                                                                                                                                                    
                               ],
                  sourcePorts: [
                                {id: "2_sp1", style: {background: '#555'}, isConnectible: true},
                                {id: "2_sp2", style: {background: '#555'}, isConnectible: true},
                                {id: "2_sp1", style: {background: '#555'}, isConnectible: true},
                                {id: "2_sp2", style: {background: '#555'}, isConnectible: true} ,
                                {id: "2_sp1", style: {background: '#555'}, isConnectible: true},
                                {id: "2_sp2", style: {background: '#555'}, isConnectible: true}                                                                                                   
                               ]
                },
          style: { border: '1px solid #777', padding: 10 },
          position: { x: 250, y: 50 },
        },
        {
          id: '3',
          type: 'output',
          data: { label: 'Output A' },
          position: { x: 550, y: 25 },
          targetPosition: Position.Left,
        },
        {
          id: '4',
          type: 'output',
          data: { label: 'Output B' },
          position: { x: 550, y: 100 },
          targetPosition: Position.Left,
        },
  
        { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#fff' } },
        { id: 'e2a-3', source: '2', sourceHandle: '2_sp1', target: '3', arrowHeadType: ArrowHeadType.ArrowClosed, animated: true, style: { stroke: '#fff' } },
        { id: 'e2b-4', source: '2', sourceHandle: '2_sp2', target: '4', animated: true, style: { stroke: '#fff' } },
      ]);

    }, [elements]);

    return <ReactFlow 
              elements={elements}
              onElementsRemove={onElementsRemove}
              onConnect={onConnect}
              deleteKeyCode={46}
              onLoad={onLoad}
              snapToGrid={true}
              snapGrid={[4,4]}
              nodeTypes={nodeTypes}>
              <MiniMap
                nodeStrokeColor={(n : any): string =>  {
                  if (n.style?.background) return n.style.background;
                  if (n.type === 'input') return '#0041d0';
                  if (n.type === 'output') return '#ff0072';
                  if (n.type === 'default') return '#1a192b';

                  return '#eee';
                }}

                nodeColor={(n : any): string => {
                  if (n.style?.background) return n.style.background;

                  return '#fff';
                }}
                nodeBorderRadius={2}                
              />
              <Controls/>
              <Background color={backgroundColor} gap={16} />        
            </ReactFlow>
}

  export default Flow;