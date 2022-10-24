import React, { useEffect, useState } from 'react'
// import './App.css';
import axios from 'axios';


const LlamadaBackend = () => {
  const url = 'http://52.90.12.208/estadosunidades?page=1&take=10&order=false'

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
      <div>

     

    </div>
    );
}


export default LlamadaBackend;






{/* <table className="Table">
    
     <table>
        <thead>
        <tr>
            <th>date</th>
            <th>temperatureC</th>
            <th>sumary</th>
        </tr>
        </thead>
        <tr>
        {data.map(gestor => (
        <tr>
            <td>{gestor.idEstadoUnidad}</td>
            <td>{gestor.estado}</td>
            <td>{gestor.obs}</td>
        </tr>    
        ))};
        </tr>


    <tbody>
   
      
       
       
       
       
        {/* {data.map(gestor => (
       <tr>
            <td>{gestor.date}</td>
            <td>{gestor.temperatureC}</td>
            <td>{gestor.summary}</td>
        </tr>    
        ))}; */}


       {/* </tbody> */}
    {/* //  </table> */}

    //  </table> */}

