import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Router } from 'react-router-dom';
import App from './App';
// import history from './history';

ReactDOM.render(
  <React.StrictMode>
    {/* <Router history={history}> */}
    <App />
    {/*  </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);
