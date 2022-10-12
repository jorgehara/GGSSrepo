import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DragArea from './DragArea';
import FormularioUp from './FormularioUp';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <FormularioUp/>
    <DragArea/>


  </React.StrictMode>
);

reportWebVitals();
