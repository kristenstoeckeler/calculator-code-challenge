//importing React
import React from 'react';

//importing components
import Calculator from '../Calculator/Calculator';
import Results from '../Results/Results';

//importing style file
import './App.css';

//main App functional component
function App() {
  return (
    //rendering Calculator and Results components in App.js
    <div className="App">
      <header className="App-header">
        <Calculator/>
        <Results />
      </header>
    </div>
  );
}

//exporting App
export default App;
