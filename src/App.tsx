import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Greeting name="TypeScript User" />
      <Counter />
    </div>
  );
};

export default App;
