import { OPTIONS_FORMULARIO, SELECTED_OPTION } from "../types/LicenciasTypes";

export const initialState = {
    selectedOptionLicencia : "",
    formulario : {
        inputOpcionsLicencias : ""
    }
}

export const licenciasReducer=(state = initialState, action)=>{
    const {type, payload} = action;

    switch(type){
        case SELECTED_OPTION : {
            return {
                ...state,
                selectedOptionLicencia : payload
            }
        }
        case OPTIONS_FORMULARIO : {
            return {
                ...state,
                formulario : {...state.formulario, [payload.name]:payload.value}
            }
        }
        default :
        return state;
    }
}