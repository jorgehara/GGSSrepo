import { ADD_FAMILIA, ADD_FAMILIAR, ADD_FAMILIAR_ID } from "../types/familiaTypes";

export const addFamilia = (payload) =>{
    return {
        type : ADD_FAMILIA,
        payload,
    };
}
export const addNewFamiliar=(payload)=>{
    return {
        type : ADD_FAMILIAR_ID,
        payload
    }
}
export const addFamiliar=(payload)=>{
    return{
        type : ADD_FAMILIAR,
        payload,
    };
}