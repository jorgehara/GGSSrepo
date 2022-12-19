import { GET_INPUT, GET_TANTERIORES, ADD_TRABAJO_ANTERIOR, GET_ID_TRABAJO,DELETE_ONE_TRABAJO, GET_TRABAJO } from "../types/trabajosAnteriores";


const initialState = {
    trabajosAnteriores : "",
    formulario : {
        idDateDesde : "",
        idDateHasta : "",
        idDescripcionTrabajos : "",
        idCheckTrabajos : false
    },
    idTrabajoAnterior : 0,
    trabajoAnterior : ""
}

const trabajosAnterioresReducer = (state = initialState, action) =>{

    const { type, payload }  = action;

    switch(type) {

        case GET_TANTERIORES : {
            return {
                ...state,
                trabajosAnteriores : payload
                
            };
        }
        case GET_INPUT : {
            return {
                ...state,
                formulario : {...state.formulario, [payload.name]:payload.value}
                
            };
        }
        case ADD_TRABAJO_ANTERIOR : {
            return {
                ...state,
                trabajosAnteriores : [...state.trabajosAnteriores, payload]
            }
        }
        case GET_ID_TRABAJO : {
            return {
                ...state,
                idTrabajoAnterior : payload
            }
        }
        case DELETE_ONE_TRABAJO : {
            return{
                ...state,
                trabajosAnteriores : state.trabajosAnteriores.filter((trab)=> trab.idTrabajoAnterior !== payload)
            }
        }
        case GET_TRABAJO : {
            return{
                ...state,
                trabajoAnterior : payload
            }
        }
        default :
        return state;
    }
}


export default trabajosAnterioresReducer;