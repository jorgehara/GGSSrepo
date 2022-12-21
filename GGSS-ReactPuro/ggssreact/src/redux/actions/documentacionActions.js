import { ADD_NEW_DOC, GET_DOC_EMPL, GET_DOC_SELECT, GET_INPUT_VALUE, RESET_VALUE } from "../types/documentacionTypes"

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
export const getDocSelect=(payload)=>{
    return {
        type : GET_DOC_SELECT,
        payload,
    }
}