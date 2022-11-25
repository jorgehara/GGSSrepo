import React from 'react'
import EmployeData from '../EmployeData/EmployeData'
import FieldSet from '../Inputs/FieldSet/FieldSet';
import InputCbo from '../Inputs/InputCbo/InputCbo';

const Licencias = () => {
    const cantidadDias = 10;

    const año = new Date().getFullYear();
    const años = Array.from(new Array(123), (val, index) => año - index);


    const newAños = años && años.map((año)=>{
        return (
            {
                "año" : año 
            }
        )
    })
    console.log(newAños)

  return (
    <div className='container'>
        <div className='row'>
            <EmployeData />
            <div className='col-xl-12'>
                <b>Total días disponibles : {cantidadDias}</b>
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center col-xl-12'>
                <InputCbo display={false} value={[]} propArrayOpFem="año" array={newAños} valueId="año" nameLabel="Opciones:" nameButton="..."/>
            </div>
            <div className='col-xl-12 mt-2'>
                <FieldSet />
            </div>
            
        </div>
    </div>
  )
}

export default Licencias