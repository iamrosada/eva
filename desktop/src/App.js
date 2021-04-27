import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
