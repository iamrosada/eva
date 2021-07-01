import React from 'react';
import {
  HashRouter,
  /* HashRouter BrowserRouter */
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';

function App() {
  return (
    <HashRouter>
      <ToastContainer autoClose={3000} />
      <Header />
      <Routes />
    </HashRouter>
  );
}

export default App;
