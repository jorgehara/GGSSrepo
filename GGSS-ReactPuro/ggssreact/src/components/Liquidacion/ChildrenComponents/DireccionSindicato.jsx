import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { inputButtonClasessDireccion } from '../../../classes/classes';
import InputButton from '../../Inputs/InputButton/InputButton';
import InputButtonLiquidacion from '../../Inputs/InputButton/InputButtonLiquidacion';
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
      <div className='col'>
        <InputButtonLiquidacion
            clasess={inputButtonClasessDireccion}
            nameButton="..."
            nameLabel="Dirección"
            placeholder="Dirección"
            action="ACTION"
            array={[]}
        />
    <SindicatoLiquidacion idInput="sindicatoInput" nameLabel="Sindicato:" nameButton="..."
    array={sindicatosNAme}/>
    </div>  
  )
}

export default DireccionSindicato;