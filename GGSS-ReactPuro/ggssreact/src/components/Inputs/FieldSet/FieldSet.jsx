import React from 'react'
import ButtonCancelarAceptar from '../../Buttons/ButtonCancelarAceptar'
import TableBasic1 from '../../Tables/TableBasic1'
import InputCbo from '../InputCbo/InputCbo'
import InputDate from '../InputDate/InputDate'
import InputForm from '../InputForm/InputForm'
import FechaSuspencion from './Childs/FechaSuspencion'
import NuevaLicencia from './Childs/NuevaLicencia'
import PorPeriodo from './Childs/PorPeriodo'
import Prorroga from './Childs/Prorroga'
import "./FieldSet.css";

const FieldSet = ({array,valueId, propArrayOpFem, opciones, selectedOption, onChange, valueForm}) => {
    const columns1 =["Año", "Días Totales", "Tomados", "Restan", "Vto", "Prórroga", "Resolución", "Disponibles"]
    const columns2 =["Desde", "Hasta", "Fecha Suspensión"]

  console.log(opciones && opciones[1].opcion === "2 - Solicita Nueva Licencia")
  console.log(selectedOption)

    return (  
        
        <>
          <div>
            <fieldset className='border p-2'>
              <legend className='float-none w-auto p-2'>
                {
                  selectedOption && selectedOption === "1 - Disponibles por Periodo" && "Cargar disponibles por periodo"
                }
                {
                  selectedOption && selectedOption === "2 - Solicita Nueva Licencia" && "Solicita Nueva Licencia"
                }
                {
                  selectedOption && selectedOption === "3 - Prorroga Vencimiento" && "Prorroga Vencimiento"
                }
                {
                  selectedOption && selectedOption === "4 - Suspende Licencia" && "Suspende Licencia"
                }
              </legend>
                <div className='row'>
               <div className='col-xl-4'>
                  
              </div>
               {
                selectedOption && selectedOption === "1 - Disponibles por Periodo" && <PorPeriodo valueForm={valueForm} onChange={onChange} valueId={valueId} array={array} propArrayOpFem={propArrayOpFem} />
               }
               {
                selectedOption && selectedOption === "2 - Solicita Nueva Licencia" && <NuevaLicencia valueForm={valueForm} onChange={onChange} valueId={valueId} array={array} propArrayOpFem={propArrayOpFem} />
               }
               {
                selectedOption && selectedOption === "3 - Prorroga Vencimiento" && <Prorroga valueForm={valueForm} onChange={onChange} />
               }
               {
                 selectedOption && selectedOption === "4 - Suspende Licencia" && <FechaSuspencion valueForm={valueForm} onChange={onChange} />
               }
           </div>
           </fieldset>
           <div className='col-xl-12 d-flex flex-row-reverse mt-2'>
             <button className='btn btn-outline-danger btnAgregar '>-</button>
             <button className='btn btn-outline-success btnAgregar '>+</button>
          </div>
          <TableBasic1 columns={columns1} value={[]} />
          <div className='col-xl-12 d-flex flex-row-reverse mt-2'>
             <button className='btn btn-outline-danger btnAgregar '>-</button>
          </div>
          <TableBasic1 columns={columns2} value={[]} />
          
         
      </div>
       </>
    
    
  )
}

export default FieldSet