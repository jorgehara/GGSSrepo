
import React from 'react';
import DragArea from './DragArea';
// import Modals from './Modals';
// import PoppusOk from './PoppusOK';
// import styled from 'styled-components';



const FormularioUp = () => {

  return (
	<div>
		<div class="formulario__grupo">
			<label for="usuario" class="mainABMTitle">Datos Personales</label>
		</div> 
<form action='' className='formulario'>
	{/* <!------PrimerSectionUp-------> */}
<div>  
	{/* DIv  Colunma Izquierda  */}
	{/* <!--Grupo: Legajo --> */}
	<div class="formulario__grupo">
	<label for="telefono" class="label label-info" className="formulario__label">Legajo N°</label>
	<div class="formulario__grupo-input">
	<input type="text" class="formulario-input-Legajo col-4 col-sm-3" placeholder="N° de Legajo"/>
		<i class="formulario__validacion-estado fas fa-times-circle"></i>
	</div>
		<p class="formulario__input-error">Solo puede contener números.</p>
	</div>
	
	
	<div>  
	<div>
		{/* <!--Grupo: Apellido --> */}
		<div class="formulario__grupo" >
		<label class="formulario__label">Apellido</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input col-6" name="nombre" placeholder="Ingrese Apellidos"></input>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			</div>
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
		{/* <!-- Grupo: Nombres --> */}
		<div class="formulario__grupo" >
			<label for="nombre" class="formulario__label">Nombres</label>
			<div class="formulario__grupo-input">
				<input type="text" class="formulario__input col-6" name="nombre" placeholder="Ingrese Nombres"></input>
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Solo puede contener letras.</p>
			</div>
		{/* <!-- Grupo: D.N.I. --> */}
		<div class="formulario__grupo" >
		<label class="formulario-label-DNI col-3">DNI</label>
		<select class="form-select form_select" >
			<option selected>DNI</option>
			<option value="1">DNI</option>
			<option value="2">LC</option>
			<option value="3">LE</option>
		</select>
		<input type="text" class="formulario-input-DNI col-2" placeholder="23456789"></input>
		<i class="formulario__validacion-estado fas fa-times-circle"></i>
	</div>
		<p class="formulario__input-error">Solo puede contener números, sin puntos.</p>
	{/*<!--Grupo: C.U.I.L. -->*/}
	<div class="formulario__grupo">
		<label class="label label-info formulario__label">C.U.I.L.</label>
		<div class="formulario__grupo-input">
			<input type="text" id="cuit" class="formulario__input col-4" placeholder="##-########-#" pattern="\d{2}\-\d{8}\-\d{1}"></input>
			<button type="button" class="btn btn-validacion btn-outline-primary">Validar</button>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			<p class="formulario__input-error">Solo puede contener números, sin puntos.</p>
		</div>
	</div>
		{/*<!-- Grupo: Teléfono -->*/}
		<div class="formulario__grupo" >
		<label for="telefono" class="formulario__label">Teléfono</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario_input col-4" name="telefono" id="telefono" placeholder="1151993165"></input>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
		</div>
			<p class="formulario__input-error">El teléfono solo puede contener números.</p>
		</div>
		{/* <!--Grupo: Estado Civil --> */}
		<div class="formulario__grupo" >
		<label for="nombre" class="formulario__label">Estado Civil</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input col-6" name="nombre" id="nombre" placeholder="Ingrese Estado Civil"></input>
			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
		
			<i class="formulario__validacion-estado fas fa-times-circle"></i>	
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>
		{/* <!--Grupo: Nacionalidad --> */}
		<div class="formulario__grupo" >
		<label for="nombre" class="formulario__label">Nacionalidad</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input col-6" name="nombre" id="nombre" placeholder="Ingrese Nacionalidad"></input>
			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
		
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>
	</div>
	</div>
	</div>


	<div>
		{/* Div Colunma Derecha */}
	
	{/* <!-- Grupo: Estado --> */}
	<div class="formulario__grupo">
		<label for="nombre" class="formulario__label">Estado</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input col-6" placeholder="Ingrese Estado"></input>
			<button type="button" class="btn btn-validacion btn-outline-primary">...
			</button>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>			
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>
	
	{/*<!-- Grupo: Masculino & Femenino -->*/}
	<div class="formulario__grupo" >
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
		{/*<!--Grupo: Nacimiento -->*/}
		<div class="formulario__grupo_Nacimiento" >
		<label for="usuario" class="formulario__label_Nacimiento">Nacimiento</label>
		<div class="formulario__grupo-input col-8">
			<input type="date" id="birthday" name="birthday"></input>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			</div>
			<p class="formulario__input-error">Elija la fecha de su Nacimiento</p>
		</div> 
	</div>

	{/*<!-- Grupo: Móvil -->*/}
	<div class="formulario__grupo" >
		<label for="telefono" class="formulario__label">Móvil</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario_input col-4" name="telefono" id="telefono" placeholder="1151993165"></input>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
		</div>
			<p class="formulario__input-error">El teléfono solo puede contener números.</p>
	</div>
		{/* <!--Grupo: E-mail --> */}
	<div class="formulario__grupo" >
		<label for="correo" class="formulario__label">E-mail</label>
		<div class="formulario__grupo-input">
			<input type="email" class="formulario__input col-6" name="correo" id="correo" placeholder="correo@correo.com"></input>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
		</div>
			<p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
		</div>
	
	{/* <!--Grupo: País de Origen --> */}
	<div class="formulario__grupo" >
		<label class="formulario__label" >País de Origen</label>
		<div class="formulario__grupo-input">
		{/* <ContactForm/> */}
			<input type="text" class="formulario__input col-6" placeholder="Ingrese País de Origen"></input>
			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>
	
	{/* <!--Grupo: Estudios --> */}
	<div class="formulario__grupo" >
		
		<label for="nombre" class="formulario__label">Estudios</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input col-6" name="nombre" id="nombre" placeholder="Ingrese Estudios"></input>
			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
		
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>

	</div>
		
		
		
		
		
		
		
		{/* <!--Grupo: Observaciones -->		 */}
		<div class="mb-3">
			<label class="form-label">Observaciones</label>
			<textarea class="form-control" placeholder="Ingrese sus observaciones" rows="3"></textarea>
		{/* <!-- Grupo: Boton Cancelar --> */}
	<div class="formulario__grupo aceptarCancelar" >
		<div class="formulario__grupo-input">
			<button type="submit" class="formulario__btn col-6" >Cancelar</button>
		</div>
		<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
	{/* <!-- Grupo: Boton Aceptar --> */}
		<div class="formulario__grupo-input">
			<button type="submit" class="formulario__btn col-6" >Aceptar</button>
		</div>
		<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
	</div>
		</div>
	{/* <!-- Grupo: Div Perfil --> */}
	<div class="formulario__grupo" >
		<div class="formulario__grupo-imgProfile">
				<div class="perfilImage" >
					
					<input type="file" id="image_input" 
					// class="form-control form-control-sm" 
					accept="image/png, image/jpg"></input>
				</div>
				<div class="divDragArea">		
					<DragArea/>
				</div>
						
				<div class="d-inline-flex bd-highlight " >
				
			<button  type="submit" class="formulario__btn btn-perfil btn-perfil-aceptar " >Cancelar</button>				
			<button type="submit" class="formulario__btn btn-perfil btn-perfil-cancelar" > Aceptar</button>
		</div>
		</div>
	</div>
	
	{/* <!--Grupo: Botones Cancelar Perfil -->		 */}
	{/* <div class="d-inline-flex p-2 bd-highlight "> */}
	{/* </div>					 */}
	
	
	{/* <!------Fin----PrimerSectionUp------> */}
	</form>
	</div>
  )
}

export default FormularioUp;


// const StyleBoton = styled.div`
//   .divBoton {
//     margin-left: -200px;
//   }
// `;