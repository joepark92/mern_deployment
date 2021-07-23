import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import AddPet from './views/AddPet';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <AddPet path="/create" />
        <Detail path="pets/:id" />
        <Update path="pets/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
