import React from 'react';
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/scss/bootstrap.scss' // npm i node-sass
import 'bootstrap/dist/css/bootstrap.css'
import SearchView from './views/SearchView';

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import AlbumDetails from './views/AlbumDetails';

function App() {
  return (
    <div>
      <Router>

        <div className="container">
          <div className="row">
            <div className="col">
              <h1>React Szybki Start</h1>

              <Switch>
                <Route path="/" exact={true} component={SearchView} />
                <Route path="/album" component={AlbumDetails} />
                <Route path="/**" render={() => <h1>Page not found!</h1>} />
              </Switch>

            </div>
          </div>
        </div>

      </Router>
    </div>
  );
}

export default App;
