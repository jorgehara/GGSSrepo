import { Action } from "@remix-run/router";
import { ADD_DOMICILIOS, ADD_NEW_DOMICILIO, ADD_ONEDOMICILIO, DELETE_ONE_DOMICILIO, SELECT_BARRIO, SELECT_DEPARTAMENTO, SELECT_ID_DOMICILIO, SELECT_PROVINCIA, SET_PREDETERMINADO } from "../types/domiciliosTypes";

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
export const selectedOption=(payload)=>{
    return{
        type : SELECT_PROVINCIA,
        payload,
    };
}
export const selectedOptionDpto=(payload)=>{
    return{
        type : SELECT_DEPARTAMENTO,
        payload,
    };
}
export const selectedOptionBarrio=(payload)=>{
    return{
        type : SELECT_BARRIO,
        payload,
    };
}
export const selectedIdDomicilio=(payload)=>{
    return{
        type : SELECT_ID_DOMICILIO,
        payload
    };
}
export const addNewDomicilio=(payload)=>{
    return{
        type : ADD_NEW_DOMICILIO,
        payload,
    };
}
export const deleteOneDomicilio=(payload)=>{
    return{
        type : DELETE_ONE_DOMICILIO,
        payload,
    };
}
export const setPredeterminado=(payload)=>{
    return {
        type : SET_PREDETERMINADO,
        payload,
    }
}