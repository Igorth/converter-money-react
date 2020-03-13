import React from 'react';
import Conversor from './components/Conversor/Conversor';
import Header from './components/Header/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="NZD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="NZD"></Conversor>
      </div>
    </div>
  );
}

export default App;
