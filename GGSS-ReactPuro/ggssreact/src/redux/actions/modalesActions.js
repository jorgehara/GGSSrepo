import { ADD_NEW_ESCI, ADD_SELECTED_EC, CANCEL_MODALS, GET_ESTADOSCIVILES } from "../types/modalesTypes"

export const addSelectedEstadoCivil=(payload)=>{
    return {
        type : ADD_SELECTED_EC,
        payload
    }
}
export const getEstadosCiviles =(payload)=>{
    return{
        type : GET_ESTADOSCIVILES,
        payload
    }
}
export const cancelModals=(payload)=>{
    return {
        type : CANCEL_MODALS,
        payload,
    };
}
