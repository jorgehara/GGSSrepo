import { ADD_FAMILIA } from "../types/familiaTypes";

export const addFamilia = (payload) =>{
    return {
        type : ADD_FAMILIA,
        payload,
    };
}