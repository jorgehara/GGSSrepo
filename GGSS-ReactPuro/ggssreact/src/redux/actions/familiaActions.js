import { ADD_FAMILIA, ADD_FAMILIAR, ADD_FAMILIAR_ID, DATOS_FAMILIAR_X_EMPLEADO } from "../types/familiaTypes";

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
export const getDAtosFamiliaresEmpleado=(payload)=>{
    return{
        type: DATOS_FAMILIAR_X_EMPLEADO,
        payload
    }
}