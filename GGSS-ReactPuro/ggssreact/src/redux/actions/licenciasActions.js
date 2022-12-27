import { UPDATE_LICENCIA } from "../types/fetchTypes";
import { ADD_DETALLE_LICENCIA, ADD_NEW_DETALLE, ADD_NEW_LICENCIA, ADD_ONE_LICENCIA, ADD_SELECT_DETALLE, CLEAN_IDS, CLEAR_LIC_SELECT, DELETE_DET_LIC, DELETE_LIST_ITEM, DELETE_ONE_LICENCIA, OPTIONS_FORMULARIO, RELOAD_ITEM, SAVE_ID, SELECTED_OPTION, UPDATE_DETALLE } from "../types/LicenciasTypes"

export const selectedOption=(payload)=>{
    return{
        type : SELECTED_OPTION,
        payload,
    };
}
export const inputsValueFomr =(payload)=>{
    return {
        type : OPTIONS_FORMULARIO,
        payload,
    };
}
export const addOneLicencia=(payload)=>{
    return{
        type: ADD_ONE_LICENCIA,
        payload,
    };
}
export const addDetalleLicencia=(payload)=>{
    return{
        type : ADD_DETALLE_LICENCIA,
        payload,
    }
}
export const addSelectDetalle=(payload)=>{
    return{
        type : ADD_SELECT_DETALLE,
        payload,
    };
}


export const updateDetalle=(payload)=>{
    return{
        type: UPDATE_LICENCIA,
        payload
    }
}
export const addNewDetalle=(payload)=>{
    return{
        type: ADD_NEW_DETALLE,
        payload,
    };
}
export const deleteDetLic=(payload)=>{
    return{
        type : DELETE_DET_LIC,
        payload,
    };
}

export const clearLicSelect =(payload)=>{
    return{
        type: CLEAR_LIC_SELECT,
        payload
    }
}

export const deleteListItem=(payload)=>{
    return{
        type : DELETE_LIST_ITEM,
        payload,
    }
}
export const deleteOneLicencia =(payload)=>{
    return{
        type : DELETE_ONE_LICENCIA,
        payload
    }
}
export const reloadItem=(payload)=>{
    return{
        type : RELOAD_ITEM,
        payload
    }
}
export const saveId=(payload)=>{
    return {
        type: SAVE_ID,
        payload
    }
}
export const cleanIds=(payload)=>{
    return{
        type : CLEAN_IDS,
        payload
    }
}