import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InputButton from '../../Inputs/InputButton/InputButton';
import SindicatoLiquidacion from '../../SindicatoLiquidacion/SindicatoLiquidacion';
import '../../SindicatoLiquidacion/SindicatoLiquidacion.css';

const DireccionSindicato = () => {
  const [sindicatos, setSindicatos] = useState([]);
  useEffect(()=>{
      axios.get("http://54.243.192.82/api/Sindicatos")
      .then(res=> setSindicatos(res.data.result))
  },[])
const sindicatosNAme = sindicatos.map((s)=> {return(s.nombreSindicato)})
  
return (
    <>
    {/* <div className="row border p-2 col"> */}
    <div className="row border border-bottom-0">
      <div className='col'>
        <InputButton
            nameButton="..."
            nameLabel="Dirección"
            placeholder="Dirección"
        />
    <SindicatoLiquidacion idInput="sindicatoInput" nameLabel="Sindicato:" nameButton="..."
    array={sindicatosNAme}/>
    </div>        
  </div>
        {/* </div> */}

  </>
  )
}

export default DireccionSindicato;