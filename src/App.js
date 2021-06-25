import React from 'react';
import './App.css';
import Counter from './Components/counter';
import Datalist from './Components/datalist';
import Main from './Components/main';



function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Counter></Counter>
          </div>
          <div className="col-md-6">
            <Datalist></Datalist>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Main></Main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
