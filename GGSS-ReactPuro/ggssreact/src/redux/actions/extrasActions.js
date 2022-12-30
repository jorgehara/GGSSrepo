import { ADD_DATOSE_EMP, CLEAN_ID_DE, GET_DE_SELECTED, GET_INPUT_VALUES_EXTRAS, SAVE_ID_DE } from "../types/extrasTypes"

export const getInputValuesExtras =(payload)=>{
    return {
        type : GET_INPUT_VALUES_EXTRAS,
        payload,
    };
}
export const getDatoExtraSelected=(payload)=>{
    return {
        type: GET_DE_SELECTED,
        payload,
    }
}
export const saveIdDe=(payload)=>{
    return {
        type: SAVE_ID_DE,
        payload,
    }
}
export const cleanIdDe=(payload)=>{
    return {
        type: CLEAN_ID_DE,
        payload,
    }
}
export const addDatosExtraPorEmpleado=(payload)=>{
    console.log(payload)
    return {
        type: ADD_DATOSE_EMP,
        payload,
    }
}