import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormularioUp from './FormularioUp';
import Navbar from './Navbar';
import SectionTabla from './SectionTabla';
import FormularioDown from './FormularioDown';
import SectionCRUD from './SectionCRUD';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <FormularioUp/>
    <FormularioDown/>
    <SectionTabla/>
    <SectionCRUD/>


  </React.StrictMode>
);

reportWebVitals();
