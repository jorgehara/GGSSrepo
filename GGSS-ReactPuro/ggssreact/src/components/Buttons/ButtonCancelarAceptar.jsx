import React, { useContext } from 'react'
import { useSelector } from 'react-redux';

const ButtonCancelarAceptar = ({cancelar, aceptar, disabled,functionSend,functionDelete, idElimiar}) => {

  

  function deshabilitaEdit(e){
    e.preventDefault();
  }
  
  return (
    <div className="d-flex flex-row">
         <div className='form__grupo__icons d-flex flex-row-reverse w-100 '>
            <button className='btn btn-danger 'disabled={disabled}
                    onClick={(e)=>functionDelete(idElimiar)}>{cancelar}</button>
                    
            <button className='btn btn-success ml-2'disabled={disabled} onClick={functionSend}
                    
                    >{aceptar}</button>
        </div>
    </div>
  )
}

export default ButtonCancelarAceptar;