import React from 'react';
import Header from "../src/header/header"
import { BrowserRouter } from 'react-router-dom';
import Footer from '../src/footer/footer'


function App() {
  return (
    <div style={{overflowX:"hidden"}}>

      <BrowserRouter>
          <Header />
      </BrowserRouter>

      
      {/* <Routers /> */}


      <Footer />
     
    </div>
  );
}

export default App;
