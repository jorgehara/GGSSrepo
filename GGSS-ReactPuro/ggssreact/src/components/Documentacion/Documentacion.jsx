import React from 'react'
import InputButton from '../Inputs/InputButton/InputButton'
import InputDate from '../Inputs/InputDate/InputDate'
import TextArea from '../Inputs/TextArea/TextArea'

const Documentacion = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-xl-12'>
                <InputDate nameInput="Fecha Presentación" idInput="inputDatePresentacion" display={false}/>
            </div>
            <div className='col-xl-12'>
                <InputDate nameInput="Fecha Presentación" idInput="inputDatePresentacion" display={true} />
            </div>
            <div className='col-xl-12'>
                <InputButton nameButton="..." nameLabel="Documentación" placeholder="Documentación"/>
            </div>
            <div className='col-xl-12'>
                <TextArea inputName="Observaciones "/>
            </div>
        </div>
    </div>
  )
}

export default Documentacion