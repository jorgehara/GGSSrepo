import React from 'react'

const FormularioDown = () => {
  return (
    <div>
        {/* <!------SegundaSectionDown------> */}
        <div class="formulario__grupo">
			<label for="usuario" class="mainABMTitle">Domicilios</label>
		</div>
		<form action="" class="formulario" >
			{/* <!--Grupo: Predeterminado --> */}
			<div>
			<div class="formulario__grupo" >
			<div class="form-check">
				<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
				<label class="form-check-label" for="flexRadioDefault1">
					Predeterminado
				</label>
				</div>
			</div>
			</div>
			
			{/* <!-- Grupo: Div Vacío --> */}
			<div class="formulario__grupo" >
				<div class="formulario__grupo-input">
				</div>
			</div>	
		
		{/* <!-- Grupo: Calle --> */}
		<div class="formulario__grupo" >
			<label  class="formulario__label">Calle</label>
			<div class="formulario__grupo-input">
				<input type="text" class="formulario__input col-6" placeholder="Ingrese Calle"></input>
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Solo puede contener letras.</p>
			</div>

		{/* <!-- Grupo: Número -->	 */}
		<div class="formulario__grupo" >
			<label for="telefono" class="label label-info formulario__label" >Número</label>
			<div class="formulario__grupo-input">
				<input type="text" class="formulario__input col-6" placeholder="Ingrese Número"></input>
				<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
			
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				<p class="formulario__input-error">Solo puede contener números.</p>
			</div>
		</div>

		{/* <!-- Grupo: Barrio   ----------
			
						-------------------VER VALIDACION REQUIERE STRING & NUMEROS
		-.-----------------------------------------------------------------------> */}
		<div class="formulario__grupo">
			<label  class="formulario__label">Barrio</label>
			<div class="formulario__grupo-input">
				<input type="text" class="formulario__input col-6" placeholder="Ingrese Barrio"></input>
				<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
			
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				<p class="formulario__input-error">Solo puede contener letras y números.</p>
			</div>
		</div>

		{/* <!-- Grupo: Piso/Dpto/Ofic/Torre --> */}
		<div class="formulario__grupo" >
			<label for="telefono"  class="formulario__label_Piso">Piso/Dpto/Ofic/Torre</label>
			<div class="formulario__grupo-input">
				<input type="text" class="formulario__input col-6" placeholder="Ingrese número"></input>
				<button type="button" class="btn btn-validacion btn-outline-primary">...</button>
			
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				<p class="formulario__input-error">Solo puede contener números.</p>
			</div>
		</div>

		{/* <!-- Grupo: Departamento --> */}
		<div class="formulario__grupo" >
			<label class="formulario__label">Departamento</label>
			<div class="formulario__grupo-input">
				<input type="text" class="formulario__input col-6" placeholder="Ingrese departamento"></input>
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
			</div>
				<p class="formulario__input-error">Solo puede contener números.</p>
			</div>

		{/* <!-- Grupo: Localidad/CP --> */}
		<div class="formulario__grupo">
			<label class="formulario__label">Localidad/CP</label>
			<div class="formulario__grupo-input">
				<input type="text" class="formulario__input col-6" placeholder="Ingrese Localidad/CP"></input>
				<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Solo puede contener letras.</p>
			</div>

		{/* <!-- Grupo: Provincia --> */}
		<div class="formulario__grupo" >
			<label class="formulario__label">Provincia</label>
			<div class="formulario__grupo-input_SelecProvincia col-5">
				<select id="t_provincia" class="form-control">
					<option value="Selecccione su Provincia" class="formulario__input" selected="">Selecccione su Provincia</option>
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
		{/* <!--Grupo: Observaciones -->		 */}
		<div class="mb-1">
			<label class="form-label">Observaciones</label>
			<textarea class="form-control" placeholder="Ingrese sus observaciones" rows="3"></textarea>
		</div>
		</form>
        {/* <!--Fin-- SegundaSectionDown---> */}
    </div>
  )
}
export default FormularioDown