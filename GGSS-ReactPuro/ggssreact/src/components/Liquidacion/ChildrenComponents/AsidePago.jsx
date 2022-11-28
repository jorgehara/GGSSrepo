import React from 'react'
import { classesRadioLiquidacion, inputButtonClasessAsidePagos } from '../../../classes/classes'
import InputButton from '../../Inputs/InputButton/InputButton'
import InputButtonLiquidacion from '../../Inputs/InputButton/InputButtonLiquidacion'
import InputRadio from '../../Inputs/InputRadio/InputRadio'


const AsidePago = () => {
  return (
  <>
      <div className="border border-3 p-2 col mt-2">
        <div>
                <InputButtonLiquidacion
                  clasess={inputButtonClasessAsidePagos}
                  nameButton="..."
                  nameLabel="Forma de Pago"
                  placeholder="Forma de Pago"
                  action="ACTION"
                  array={[]}
                />
              </div>
              <div>
                <InputButtonLiquidacion
                clasess={inputButtonClasessAsidePagos}
                  nameButton="..."
                  nameLabel="Lugar de Pago"
                  placeholder="Lugar de Pago"
                  action="ACTION"
                  array={[]}
                />
              </div>
              <div>
                <InputButtonLiquidacion
                clasess={inputButtonClasessAsidePagos}
                  nameButton="..."
                  nameLabel="Banco"
                  placeholder=""
                  display={true}
                  action="ACTION"
                  array={[]}
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
                  placeholder="C.B.U"
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