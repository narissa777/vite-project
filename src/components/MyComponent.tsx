import React, { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

const MyComponent: React.FC = () => {
  useEffect(() => {
    // SDK'nın hazır olduğunu kontrol etmek
    WebApp.ready();
  }, []);

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={() => WebApp.showAlert('Hello World!')}>
        Show Alert
      </button>
    </div>
  );
};

export default MyComponent;
