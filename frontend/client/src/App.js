import React, { useState, useCallback } from 'react';
import ReactFlow, { MiniMap, Controls, addEdge } from 'react-flow-renderer';
import CustomNode from './components/CustomNode';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate here
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './context/AuthContext'; // Correct, as AuthProvider is a named export
import ProtectedRoute from './components/ProtectedRoute';


const nodeTypes = { customNode: CustomNode };

function App() {
  const [elements, setElements] = useState([]);
  const [nodeId, setNodeId] = useState(1);

  // Function to add a new node
  const addNode = useCallback(() => {
    const newNode = {
      id: `${nodeId}`,
      type: 'customNode', // Assuming 'customNode' is a type defined in your CustomNode component
      data: { label: `Node ${nodeId}` },
      position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
    };
    setElements((els) => [...els, newNode]);
    setNodeId(nodeId + 1); // Increment nodeId for uniqueness
  }, [nodeId]);

  // Function to update a node's data
  const updateNode = useCallback((id, newData) => {
    setElements((els) =>
      els.map((el) => (el.id === id ? { ...el, data: { ...el.data, ...newData } } : el))
    );
  }, []);

  // Function to add a connection (edge) between two nodes
  const onConnect = useCallback((params) => {
    setElements((els) => addEdge({ ...params, type: 'smoothstep', animated: true }, els));
  }, []);

  // React Flow's onLoad event
  const onLoad = useCallback((reactFlowInstance) => {
    reactFlowInstance.fitView(); // Fits the view of the graph within the available space
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          {/* Redirect to login or another appropriate route as a fallback */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;