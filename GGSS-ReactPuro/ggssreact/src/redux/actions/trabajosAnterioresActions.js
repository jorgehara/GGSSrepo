import { ADD_TRABAJO_ANTERIOR, DELETE_ONE_TRABAJO, GET_ID_TRABAJO, GET_INPUT, GET_TANTERIORES, GET_TRABAJO } from "../types/trabajosAnteriores"

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
export const addTrabajoAnterior=(payload)=>{
    return{
        type :ADD_TRABAJO_ANTERIOR,
        payload,
    }
}
export const getIdTrabajoAnterior=(payload)=>{
    return{
        type : GET_ID_TRABAJO,
        payload,
    }
}
export const deleteOneTrabajo =(payload)=>{
    return{
        type : DELETE_ONE_TRABAJO,
        payload
    }
}
export const addTrabajo=(payload)=>{
    return{
        type : GET_TRABAJO,
        payload,
    };
}