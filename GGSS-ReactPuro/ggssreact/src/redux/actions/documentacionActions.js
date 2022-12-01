import { GET_DOC_EMPL, GET_INPUT_VALUE, RESET_VALUE } from "../types/documentacionTypes"

export const getInputValue=(payload)=>{
    return {
        type : GET_INPUT_VALUE,
        payload,
    };
}
export const getOneDocumento=(payload)=>{
    return {
        type : GET_DOC_EMPL,
        payload,
    };
}
export const resetValue=(payload)=>{
    return {
        type : RESET_VALUE,
        payload
    }
}