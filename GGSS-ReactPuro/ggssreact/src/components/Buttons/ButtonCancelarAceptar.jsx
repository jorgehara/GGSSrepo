import React from 'react'

const ButtonCancelarAceptar = ({cancelar, aceptar}) => {
  return (
    <div className="d-flex row-reverse">
         <div className='form__grupo__icons d-flex flex-row-reverse w-100'>
            <button className='btn btn-danger '
                    >{cancelar}</button>
                    
            <button className='btn btn-success ml-2'
                    // onClick={"LlamadaApi"}
                    >{aceptar}</button>
        </div>
    </div>
  )
}

export default ButtonCancelarAceptar;