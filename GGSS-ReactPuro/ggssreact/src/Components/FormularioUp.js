import React, { useState } from 'react';
import DragArea from './DragArea';


const FormularioUp = () => {
	const [error, setError] = useState("");
	const [inputValue, setInputValue] = useState ();
	
	//let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	// const validateNumbers= (e) => {	
	// 	//e.preventDefault();
	// 	// if(inputValue.test(regexName)) {
	// 	// 	setError("Debe ingresar solo números");
	// 	// 	return;
	// 	// }
	// }

	const validateNumbers =(e)=>{		
		if (!/[0-9]/.test(e.key)) {
			setError("Ingrese sólo números");
			e.preventDefault();
		}
	}
	const validateNumbersTelefono =(e)=>{		
		if (!/[0-9]/.test(e.key)) {
			setError("Ingrese sólo números");
			e.preventDefault();
		}
	}
	const validateNumbersDNI =(e)=>{		
		if (!/^([0-9]?){8}$/.test(e.key)) {
			setError("Ingrese sólo números");
			e.preventDefault();
		}
	}
	const validateTexts =(e)=>{		
		if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(e.key)) {
			setError("Ingrese sólo letras y espacios");
			e.preventDefault();
		}
	}
	const validateEmails =(e)=>{		
		if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(e.key)) {
			setError("Ingrese sólo letras y espacios");
			e.preventDefault();
		}
	}

	
	// const body = {
	// 	"legajo": inputValue,
	// }

	// const fetchData = () => {	
	// 	axios.post(url, body)
	// 	// .then(resp => console.log(resp) 200 Ok Succces);
	// 	.then(resp => {
	// 		if(!HttpStatusCode(OK)){
	// 			setError("Error al enviar el formulario");
	// 		}
	// 	})
	// }

	// const sendData = () => {
	// 	validateNumbers();
	// 	Todas las validaciones
	// 	fetchData();
	// };

// Empleados: {
// 	StatusCode: 200,
// 	Items: [...],
// 	Message: "Success" "Error + condigo Error"
// }

