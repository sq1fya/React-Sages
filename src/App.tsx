import React from 'react';
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/scss/bootstrap.scss' // npm i node-sass
import 'bootstrap/dist/css/bootstrap.css'
import Search from './views/Search';

function App() {
  return (
    <div>
      {/* .container>.row>.col */}

      <div className="container">
        <div className="row">
          <div className="col">
            <h1>React Szybki Start</h1>
            <Search />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
