import React from 'react'

const SectionTabla = () => {
  return (
    <div>
        
        {/* <!------Section Tabla-------> */}
		    <form action="" class="formularioTabla">
	      {/* <!----TABLA -----------------> */}

        <div  class="tablaDomicilio">
        <div class="container p-2 my-2 col-11">
          <table class="table-danger table-striped">
            <thead>
              <tr>
              <th scope="col">Predeterminado</th>
              <th scope="col">Calle</th>
              <th scope="col">Número</th>
              <th scope="col">Barrio</th>
              <th scope="col">Localidad</th>
              <th scope="col">Piso/Of/Dpto</th>
              </tr>
            </thead>
           <tbody class="table-group-divider" id="cuerpodetabla" >
           <th scope="row">
           <input type="text" id="capitulo" placeholder="Predeterminado"></input> 
           </th>
           <th scope="row">
           <input type="text" id="opcion1" placeholder="Calle"></input>
           </th>
           <th scope="row">
           <input type="text" id="opcion2" placeholder="Número"></input>
           </th>
           <th scope="row">
           <input type="text" id="opcion3" placeholder="Barrio"></input>
           </th>
           <th scope="row">
           <input type="text" id="opcion2" placeholder="Localidad"></input>
           </th>
           <th scope="row">
           <input type="text" id="opcion3" placeholder="Piso/Of/Dpto"></input>
           </th>
          

           
            {/* <div class="formulariover"> */}
              {/* <div id="inputseditar" class="ocultareditar formularioeditar"> */}
              {/* <div class="inputsver"> */}
                {/* <!-- <h3>Editar</h3> --> */}
                {/* <input type="text" id="editaropcion1" placeholder="editaropcion1"></input> */}
                {/* <input type="text" id="editaropcion2" placeholder="editaropcion2"></input> */}
                {/* <input type="text" id="editaropcion3" placeholder="editaropcion3"></input> */}
                {/* <input type="text" id="editaropcion4" placeholder="editaropcion4"></input> */}
                {/* <input type="text" id="memoria"></input> */}
              {/* </div> */}
              {/* <div class="botoneditar"> */}
                {/* <button type="submit" id="enviaredicion" class="botonenviaredicion">Cambiar</button> */}
              {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            </tbody>
          </table>
        
        </div>
        </div>
       
           

          
             {/* <!-- <div class="formularioeditar"> 
              <input type=text id="filtro"></input>
              <button type="button" id="botonfiltro">Buscar</button>
            </div> --> */}

          <div class="formularioButton aceptarCancelar">
            {/* <!-- Grupo: Div Vacio--> */}
            <div class="formulario__grupo" >
              
            </div>

            {/* <!-- Grupo: Boton Cancelar --> */}
            <div class="formulario__grupo aceptarCancelar div-buttons">
              <div class="formulario__grupo-input">
                <button type="submit" class="formulario__btn ">Quitar</button>
              </div>
              <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>

              {/* <!-- Grupo: Boton Aceptar --> */}
              <div class="formulario__grupo-input">
                <button type="submit" class="formulario__btn">Agregar</button>
              </div>
              <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
            </div>
          </div>
          </form>
    </div>
  )
}

export default SectionTabla