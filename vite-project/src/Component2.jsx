// Component2.js

import React from 'react';
import { Resizable } from 'react-resizable';

const Component2 = () => {
  return (
    <Resizable width={200} height={200}>
      <div style={{ border: '1px solid #000', padding: '10px' }}>
        Component 2
      </div>
    </Resizable>
  );
}

export default Component2;
