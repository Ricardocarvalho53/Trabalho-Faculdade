import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <main className="App">
      <h1>Contador</h1>

      <div>
        {/* Renderiza o componente Counter dentro do elemento*/}
        <Counter />
      </div>
    </main>
  );
}

export default App;
