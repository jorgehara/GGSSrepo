import { UPDATE_LICENCIA } from "../types/fetchTypes";
import { ADD_DETALLE_LICENCIA, ADD_NEW_DETALLE, ADD_NEW_LICENCIA, ADD_ONE_LICENCIA, ADD_SELECT_DETALLE, OPTIONS_FORMULARIO, SELECTED_OPTION, UPDATE_DETALLE } from "../types/LicenciasTypes"

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
export const addOneLicencia=(payload)=>{
    return{
        type: ADD_ONE_LICENCIA,
        payload,
    };
}
export const addDetalleLicencia=(payload)=>{
    return{
        type : ADD_DETALLE_LICENCIA,
        payload,
    }
}
export const addSelectDetalle=(payload)=>{
    return{
        type : ADD_SELECT_DETALLE,
        payload,
    };
}


export const updateDetalle=(payload)=>{
    return{
        type: UPDATE_LICENCIA,
        payload
    }
}
export const addNewDetalle=(payload)=>{
    return{
        type: ADD_NEW_DETALLE,
        payload,
    };
}