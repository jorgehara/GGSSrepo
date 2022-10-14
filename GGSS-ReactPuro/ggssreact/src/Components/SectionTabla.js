import React from 'react'

const SectionTabla = () => {
  return (
    <div>
        
        {/* <!------Section Tabla-------> */}
		    <form action="" class="formularioTabla">
	      {/* <!----TABLA -----------------> */}
        <div class="container " >
          <table class="table table-dark table-striped">
            <thead>
              <tr>
              <th scope="col">Opción 1</th>
              <th scope="col">Opción 2</th>
              <th scope="col">Opción 3</th>
              <th scope="col">Opción 4</th>
              <th scope="col">Modificar</th>
              </tr>
            </thead>
            <tbody class="table-group-divider" id="cuerpodetabla" >
              
            </tbody>
          </table>
        </div>
            <div class="formulariover">
              <div class="inputsver">
                <input type="text" id="capitulo" placeholder="Opción 1"></input>
                <input type="text" id="opcion1" placeholder="Opción 2"></input>
                <input type="text" id="opcion2" placeholder="Opción 3"></input>
                <input type="text" id="opcion3" placeholder="Opción 4"></input>
              </div>
              <div class="botonesver">
                <button type="submit" id="enviarver" class="botontabla">Agregar</button>
                <button type="button" id="autocompletar" class="botontabla">Agregar primeros</button>

              </div>
            </div>

            <div id="inputseditar" class="ocultareditar formularioeditar">
              <div class="inputsver">
                {/* <!-- <h3>Editar</h3> --> */}
                <input type="text" id="editaropcion1" placeholder="editaropcion1"></input>
                <input type="text" id="editaropcion2" placeholder="editaropcion2"></input>
                <input type="text" id="editaropcion3" placeholder="editaropcion3"></input>
                <input type="text" id="editaropcion4" placeholder="editaropcion4"></input>
                <input type="text" id="memoria"></input>
              </div>
              <div class="botoneditar">
                <button type="submit" id="enviaredicion" class="botonenviaredicion">Cambiar</button>
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