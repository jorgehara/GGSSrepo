import React from 'react'
import InputDate from '../../InputDate/InputDate'
import "./Childs.css";


const FechaSuspencion = () => {
  return (
    <div className='row'>
        <div className='col-xl-12'>
            <InputDate nameInput="Fecha Suspención:" />
            <div className='d-flex flex-row justify-content-start align-items-center'>
                <div className='space'/>
                <input type="checkbox" className='mt-1' name="inputQuitaSusp" id="inputQuitaSusp" />
                <label htmlFor="inputQuitaSusp">Quitar Fecha de Suspensión</label>
            </div>
        </div>
    </div>
  )
}

export default FechaSuspencion