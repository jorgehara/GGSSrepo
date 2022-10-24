// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function HelperApi() {

  const url = 'https://localhost:44310/api/Localidades'
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    // const response = await fetch(url)
    // console.log(response.status)
    axios.get(url)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchApi()

  }, [])

  return (
    <div className="App">

      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Observaciones</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(gestor => (
            <tr>
              <td>{gestor.idLocalidad}</td>
              <td>{gestor.localidad}</td>
              <td>{gestor.obs}</td>
              <td>
                <button className='btn btn-primary' type="button">Seleccionar</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>

    </div>
  );
}

export default HelperApi;

