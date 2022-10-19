/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom';





const Routes = () => {
  return (
    <div>
        <h2> Rutas </h2>
        <Router>
           <Route path="/">
            <h3>Home</h3>

           </Route>
           <Route path="/FichaEmpleados">
            <h3>Empleados</h3>
           </Route>

           <Route path="/TabladeDatos">
            <h3>Tabla de Datos</h3>
           </Route>



        </Router>
    </div>
  );
};

export default Routes