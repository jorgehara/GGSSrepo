import { OPTIONS_FORMULARIO, SELECTED_OPTION } from "../types/LicenciasTypes"

export const selectedOption=(payload)=>{
    return{
        type : SELECTED_OPTION,
        payload,
    };
}
export const inputsValueFomr =(payload)=>{
    return {
        type : OPTIONS_FORMULARIO,
        payload,
    };
}