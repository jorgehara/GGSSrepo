import React, { useState } from 'react'

const FormularioDown = () => {
	
	
	const [error, setError] = useState("");
	const [inputValue, setInputValue] = useState ();

	const validateNumbers =(e)=>{		
		if (!/[0-9]/.test(e.key)) {
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


  return (
    <div>
		    
        <div class="formulario__grupo">
			<label for="usuario" class="mainABMTitle">Domicilios</label>
		</div>
		
		<div class="container text-start">
  		<div class="row align-items-start border border-dark p-2 mb-0 border-opacity-25">
		<div class="col-6 ">
		<div action="" class="formulario" >
			{/* <!--Grupo: Predeterminado --> */}
			<div class="formulario__grupo" >
		<div class="form-check mt-1 mb-0">
			<input class="form-check-input mt-1" type="radio" 
					name="flexRadioDefault" 
					id="flexRadioDefault1"/>
			<label class="form-check-label" for="flexRadioDefault1">
			Predeterminado
			</label>
		</div>
	</div>
		{/* <!-- Grupo: Calle --> */}
		<div class="formulario__grupo" >
			<label  class="formulario__label col-2 mt-2 mr-0">Calle</label>
			<div class="formulario__grupo-input-Domicilios">
				<input type="text" 
				class="formulario__input col" 
						placeholder="Ingrese Calle"
						onKeyPress={(e)=>validateTexts(e)} 
						value={inputValue} 
						onChange={(e)=> 
						console.log(e.target.value)
					}/>						
						
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Solo puede contener letras.</p>
			</div>
		{/* <!-- Grupo: Barrio   ----------*/}
		<div class="formulario__grupo">
			<label  class="formulario__label col-2 mt-2 mr-0">Barrio</label>
			<div class="formulario__grupo-input-Domicilios">
				<input type="text" 
				class="formulario__input col" 
				placeholder="Ingrese Barrio"
				onKeyPress={(e)=>validateTexts(e)} 
				value={inputValue} 
				onChange={(e)=> 
				console.log(e.target.value)
			}/>		
				<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
			
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				<p class="formulario__input-error">Solo puede contener letras y números.</p>
			</div>
		</div>
		{/* <!-- Grupo: Provincia --> */}
		<div class="formulario__grupo" >
			<label class="formulario__label col-4 mt-2">Provincia</label>
			<div class="formulario__grupo-input_SelecProvincia col-6">
				<select id="t_provincia" class="form-control_Provincia">
					<option value="Selecccione su Provincia" class="formulario__input" selected="">Selecccione su provincia</option>
					<option value="Capital Federal">Capital Federal</option>
					<option value="Buenos Aires">Buenos Aires</option>
					<option value="Catamarca">Catamarca</option>
					<option value="Córdoba">Córdoba</option>
					<option value="Corrientes">Corrientes</option>
					<option value="Chaco">Chaco</option>
					<option value="Chubut">Chubut</option>
					<option value="Entre Ríos">Entre Ríos</option>
					<option value="Formosa">Formosa</option>
					<option value="Jujuy">Jujuy</option>
					<option value="La Pampa">La Pampa</option>
					<option value="La Rioja">La Rioja</option>
					<option value="Mendoza">Mendoza</option>
					<option value="Misiones">Misiones</option>
					<option value="Neuquén">Neuquén</option>
					<option value="Río Negro">Río Negro</option>
					<option value="Salta">Salta</option>
					<option value="San Juan">San Juan</option>
					<option value="San Luis">San Luis</option>
					<option value="Santa Cruz">Santa Cruz</option>
					<option value="Santa Fe">Santa Fe</option>
					<option value="Santiago del Estero">Santiago del Estero</option>
					<option value="Tierra del Fuego">Tierra del Fuego</option>
					<option value="Tucumán">Tucumán</option>
					</select>
				</div>
			</div>
		{/* <!--Grupo: Observaciones -->*/}
		<div class="formulario__grupo ">
		<label for="nombre" class="formulario__label-Obs col-1 mt-0 ml-0">Observaciones</label>
		<div class="form-floating ">
  				<textarea class="form-control-TextArea ml-1 mt-4 col-6"
							maxlength="255" 
							placeholder="Ingrese sus observaciones" 
							id="floatingTextarea2">
							</textarea>
			{/* <!-- Grupo: Boton Cancelar & Aceptar --> */}
		<div class="formulario__grupo">
			<div class="formulario__grupo-input pl-2">
				<button type="submit" class="formulario__btn ml-5">Cancelar</button>
				<button type="submit" class="formulario__btn">Aceptar</button>
		</div>
			<p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
		</div>
		</div>
	</div>
</div>
		
		</div>
		
	
		
		<div class="col-6 ">
    	<div action="" class="formulario" >
			
		{/* <!-- Grupo: Número -->	 */}
		<div class="formulario__grupo" >
			<label for="telefono" class="formulario__label_Numero col-4 mt-2 mr-0">Número</label>
			<div class="formulario__grupo-input-Domicilios">
				<input type="text" class="formulario__input col-6" 
						placeholder="12345"
						maxlength="5"
						onKeyPress={(e)=>validateNumbers(e)} 
						value={inputValue} 
						onChange={(e)=> 
						console.log(e.target.value)
					}/>
				
				<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
			
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				<p class="formulario__input-error">Solo puede contener números.</p>
			</div>
		</div>

		{/* <!-- Grupo: Piso/Dpto/Ofic/Torre --> */}
		<div class="formulario__grupo" >
			<label for="telefono"  class="formulario__label_Piso col-4 mt-2 mr-0">Piso/Dpto/Ofic/Torre</label>
			<div class="formulario__grupo-input-Domicilios">
				<input type="text" class="formulario__input col-7" 
				placeholder="Ingrese número"
				// placeholder="xxxx"
					onKeyPress={(e)=>validateTexts(e)}
					maxLength="100" 
					value={inputValue} 
					onChange={(e)=> 
					console.log(e.target.value)
				}/>
				
				<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
			
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				<p class="formulario__input-error">Solo puede contener números.</p>
			</div>
		</div>

		{/* <!-- Grupo: Departamento --> */}
		<div class="formulario__grupo" >
			<label class="formulario__label col-3 mt-2 mr-0">Departamento</label>
			<div class="formulario__grupo-input-Domicilios ml-5">
				<input type="text" 
				class="formulario__input col" 
				placeholder="Ingrese departamento"
				onKeyPress={(e)=>validateTexts(e)} 
				value={inputValue} 
				onChange={(e)=> 
				console.log(e.target.value)
			}/>		
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
			</div>
				<p class="formulario__input-error">Solo puede contener números.</p>
			</div>

		{/* <!-- Grupo: Localidad/CP --> */}
		<div class="formulario__grupo">
			<label class="formulario__label_Localidad col-3 mt-2 mr-0">Localidad/CP</label>
			<div class="formulario__grupo-input-Domicilios ml-5">
				<input type="text" 
						class="formulario__input col mr-3" 
						placeholder="Ingrese Localidad/CP"
						onKeyPress={(e)=>validateTexts(e)}
						maxlength="100" 
						value={inputValue} 
						onChange={(e)=> 
						console.log(e.target.value)
					}/>		
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Solo puede contener letras.</p>
			</div>


			</div>
		
		</div>
		
		</div>
   </div>
</div>
  );
};
export default FormularioDown