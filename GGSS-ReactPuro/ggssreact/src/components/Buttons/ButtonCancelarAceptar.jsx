import React from 'react'

const ButtonCancelarAceptar = ({cancelar, aceptar}) => {
  return (
    <div>
         <div className='form__grupo__icons'>
            <button className='btn btn-danger'
                    >{cancelar}</button>
                    
            <button className='btn btn-success ml-2'
                    // onClick={"LlamadaApi"}
                    >{aceptar}</button>
        </div>
    </div>
  )
}

export default ButtonCancelarAceptar;