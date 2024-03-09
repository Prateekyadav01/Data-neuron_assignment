// Component1.js
import React from 'react';
import { Resizable } from 'react-resizable';

const Component1 = () => {
  const [size, setSize] = React.useState({ width: 200, height: 200 });

  const onResize = (event, { size }) => {
    setSize(size);
  };

  return (
    <Resizable
      width={size.width}
      height={size.height}
      onResize={onResize}
      minConstraints={[100, 100]}
      maxConstraints={[400, 400]}
    >
      <div style={{ border: '1px solid #000', padding: '10px', width: '100%', height: '100%' }}>
        Component 1
      </div>
    </Resizable>
  );
}

export default Component1;
