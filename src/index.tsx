import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// ;(window).React = React
// ;(window).ReactDOM = ReactDOM

const PersonCard =  (dane: any) => {
  return <div className="test" style={{ color: dane.color }}>
    <p>{dane.person} has a  {dane.pet}</p>
  </div>
}


ReactDOM.render(
  <div>
    <PersonCard color={'red'} person={'ALice'} pet={'Cat'} />
    <PersonCard color={'green'} person={'Bob'} pet={'Dog'} />
    <PersonCard color={'blue'} person={'Cat'} pet={'Cat'} />
  </div>,
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
