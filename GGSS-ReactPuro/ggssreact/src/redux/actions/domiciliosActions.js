import { ADD_DOMICILIOS } from "../types/domiciliosTypes";

export const addDomicilios = (payload) =>{
    return {
        type : ADD_DOMICILIOS,
        payload,
    };
}