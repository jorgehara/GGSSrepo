import { ADD_SELECTED_EC, ADD_SELECTED_ESTUDIO, GET_ESTUDIOS, CANCEL_MODALS, GET_ESTADOSCIVILES } from "../types/modalesTypes";

export const initialState = {
    estadoCivilSelected : "",
    estudioSelected : "",
    formulario : {
        inputEstadosCivilesModal : "",
        inputEstadosCivilesModalFem : "",
        inputNivelEstudio : "",
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


        case ADD_SELECTED_ESTUDIO : {
            return{
                ...state,
                estudioSelected : payload
            }
        }
        case GET_ESTUDIOS : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]:payload.value }
            }
        }


        /// -----------------
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