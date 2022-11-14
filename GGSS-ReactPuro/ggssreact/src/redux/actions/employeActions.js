import { ADD_EMPLOYE, REMOVE_EMPLOYE, SELECTED_EMPLOYE,UPDATE_EMPLOYE } from "../types/employeTypes";

export const addEmploye = (payload) =>{
    return {
        type : ADD_EMPLOYE,
        payload,
    };
}
export const updateEmploye = (payload) =>{
    return {
        type : UPDATE_EMPLOYE,
        payload,
    };
}
export const removeEmploye = (payload) =>{
    return {
        type : REMOVE_EMPLOYE,
        payload,
    };
}
export const selectedEmploye = (payload) =>{
    return {
        type : SELECTED_EMPLOYE,
        payload,
    };
}