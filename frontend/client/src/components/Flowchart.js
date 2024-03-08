// In your components folder, create a file called FlowChart.js

import React, { useState } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls } from 'react-flow-renderer';

const initialElements = [
  { id: '1', type: 'input', position: { x: 250, y: 5 }, data: { label: 'Input Node' } },
  // Add your other nodes here
];

const FlowChart = () => {
  const [elements, setElements] = useState(initialElements);
  const [nodeId, setNodeId] = useState(2);

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const onAdd = () => {
    const newNode = {
      id: String(nodeId),
      data: { label: `Node ${nodeId}` },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight - 100,
      },
    };
    setElements((els) => els.concat(newNode));
    setNodeId(nodeId + 1);
  };

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow elements={elements} onConnect={onConnect} snapToGrid={true} snapGrid={[15, 15]}>
        <MiniMap />
        <Controls />
      </ReactFlow>
      <button onClick={onAdd} style={{ position: 'absolute', right: '10px', top: '10px', zIndex: 4 }}>
        Add Node
      </button>
    </div>
  );
};

export default FlowChart;
