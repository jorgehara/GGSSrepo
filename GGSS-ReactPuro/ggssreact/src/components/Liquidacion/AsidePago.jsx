import React from 'react'
import InputButton from '../Inputs/InputButton/InputButton'
import InputRadio from '../Inputs/InputRadio/InputRadio'

const AsidePago = () => {
  return (
    <>
     <div className="border p-2 col-xl-8">
       {/* AsidePagos */}
       <div>
                <InputButton
                  nameButton="..."
                  nameLabel="Forma de Pago"
                  placeholder="Forma de Pago"
                />
              </div>
              <div>
                <InputButton
                  nameButton="..."
                  nameLabel="Lugar de Pago"
                  placeholder="Lugar de Pago"
                />
              </div>
              <div>
                <InputButton
                  nameButton="..."
                  nameLabel="Banco"
                  placeholder=""
                  display={true}
                />
              </div>
                <div>
                <InputButton
                  nameLabel="N° Cuenta"
                  placeholder="N° Cuenta"
                />
              </div>
              <div >
              <InputRadio
                nameFirst="Caja de Ahorro"
                nameSecond="Cuenta Corriente"
                nameLabel="Tipo"
              />
              </div>
              <div>
                <InputButton
                  nameLabel="C.B.U."
                  placeholder="N° Cuenta"
                />
              </div>

              <div>
              <button type="button" class="btn btn-danger" disabled>Actualización masiva de datos</button>
              </div>

              {/* Fin de AsidePago */}
              </div>
    </>
  )
}

export default AsidePago