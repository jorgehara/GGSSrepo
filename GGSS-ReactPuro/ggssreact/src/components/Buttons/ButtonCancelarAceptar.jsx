import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { employeContext } from '../../context/employeContext';

const ButtonCancelarAceptar = ({cancelar, aceptar, disabled,functionSend,functionDelete, idElimiar}) => {

  const { saveEmpl, saveEstados, saveEstado,  saveEstadosCiviles,  saveEstadoCivil, saveNacionalidades, saveNacionalidad ,saveEstudios, saveEstudio, saveTipoDNI, saveTiposDNI, saveDisable, disable} = useContext(employeContext);

  function deshabilitaEdit(e){
    e.preventDefault();
    saveDisable(true);
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