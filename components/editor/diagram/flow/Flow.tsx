import ReactFlow, {removeElements, addEdge, Elements} from 'react-flow-renderer';
import { useState } from 'react';

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

const Flow = () => {

    const [elements, setElements] = useState(initialElements);
    const onElementsRemove = (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => setElements((els) => addEdge(params, els));       

    return <ReactFlow 
                elements={elements}
                onElementsRemove={onElementsRemove}
                onConnect={onConnect}
                deleteKeyCode={46}/>
}

  export default Flow;