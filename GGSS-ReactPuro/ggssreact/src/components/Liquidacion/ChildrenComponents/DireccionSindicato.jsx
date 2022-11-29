import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { inputButtonClasessDireccion } from '../../../classes/classes';
import { GET_INPUTS_VALUE } from '../../../redux/types/liquidacionTypes';
import InputButton from '../../Inputs/InputButton/InputButton';
import InputButtonLiquidacion from '../../Inputs/InputButton/InputButtonLiquidacion';
import SindicatoLiquidacion from '../../SindicatoLiquidacion/SindicatoLiquidacion';
import '../../SindicatoLiquidacion/SindicatoLiquidacion.css';

const DireccionSindicato = ({direcciones, sindicatos}) => {
  const dispatch = useDispatch();

  function onChange(e, action) {
    dispatch(
      {
        type: action,
        payload : {name : e.target.name, value : e.target.value}
      });    
  }

  
return (
      <div className='col'>
        <InputButtonLiquidacion
            clasess={inputButtonClasessDireccion}
            nameButton="..."
            nameLabel="Dirección"
            placeholder="Dirección"
            array={direcciones && direcciones}
            propArrayOp="direccion"
            propIdOption="idDireccion"
            idInput="inputDireccionLiquidacion"
            onChange={onChange}
            action={GET_INPUTS_VALUE}
        />
    <SindicatoLiquidacion  nameLabel="Sindicato:" nameButton="..."
    array={sindicatos && sindicatos} porpArrayOp="nombreSindicato" propArrayId="idSindicato" idInput="sindicatosLiquidacion" action={GET_INPUTS_VALUE} />
    </div>  
  )
}

export default DireccionSindicato;