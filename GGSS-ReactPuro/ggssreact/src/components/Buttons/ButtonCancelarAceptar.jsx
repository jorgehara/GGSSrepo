import React, { useContext } from 'react'
import { employeContext } from '../../context/employeContext';

const ButtonCancelarAceptar = ({cancelar, aceptar, disabled}) => {

  const { saveEmpl, saveEstados, saveEstado,  saveEstadosCiviles,  saveEstadoCivil, saveNacionalidades, saveNacionalidad ,saveEstudios, saveEstudio, saveTipoDNI, saveTiposDNI, saveDisable, disable} = useContext(employeContext);

  function deshabilitaEdit(e){
    e.preventDefault();
    saveDisable(true);
  }
  return (
    <div className="d-flex row-reverse">
         <div className='form__grupo__icons d-flex flex-row-reverse w-100'>
            <button className='btn btn-danger 'disabled={disabled}
                    onClick={(e)=>deshabilitaEdit(e)}>{cancelar}</button>
                    
            <button className='btn btn-success ml-2'disabled={disabled}
                    
                    >{aceptar}</button>
        </div>
    </div>
  )
}

export default ButtonCancelarAceptar;