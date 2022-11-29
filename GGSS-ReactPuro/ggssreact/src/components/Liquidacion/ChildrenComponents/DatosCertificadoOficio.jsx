import React from 'react'
import InputForm from '../../Inputs/InputForm/InputForm';
import CheckLabel from '../../Inputs/CheckLabel/CheckLabel'
import { useDispatch } from 'react-redux';
import { GET_INPUTS_VALUE } from '../../../redux/types/liquidacionTypes';


const DatosCertificado = ({nameLabel, inputTotalRemu, inputTotalNeto, inputCheckEmbargos, inputCheckSumAdministrativo, inputCheckLicSinGoce}) => {
  const dispatch = useDispatch();
  function onChange(e, action){
    dispatch(
      {
        type: action,
        payload : {name : e.target.name, value : e.target.value}
      });  
  }
  return (
   <>
   <div className="row border border-3 p-2 mt-1">
            <label htmlFor="">{nameLabel}</label> 
          <div className='col  d-flex flex-row justify-content-start align-items-center'>
            <InputForm 
              nameLabel="Total Remuneración: " inputId="inputTotalRemu" nameInput="inputTotalRemu" onChange={onChange} value={inputTotalRemu} action={GET_INPUTS_VALUE} />
            <InputForm 
              nameLabel="Total Neto: " inputId="inputTotalNeto" nameInput="inputTotalNeto" onChange={onChange} value={inputTotalNeto} action={GET_INPUTS_VALUE}/>     
          </div>
          <div className='col'>
            <CheckLabel nameLabel="Tiene Embargos" idInput="inputCheckEmbargo" onChange={onChange} action={GET_INPUTS_VALUE} value={inputCheckEmbargos && inputCheckEmbargos} />
            <CheckLabel nameLabel="Tiene Sumario Administrativos" idInput="inputCheckSumAdministrativo" onChange={onChange} action={GET_INPUTS_VALUE}value={inputCheckSumAdministrativo && inputCheckSumAdministrativo}  />
            <CheckLabel nameLabel="Tiene Licencia Sin Goce de Haberes" idInput="inputCheckLicSinGoce" onChange={onChange} action={GET_INPUTS_VALUE} value={inputCheckLicSinGoce && inputCheckLicSinGoce} />
        
          </div>
    </div>
</>
)
}

export default DatosCertificado;