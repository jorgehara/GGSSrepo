import React from 'react'
import { classesRadioLiquidacion, inputButtonClasessAsidePagos } from '../../../classes/classes'
import InputButton from '../../Inputs/InputButton/InputButton'
import InputRadio from '../../Inputs/InputRadio/InputRadio'


const AsidePago = () => {
  return (
  <>
      <div className="border border-3 p-2 col mt-2">
        <div>
                <InputButton
                  clasess={inputButtonClasessAsidePagos}
                  nameButton="..."
                  nameLabel="Forma de Pago"
                  placeholder="Forma de Pago"
                  action="ACTION"
                />
              </div>
              <div>
                <InputButton
                clasess={inputButtonClasessAsidePagos}
                  nameButton="..."
                  nameLabel="Lugar de Pago"
                  placeholder="Lugar de Pago"
                  action="ACTION"
                />
              </div>
              <div>
                <InputButton
                clasess={inputButtonClasessAsidePagos}
                  nameButton="..."
                  nameLabel="Banco"
                  placeholder=""
                  display={true}
                  action="ACTION"
                />
              </div>
                <div>
                <InputButton
                clasess={inputButtonClasessAsidePagos}
                nameButton="..."
                  nameLabel="N° Cuenta"
                  placeholder="N° Cuenta"
                  action="ACTION"
                />
              </div>
              <div >
              <InputRadio
                classes={classesRadioLiquidacion}
                nameFirst="Caja de Ahorro"
                nameSecond="Cuenta Corriente"
                nameLabel="Tipo"
              />
              </div>
              <div>
                <InputButton
                clasess={inputButtonClasessAsidePagos}
                nameButton="..."
                  nameLabel="C.B.U."
                  placeholder="N° Cuenta"
                  action="ACTION"
                />
              </div>

              <div className='mt-2'>
              <button type="button" class="btn btn-danger btn-sm" >Actualización masiva de datos</button>
              </div>

              </div>
    </>

  )
}

export default AsidePago