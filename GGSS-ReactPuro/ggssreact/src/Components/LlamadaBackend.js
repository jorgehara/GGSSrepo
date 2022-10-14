import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';


const LlamadaBackend = () => {
  const url = 'https://localhost:7037/WeatherForecast'

  const [data, setData] = useState([]);

  const fetchApi = async ( )=>{
    //const response = await fetch(url);
    //console.log(response.status);
    axios.get(url)
        .then((response) => {
            setData(response.data);
        }).catch(error => {
            console.log(error);
        });
  }

  useEffect(() => {
    fetchApi();
  }, []);
  
    return (
      <div className="App">

     <table className="Table">
        <thead>
        <tr>
            <th>date</th>
            <th>temperatureC</th>
            <th>sumary</th>
        </tr>
        </thead>

    <tbody>
        {data.map(gestor => (
        <tr>
            <td>{gestor.date}</td>
            <td>{gestor.temperatureC}</td>
            <td>{gestor.summary}</td>
        </tr>    
        ))};

       </tbody>
     </table>
    </div>
    );
}


export default LlamadaBackend;