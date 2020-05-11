import React from 'react';
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/scss/bootstrap.scss' // npm i node-sass
import 'bootstrap/dist/css/bootstrap.css'
import SearchView from './views/SearchView';

function App() {
  return (
    <div>
      {/* .container>.row>.col */}

      <div className="container">
        <div className="row">
          <div className="col">
            <h1>React Szybki Start</h1>
            <SearchView />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
