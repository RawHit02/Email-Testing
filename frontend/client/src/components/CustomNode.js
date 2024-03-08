import React from 'react';
import { Handle } from 'react-flow-renderer';

const CustomNode = ({ data }) => {
  return (
    <div className="custom-node">
      <Handle type="target" position="top" />
      <div>{data.label}</div>
      {/* Additional UI based on node type */}
      <Handle type="source" position="bottom" />
    </div>
  );
};

export default CustomNode;
