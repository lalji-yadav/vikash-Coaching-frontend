import { Router } from '@material-ui/icons';
import React from 'react';
import Header from "../src/header/header"
import Routers from "../src/router/router"
import './App.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      </BrowserRouter>
      {/* <Routers /> */}
     
    </div>
  );
}

export default App;
