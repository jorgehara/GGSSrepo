import React from 'react';
import DragArea from './DragArea';


const FormularioUp = () => {
  return (
	<div>
		<div class="formulario__grupo">
			<label for="usuario" class="mainABMTitle">Datos Personales</label>
		</div> 
<form action='' className='formulario'>
	{/* <!------PrimerSectionUp-------> */}

	{/* <!--Grupo: Legajo --> */}
	<div class="formulario__grupo">
	<label for="telefono" class="label label-info" className="formulario__label">Legajo</label>
	<div class="formulario__grupo-input">
	<input type="number" class="formulario__input" placeholder="Ingrese el número"/>
		<i class="formulario__validacion-estado fas fa-times-circle"></i>
	</div>
		<p class="formulario__input-error">Solo puede contener números.</p>
	</div>
	{/* <!-- Grupo: Estado --> */}
	<div class="formulario__grupo">
		<label for="nombre" class="formulario__label">Estado</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input" placeholder="Ingrese Estado"></input>
			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
			
			<i class="formulario__validacion-estado fas fa-times-circle"></i>			
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>
	{/* <!--Grupo: Apellido --> */}
	<div>  
		{/* VER PARECE QUE ACA FALTA UN DIV */}
		<div class="formulario__grupo" >
		<label class="formulario__label">Apellido</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input" name="nombre" placeholder="Ingrese Apellidos"></input>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			</div>
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
		{/* <!-- Grupo: Nombres --> */}
		<div class="formulario__grupo" >
			<label for="nombre" class="formulario__label">Nombres</label>
			<div class="formulario__grupo-input">
				<input type="text" class="formulario__input" name="nombre" placeholder="Ingrese Nombres"></input>
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Solo puede contener letras.</p>
			</div>
		{/* <!-- Grupo: D.N.I. --> */}
		<div class="formulario__grupo" >
		<label class="formulario__label">DNI</label>
		<select class="form-select form_select" >
			<option selected>DNI</option>
			<option value="1">DNI</option>
			<option value="2">LC</option>
			<option value="3">LE</option>
		</select>
		<input type="text" class="formulario__input" placeholder="Ingrese el número"></input>
		<i class="formulario__validacion-estado fas fa-times-circle"></i>
	</div>
		<p class="formulario__input-error">Solo puede contener números, sin puntos.</p>
	</div>
	
	{/* POR ACA CERRARIA  */}
	{/*<!-- Grupo: Masculino & Femenino -->*/}
	
	<div class="formulario__grupo" id="grupo__terminos">
		<label for="nombre" class="formulario__label">Sexo</label>
		<div class="form-check">
			<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
			<label class="form-check-label" for="flexRadioDefault1">
			Masculino
			</label>
		</div>
		<div class="form-check">
			<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
			<label class="form-check-label" for="flexRadioDefault1">
			Femenino
			</label>
		</div>
	</div>

	{/*<!--Grupo: C.U.I.L. -->*/}
	<div class="formulario__grupo">
		<label class="label label-info formulario__label">C.U.I.L.</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input" placeholder="Ingrese el número"></input>
			<button type="button" class="btn btn-validacion btn-outline-primary">Validar</button>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			<p class="formulario__input-error">Solo puede contener números, sin puntos.</p>
		</div>
	</div>
	{/*<!--Grupo: Nacimiento -->*/}
	<div class="formulario__grupo" id="grupo__usuario">
		<label for="usuario" class="formulario__label">Nacimiento</label>
		<div class="formulario__grupo-input">
			<input type="date" id="birthday" name="birthday"></input>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			</div>
			<p class="formulario__input-error">Elija la fecha de su Nacimiento</p>
		</div> 
	{/*<!-- Grupo: Teléfono -->*/}
	<div class="formulario__grupo" id="grupo__telefono">
		<label for="telefono" class="formulario__label">Teléfono</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input" name="telefono" id="telefono" placeholder="1151993165"></input>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
		</div>
			<p class="formulario__input-error">El teléfono solo puede contener números.</p>
		</div>
	{/*<!-- Grupo: Móvil -->*/}
	<div class="formulario__grupo" id="grupo__telefono">
		<label for="telefono" class="formulario__label">Móvil</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input" name="telefono" id="telefono" placeholder="1151993165"></input>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
		</div>
			<p class="formulario__input-error">El teléfono solo puede contener números.</p>
		</div>
		{/* <!--Grupo: E-mail --> */}
	<div class="formulario__grupo" id="grupo__correo">
		<label for="correo" class="formulario__label">E-mail</label>
		<div class="formulario__grupo-input">
			<input type="email" class="formulario__input" name="correo" id="correo" placeholder="correo@correo.com"></input>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
		</div>
			<p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
		</div>
	{/* <!--Grupo: Estado Civil --> */}
	<div class="formulario__grupo" id="grupo__nombre">
		<label for="nombre" class="formulario__label">Estado Civil</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input" name="nombre" id="nombre" placeholder="Ingrese Estado Civil"></input>
			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
		
			<i class="formulario__validacion-estado fas fa-times-circle"></i>	
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>
	{/* <!--Grupo: País de Origen --> */}
	<div class="formulario__grupo" id="grupo__nombre">
		<label class="formulario__label" >País de Origen</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input" placeholder="Ingrese País de Origen"></input>
			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
		
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>
	{/* <!--Grupo: Nacionalidad --> */}
	<div class="formulario__grupo" id="grupo__nombre">
		<label for="nombre" class="formulario__label">Nacionalidad</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input" name="nombre" id="nombre" placeholder="Ingrese Nacionalidad"></input>
			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
		
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>
	{/* <!--Grupo: Estudios --> */}
	<div class="formulario__grupo" id="grupo__nombre">
		<label for="nombre" class="formulario__label">Estudios</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input" name="nombre" id="nombre" placeholder="Ingrese Estudios"></input>
			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
		
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>
	{/* <!-- Grupo: Div Perfil --> */}
	<div class="formulario__grupo" id="grupo__nombre">
		<div class="formulario__grupo-imgProfile">
				<div class="perfilImage" >
					<input type="file" id="image_input" 
					// class="form-control form-control-sm" 
					accept="image/png, image/jpg"></input>
				</div>
				<div class="divDragArea">		
					<DragArea/>
				</div>
		</div>
	</div>
		
	{/* <!--Grupo: Observaciones -->		 */}
		<div class="mb-3">
			<label class="form-label">Observaciones</label>
			<textarea class="form-control" placeholder="Ingrese sus observaciones" rows="3"></textarea>
		</div>
	{/* <!--Grupo: Botones Cancelar Perfil -->		 */}
	<div class="d-inline-flex p-2 bd-highlight ">
		<div class="d-inline-flex p-2 bd-highlight ">
			<button type="submit" class="formulario__btn btn-perfil btn-perfil-aceptar" >Aceptar</button>				
			<button type="submit" class="formulario__btn btn-perfil btn-perfil-cancelar" >Cancelar</button>
		</div>
	</div>					
	{/* <!-- Grupo: Div Vacio--> */}
	<div class="formulario__grupo" >
	</div>
	{/* <!-- Grupo: Boton Cancelar --> */}
	<div class="formulario__grupo aceptarCancelar" >
		<div class="formulario__grupo-input">
			<button type="submit" class="formulario__btn" >Cancelar</button>
		</div>
		<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
	{/* <!-- Grupo: Boton Aceptar --> */}
		<div class="formulario__grupo-input">
			<button type="submit" class="formulario__btn" >Aceptar</button>
		</div>
		<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
	</div>
	{/* <!------Fin----PrimerSectionUp------> */}
	</form>
	</div>
  )
}

export default FormularioUp