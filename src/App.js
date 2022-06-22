import React from 'react';
import './App.css';
import Hijo from "./components/hijo";
import Hija from "./components/Hija";
import HijoRepStore from "./components/hijo-rep-store";

function App() {
  return (
      <div className='container'>
    <div className="container App border border-danger mb-5">

       <h1>Padre</h1>
        <div className='row'>
        <div className='col-md-6'> <Hijo/></div>
        <div className='col-md-6'> <Hija/></div>
        </div>

    </div>
          <div>
          <HijoRepStore/>
          </div>
          </div>
  );
}

export default App;
