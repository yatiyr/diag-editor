import { useState } from 'react';
import ReactFlow, {
  removeElements,
  addEdge,
  Elements,
  MiniMap,
  Controls,
  Background } from 'react-flow-renderer';

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

    return <ReactFlow 
              elements={elements}
              onElementsRemove={onElementsRemove}
              onConnect={onConnect}
              deleteKeyCode={46}
              onLoad={onLoad}
              snapToGrid={true}
              snapGrid={[4,4]}>
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
              <Background color="#aaa" gap={16} />        
            </ReactFlow>
}

  export default Flow;