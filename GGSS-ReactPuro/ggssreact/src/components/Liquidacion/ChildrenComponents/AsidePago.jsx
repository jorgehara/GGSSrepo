import React from 'react'
import InputButton from '../../Inputs/InputButton/InputButton'
import InputRadio from '../../Inputs/InputRadio/InputRadio'


const AsidePago = () => {
  return (
  <>
      <div className="border p-2 col">
        <div>
                <InputButton
                  nameButton="..."
                  nameLabel="Forma de Pago"
                  placeholder="Forma de Pago"
                  action="ACTION"
                />
              </div>
              <div>
                <InputButton
                  nameButton="..."
                  nameLabel="Lugar de Pago"
                  placeholder="Lugar de Pago"
                  action="ACTION"
                />
              </div>
              <div>
                <InputButton
                  nameButton="..."
                  nameLabel="Banco"
                  placeholder=""
                  display={true}
                  action="ACTION"
                />
              </div>
                <div>
                <InputButton
                  nameLabel="N° Cuenta"
                  placeholder="N° Cuenta"
                  action="ACTION"
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
                  action="ACTION"
                />
              </div>

              <div>
              <button type="button" class="btn btn-danger" disabled>Actualización masiva de datos</button>
              </div>

              </div>
    </>

  )
}

export default AsidePago