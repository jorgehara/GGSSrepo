import React from 'react'
import InputDate from '../../InputDate/InputDate'
import InputForm from '../../InputForm/InputForm'

const Prorroga = () => {
  return (
    <div className='row'>
        <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
            <InputDate nameInput="Nueva Fecha:" />
            <InputForm nameLabel="N° Resolución" />
        </div>
    </div>
  )
}

export default Prorroga