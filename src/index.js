import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
// import Navbar from './components/navbar';
// import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* < Navbar /> */}
      < App />
      {/* < Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
);


