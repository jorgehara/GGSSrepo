import { GET_INPUT, GET_INPUT_DESCRIPCION, GET_INPUT_DESDE, GET_INPUT_HASTA, GET_TANTERIORES } from "../types/trabajosAnteriores"

export const getTrabajosAnteriores=(payload)=>{
    return{
        type : GET_TANTERIORES,
        payload
    };
}


export const getInput=(payload)=>{
    return{
        type : GET_INPUT,
        payload
    };
}