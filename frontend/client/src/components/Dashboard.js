import React, { useState, useCallback } from 'react';
import ReactFlow, { addEdge } from 'react-flow-renderer';

const initialNodes = [
  { id: '1', type: 'input', data: { label: 'Start Campaign' }, position: { x: 100, y: 25 } },
  { id: '2', data: { label: 'Welcome Email' }, position: { x: 100, y: 125 } },
  { id: '3', data: { label: 'Follow-up Email' }, position: { x: 100, y: 225 } },
  { id: '4', type: 'output', data: { label: 'Decision Point: Clicked Link?' }, position: { x: 100, y: 325 } },
  { id: '5', type: 'output', data: { label: 'Send Discount Email' }, position: { x: 50, y: 425 } },
  { id: '6', type: 'output', data: { label: 'End Campaign' }, position: { x: 250, y: 425 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e4-5', source: '4', target: '5', animated: true, label: 'Clicked' },
  { id: 'e4-6', source: '4', target: '6', animated: false, label: 'Not Clicked' },
];

const Dashboard = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [nodeId, setNodeId] = useState(2); // Assuming initialNodes has 1 node

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const addNode = useCallback(() => {
    const newNode = {
      id: nodeId.toString(),
      data: { label: `Email ${nodeId}` },
      position: { x: Math.random() * window.innerWidth / 2, y: Math.random() * window.innerHeight / 2 },
    };
    setNodes((nds) => nds.concat(newNode));
    setNodeId(nodeId + 1);
  }, [nodeId]);

  return (
    <div style={{ height: 500 }}>
      <button onClick={addNode}>Add Email Node</button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        fitView
        style={{ width: '100%', height: '90%' }}
      />
    </div>
  );
};

export default Dashboard;
