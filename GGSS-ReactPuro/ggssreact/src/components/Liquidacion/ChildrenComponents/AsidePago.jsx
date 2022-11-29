import React from 'react'
import { useDispatch } from 'react-redux'
import { classesRadioLiquidacion, inputButtonClasessAsidePagos } from '../../../classes/classes'
import { GET_INPUTS_VALUE } from '../../../redux/types/liquidacionTypes'
import InputButton from '../../Inputs/InputButton/InputButton'
import InputButtonLiquidacion from '../../Inputs/InputButton/InputButtonLiquidacion'
import InputRadio from '../../Inputs/InputRadio/InputRadio'


const AsidePago = ({formasPAgo, lugaresDePago, bancos}) => {

  const dispatch = useDispatch();

  function onChange(e, action) {
    dispatch(
      {
        type: action,
        payload : {name : e.target.name, value : e.target.value}
      });    
  }
  return (
  <>
      <div className="border border-3 p-2 col mt-2">
        <div>
                <InputButtonLiquidacion
                  clasess={inputButtonClasessAsidePagos}
                  nameButton="..."
                  nameLabel="Forma de Pago"
                  placeholder="Forma de Pago"
                  array={formasPAgo && formasPAgo}
                  propArrayOp="nombreFormadePago"
                  propIdOption="iDformadePago"
                  idInput="inputFormaDePago"
                  onChange={onChange}
                  action={GET_INPUTS_VALUE}
                />
              </div>
              <div>
                <InputButtonLiquidacion
                clasess={inputButtonClasessAsidePagos}
                  nameButton="..."
                  nameLabel="Lugar de Pago"
                  placeholder="Lugar de Pago"
                  array={lugaresDePago && lugaresDePago}
                  propArrayOp="lugardePago"
                  propIdOption="idLugardePago"
                  idInput="inputLugaresDePago"
                  onChange={onChange}
                  action={GET_INPUTS_VALUE}
                />
              </div>
              <div>
                <InputButtonLiquidacion
                clasess={inputButtonClasessAsidePagos}
                  nameButton="..."
                  nameLabel="Banco"
                  placeholder=""
                  display={true}
                  array={bancos && bancos}
                  propArrayOp="nombreBanco"
                  propIdOption="idBanco"
                  idInput="inputBanco"
                  onChange={onChange}
                  action={GET_INPUTS_VALUE}
                />
              </div>
                <div>
                <InputButton
                clasess={inputButtonClasessAsidePagos}
                nameButton="..."
                  nameLabel="N° Cuenta"
                  placeholder="N° Cuenta"
                  onChange={onChange}
                  action={GET_INPUTS_VALUE}
                  id="inputNumCta"
                />
              </div>
              <div >
              <InputRadio
                classes={classesRadioLiquidacion}
                nameFirst="Caja de Ahorro"
                nameSecond="Cuenta Corriente"
                nameLabel="Tipo"
                onChange={onChange}
                action={GET_INPUTS_VALUE}
                idInput="inputRadioAsidePagos"
              />
              </div>
              <div>
                <InputButton
                clasess={inputButtonClasessAsidePagos}
                nameButton="..."
                  nameLabel="C.B.U."
                  placeholder="C.B.U"
                  onChange={onChange}
                  action={GET_INPUTS_VALUE}
                  id="inputCBU"
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