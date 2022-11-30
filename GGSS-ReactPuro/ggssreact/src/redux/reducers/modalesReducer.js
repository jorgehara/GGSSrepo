import { ADD_NEW_ESCI, ADD_SELECTED_EC, CANCEL_MODALS, GET_ESTADOSCIVILES } from "../types/modalesTypes";

export const initialState = {
    estadoCivilSelected : "",
    formulario : {
        inputEstadosCivilesModal : "",
        inputEstadosCivilesModalFem : ""
    }
}

const modalesReducer = (state = initialState, action) =>{

    const { type, payload }  = action;
    switch(type) {
        case ADD_SELECTED_EC : {
            return {
                ...state,
                estadoCivilSelected :  payload
                
            };
        }
        case GET_ESTADOSCIVILES : {
            return {
                ...state,
                formulario : {...state.formulario, [payload.name]:payload.value}
            }
        }
        case CANCEL_MODALS : {
            debugger;
            let newForm = {...state.formulario}
            return {
                ...state,
                formulario : Object.keys(newForm).reduce((acc, curr)=> ({...acc, [curr]: ""}), {})
            }
        }
       

        default :
        return state;
    }
}

export default  modalesReducer;