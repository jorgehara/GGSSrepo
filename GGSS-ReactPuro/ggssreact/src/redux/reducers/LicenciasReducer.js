import { ADD_DETALLE_LICENCIA, ADD_NEW_DETALLE, ADD_ONE_LICENCIA, ADD_SELECT_DETALLE, CLEAN_IDS, CLEAR_LIC_SELECT, DELETE_DET_LIC, DELETE_ONE_LICENCIA, OPTIONS_FORMULARIO, RELOAD_ITEM, SAVE_ID, SELECTED_OPTION, UPDATE_DETALLE,  } from "../types/LicenciasTypes";

export const initialState = {
    selectedOptionLicencia : "",
    formulario : {
        inputOpcionsLicencias : ""
    },
    licenciaEmpleado : "",
    detalleLicencia : "",
    detalleSelect : "",
    ids : ""

}

export const licenciasReducer=(state = initialState, action)=>{
    const {type, payload} = action;

    switch(type){
        case SELECTED_OPTION : {
            return {
                ...state,
                selectedOptionLicencia : payload
            }
        }
        case OPTIONS_FORMULARIO : {
            return {
                ...state,
                formulario : {...state.formulario, [payload.name]:payload.value}
            }
        }
        case ADD_ONE_LICENCIA : {
            return{
                ...state,
                licenciaEmpleado : payload
            }
        }
        case ADD_DETALLE_LICENCIA : {
            return {
                ...state,
                detalleLicencia : payload
            }
        }
        case ADD_SELECT_DETALLE : {
            return{
                ...state,
                detalleSelect : payload
            }
        }
       case DELETE_DET_LIC : {
        console.log(payload)
        return {
            ...state,
            detalleLicencia : state.detalleLicencia && state.detalleLicencia.filter((det)=> det.idDetalleLicenciaEmpleado !== payload)
        }
       }
        
        case UPDATE_DETALLE : {
            const newDetalle = {...payload}
            return{
                ...state.detalleLicencia,
                detalleLicencia : state.detalleLicencia.filter((detalle)=> detalle.idDetalleLicenciaEmpleado === newDetalle.idDetalleLicenciaEmpleado)
            }
        }
        case ADD_NEW_DETALLE : {
            return{
                ...state.detalleLicencia,
                detalleLicencia : [...state.detalleLicencia, payload]
            }
        }
        case CLEAR_LIC_SELECT : {
            return{
                ...state,
                licenciaEmpleado: {}
            }
        }
        case DELETE_ONE_LICENCIA : {
            return{
                ...state,
                LicenciaLicencia : state.LicenciaLicencia.filter((lic)=> lic.LicenciaLicencia !== payload)
            }
        }
        case RELOAD_ITEM : {
            return {
                ...state,
                LicenciaLicencia : state.LicenciaLicencia.push(payload)
            }
        }
        case SAVE_ID : {
            console.log(payload)
            return {
                ...state,
                ids : [...state.ids.push(payload)]
            }
        }
        case CLEAN_IDS : {
            return{
                ...state,
                ids : state.ids = []
            }
        }
        default :
        return state;
    }
}