return (
	<div>
		<div class="formulario__grupo">
			<label for="usuario" class="mainABMTitle">Datos Personales</label>
		</div> 
			<form action='' className='formulario'   
			// onSubmit={sendData}
			>

	{/* <!------PrimerSectionUp-------> */}
			<div>  
	{/* DIv  Colunma Izquierda  */}
	{/* <!--Grupo: Legajo --> */}
	<div class="formulario__grupo">
	<label for="telefono" class="label label-info" className="formulario__label">Legajo N°</label>
	<div class="formulario__grupo-input">
		<input type="text" class="formulario-input-Legajo col-4" 
				placeholder="N° de Legajo" 
				onKeyPress={(e)=>validateNumbers(e)} 
				value={inputValue} 
				onChange={(e)=> 
				console.log(e.target.value)
				// setInputValue(e.target.value)}
			}/>
	
	{/* <input type="text" class="formulario-input-Legajo col-4" placeholder="N° de Legajo"/> */}
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
			<input type="text"  class="formulario__input col-6" 
					name="nombre" 
					placeholder="Ingrese Apellidos"
					onKeyPress={(e)=>validateTexts(e)} 
					value={inputValue} 
					onChange={(e)=> 
					console.log(e.target.value)
					
					}/>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			</div>
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
		{/* <!-- Grupo: Nombres --> */}
		<div class="formulario__grupo" >
			<label for="nombre" class="formulario__label">Nombres</label>
			<div class="formulario__grupo-input">
				<input type="text" class="formulario__input col-6" 
						name="nombre" 
						placeholder="Ingrese Nombres"
						onKeyPress={(e)=>validateTexts(e)} 
						value={inputValue} 
						onChange={(e)=> 
						console.log(e.target.value)
						
					}/>
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Solo puede contener letras.</p>
			</div>
		{/* <!-- Grupo: D.N.I. --> */}
		<div class="formulario__grupo" >
		<label class="formulario-label-DNI col-3 ">DNI</label>
		<select class="form-select form_select " >
			{/* <option selected>DNI</option> */}
			<option value="1">DNI</option>
			<option value="2">LC</option>
			<option value="3">LE</option>
		</select>
		<input type="text" className="formulario-input-DNI col-2 ml-2" 
				maxlength="8"
				placeholder="23456789"
				onKeyPress={(e)=>validateNumbersDNI(e)} 
				value={inputValue} 
				onChange={(e)=> 
				console.log(e.target.value)
				
				}/>
		<i class="formulario__validacion-estado fas fa-times-circle"></i>
	</div>
		<p class="formulario__input-error">Solo puede contener números, sin puntos.</p>
	{/*<!--Grupo: C.U.I.L. -->*/}
	<div class="formulario__grupo">
		<label class="label label-info formulario__label">C.U.I.L.</label>
		<div class="formulario__grupo-input">
			<input type="text" id="cuit" class="formulario__input col-4" 
			maxlength="11"
			placeholder="##-########-#" 
			onKeyPress={(e)=>validateNumbers(e)} 
				value={inputValue} 
				onChange={(e)=> 
				console.log(e.target.value)
				}/>
		
			<button type="button" class="btn btn-validacion btn-outline-primary">Validar</button>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			<p class="formulario__input-error">Solo puede contener números, sin puntos.</p>
		</div>
	</div>
		{/*<!-- Grupo: Teléfono -->*/}
		<div class="formulario__grupo" >
		<label for="telefono" class="formulario__label">Teléfono</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario_input col-4" 
				name="telefono"
				maxlength="100" 
				placeholder="1151993165"
				onKeyPress={(e)=>validateNumbersTelefono(e)} 
				value={inputValue} 
				onChange={(e)=> 
				console.log(e.target.value)
				
				}/>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
		</div>
			<p class="formulario__input-error">El teléfono solo puede contener números.</p>
		</div>
		{/* <!--Grupo: Estado Civil --> */}
		<div class="formulario__grupo" >
		<label for="nombre" class="formulario__label">Estado Civil</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input col-6" 
					name="nombre" 
					
					placeholder="Ingrese Estado Civil"
					onKeyPress={(e)=>validateTexts(e)} 
						value={inputValue} 
						onChange={(e)=> 
						console.log(e.target.value)
						
					}/>
			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
				<i class="formulario__validacion-estado fas fa-times-circle"></i>	
				<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>
		{/* <!--Grupo: Nacionalidad --> */}
		<div class="formulario__grupo" >
		<label for="nombre" class="formulario__label">Nacionalidad</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input col-6" 
					name="nombre"
					placeholder="Ingrese Nacionalidad"
					onKeyPress={(e)=>validateTexts(e)} 
						value={inputValue} 
						onChange={(e)=> 
						console.log(e.target.value)
						
					}/>
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
	<label for="nombre" class="formulario__label  pr-1 pl-0 ml-0 mr-1 col-2">Estado</label>
			<select class="form-select col-3" aria-label="Default select example">
					{/* <option selected>Open this select menu</option> */}
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
			</select>
		{/* <label for="nombre" class="formulario__label">Estado</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input col-6" placeholder="Ingrese Estado"></input>
			<button type="button" class="btn btn-validacion btn-outline-danger" data-bs-toggle="modal" data-bs-target="#ModalEstado">...
			</button>
				
			<i class="formulario__validacion-estado fas fa-times-circle"></i>			
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div> */}
	</div>
	
	{/*<!-- Grupo: Masculino & Femenino -->*/}
	<div class="formulario__grupo" >
		<label for="nombre" class="formulario__label_Sexo">Sexo</label>
		<div class="form-check">
			<input class="form-check-input" type="radio" 
					name="flexRadioDefault" 
					id="flexRadioDefault1"/>
					
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

		{/*<!--Grupo: Nacimiento -->*/}
		<div class="formulario__grupo" >
		<label for="usuario" class="formulario__label_Nacimiento">Nacimiento</label>
		<div class="formulario__grupo-input col-6">
			<input type="date" 
					id="birthday" 
					name="birthday"
					
					/>

					
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
		</div>
			<p class="formulario__input-error">Elija la fecha de su Nacimiento</p>
		</div> 

	{/*<!-- Grupo: Móvil -->*/}
	<div class="formulario__grupo" >
		<label for="telefono" class="formulario__label">Móvil</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario_input col-4" 
			name="telefono" 
			placeholder="1151993165"
				onKeyPress={(e)=>validateNumbers(e)} 
				value={inputValue} 
				onChange={(e)=> 
				console.log(e.target.value)
				}/>

			<i class="formulario__validacion-estado fas fa-times-circle"></i>
		</div>
			<p class="formulario__input-error">El teléfono solo puede contener números.</p>
	</div>
		{/* <!--Grupo: E-mail --> */}
	<div class="formulario__grupo" >
		<label for="correo" class="formulario__label">E-mail</label>
		<div class="formulario__grupo-input">
			<input type="email" class="formulario__input col-6" 
					name="correo" 
					placeholder="correo@correo.com"
					onKeyPress={(e)=>validateEmails(e)} 
					value={inputValue} 
					onChange={(e)=> 
					console.log(e.target.value)
				}/>
					
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
		</div>
			<p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
		</div>
	
	{/* <!--Grupo: País de Origen --> */}
	<div class="formulario__grupo" >
		<label class="formulario__label" >País de Origen</label>
		<div class="formulario__grupo-input">
			<input type="text" 
					class="formulario__input col-6"
					maxlength="100"  
					placeholder="Ingrese País de Origen"
					/>

			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>
	
	{/* <!--Grupo: Estudios --> */}
	<div class="formulario__grupo" >
		
		<label for="nombre" class="formulario__label">Estudios</label>
		<div class="formulario__grupo-input">
			<input type="text" class="formulario__input col-6" 
					name="nombre" 
					placeholder="Ingrese Estudios"
					/>

			<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
			<i class="formulario__validacion-estado fas fa-times-circle"></i>
			<p class="formulario__input-error">Solo puede contener letras.</p>
		</div>
	</div>

	</div>
		{/* <!--Grupo: Observaciones -->*/}
		<div class="mb-3">
			<label class="form-label mb-0">Observaciones</label>
			<textarea class="form-control mt-0" 
						maxlength="255" 
						placeholder="Ingrese sus observaciones" 
						rows="3">


						</textarea>
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
