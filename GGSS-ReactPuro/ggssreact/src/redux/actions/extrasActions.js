import { GET_INPUT_VALUES_EXTRAS } from "../types/extrasTypes"

export const getInputValuesExtras =(payload)=>{
    return {
        type : GET_INPUT_VALUES_EXTRAS,
        payload,
    };
}