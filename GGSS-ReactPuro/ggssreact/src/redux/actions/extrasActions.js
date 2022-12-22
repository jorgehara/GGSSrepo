import { GET_DE_SELECTED, GET_INPUT_VALUES_EXTRAS } from "../types/extrasTypes"

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