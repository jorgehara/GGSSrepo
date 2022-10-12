import React from 'react';


const FormularioUp = () => {
  return (
    <div>
        <div class="formulario__grupo">
			<label for="usuario" class="mainABMTitle">Datos Personales</label>
		</div>
            <div class="formulario__grupo">
			<label for="telefono" class="label label-info" className="formulario__label">Legajo</label>
			<div class="formulario__grupo-input">
            <input type="number" class="formulario__input" placeholder="Ingrese el número"/>
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
			</div>
				<p class="formulario__input-error">Solo puede contener números.</p>
			</div>

        





    </div>
  )
}

export default FormularioUp