import { GET_INPUT, GET_TANTERIORES } from "../types/trabajosAnteriores";


const initialState = {
    trabajosAnteriores : "",
    formulario : {
        idDateDesde : "",
        idDateHasta : "",
        idDescripcionTrabajos : ""
    }
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
            console.log(payload)
            return {
                ...state,
                formulario : {...state.formulario, [payload.name]:payload.value}
                
            };
        }
        default :
        return state;
    }
}


export default trabajosAnterioresReducer;