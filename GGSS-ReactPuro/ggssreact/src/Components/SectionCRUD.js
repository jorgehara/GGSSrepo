import React from 'react'

const SectionCRUD = () => {
  return (
    <div>
      {/* <!-------CRUD BOTONES-----> */}
		<br/>
		<div >
				<form action="" class="formulario crudBar" >
					{/* <!-- Grupo: Boton Imprimir Constancia de Asignaciones Familiares --> */}
					<div class="formulario__grupo formulario_crud pb-1" >
						<div class="formulario__grupo-input">
							<button type="submit" class="formulario__btn btn-crud">Imprimir Constancia de Asignaciones Familiares</button>
							</div>
							<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
						</div>
					{/* <!-- Grupo: Boton Licencias/Franquicias --> */}
					<div class="formulario__grupo formulario_crud pb-1">
						<div class="formulario__grupo-input">
							<button type="submit" class="formulario__btn btn-lic-fran">Licencias/Franquicias</button>
							</div>
							<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
						</div>
					{/* <!-- Grupo: Boton Salir --> */}
					<div class="formulario__grupo formulario_crud pb-1" >
						<div class="formulario__grupo-input">
							<button type="submit" class="formulario__btn">Salir</button>
							</div>
							<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
						</div>
					
					{/* <!-- Grupo: Boton Imprimir Certificado de Convenio/Oficio --> */}
					<div class="formulario__grupo formulario_crud pb-1">
						<div class="formulario__grupo-input">
							<button type="submit" class="formulario__btn btn-crud">Imprimir Certificado de Convenio/Oficio</button>
							</div>
							<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
						</div>
					
					{/* <!-- Grupo: Boton  Agregar--> */}
					<div class="formulario__grupo formulario_crud pb-1" >
						<div class="formulario__grupo-input">
							<button type="submit" class="formulario__btn btn-lic-fran">Agregar</button>
							</div>
							<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
						</div>
					{/* <!-- Grupo: Boton Modificar --> */}
					<div class="formulario__grupo formulario_crud pb-1" >
						<div class="formulario__grupo-input">
							<button type="submit" class="formulario__btn">Modificar</button>
							</div>
							<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
						</div>
					
					{/* <!-- Grupo: Boton Imprimir Resumen Legajo Empleado --> */}
					<div class="formulario__grupo formulario_crud pb-1">
						<div class="formulario__grupo-input">
							<button type="submit" class="formulario__btn btn-crud">Imprimir Resumen Legajo Empleado</button>
							</div>
							<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
						</div>
					{/* <!-- Grupo: Boton Eliminar --> */}
					<div class="formulario__grupo formulario_crud pb-1" >
						<div class="formulario__grupo-input">
							<button type="submit" class="formulario__btn btn-lic-fran">Eliminar</button>
							</div>
							<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
						</div>
					{/* <!-- Grupo: Boton Listar--> */}
					<div class="formulario__grupo formulario_crud pb-1" >
						<div class="formulario__grupo-input">
							<button type="submit" class="formulario__btn">Listar</button>
							</div>
							<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
						</div>
					
					{/* <!-- Grupo: Boton Imprimir Ficha Empleado --> */}
					<div class="formulario__grupo formulario_crud pb-1" >
						<div class="formulario__grupo-input">
							<button type="submit" class="formulario__btn btn-crud">Imprimir Ficha Empleado</button>
							</div>
							<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
						</div>


				<div class="formulario__mensaje" id="formulario__mensaje">
					<p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
				</div>
				</form>
			{/* <!-- FIN CRUD BOTONES		   --> */}
	</div>
    </div>
  )
}

export default SectionCRUD