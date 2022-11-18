import { ADD_DOMICILIOS, ADD_ONEDOMICILIO } from "../types/domiciliosTypes";

export const addDomicilios = (payload) =>{
    return {
        type : ADD_DOMICILIOS,
        payload,
    };
}
export const addOneDomicilio=(payload)=>{
    return{
        type : ADD_ONEDOMICILIO,
        payload,
    };
}