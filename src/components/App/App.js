import React from 'react';



import Calculator from '../Calculator/Calculator';
import Results from '../Results/Results';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator/>
        <Results />
      </header>
    </div>
  );
}

export default App;
