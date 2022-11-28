import { GET_INPUTS_VALUE } from "../types/liquidacionTypes"

export const getInputValues =(payload)=>{
    return{
        type: GET_INPUTS_VALUE,
        payload
    }
}