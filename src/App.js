import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddPet from './components/AddPet/AddPet'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Pet Hotel
      </header>
      <body>
        <div className="toggle-view">
          <button className="toggleBtn">Dashboard</button>
          <button className="toggleBtn">Manage Owners</button>
        </div>
        <AddPet/>
        <PetHistory/>
      </body>
    </div>
  );
}

export default App;
