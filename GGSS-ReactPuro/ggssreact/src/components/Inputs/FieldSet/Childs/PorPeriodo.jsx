import React from 'react'
import TableBasic1 from '../../../Tables/TableBasic1'
import InputCbo from '../../InputCbo/InputCbo'
import InputDate from '../../InputDate/InputDate'
import InputForm from '../../InputForm/InputForm'

const PorPeriodo = ({valueId,propArrayOpFem, array, columns1, columns2 }) => {
  return (
    <>
          <div className='row'>
              <div className='col-xl-4'>
                  <InputCbo display={false} value={[]} valueId={valueId} propArrayOpFem={propArrayOpFem} array={array} nameLabel="Año:" nameButton="..." />
              </div>
              <div className='col-xl-4'>
                  <InputForm display={false} value={[]} array={[]} nameLabel="Cant Días Disponibles:" nameButton="..." />
              </div>
              <div className='col-xl-4'>
                  <InputDate nameInput="Vencimiento" />
              </div>
          </div></>
            
  )
}

export default PorPeriodo