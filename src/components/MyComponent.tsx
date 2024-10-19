import React, { useEffect } from 'react';
import { SomeFunction } from '@twa-dev/sdk';

const MyComponent: React.FC = () => {
  useEffect(() => {
    // SDK'yı burada kullanabilirsiniz
    SomeFunction();
  }, []);

  return (
    <div>
      <h1>My Component</h1>
    </div>
  );
};

export default MyComponent;
