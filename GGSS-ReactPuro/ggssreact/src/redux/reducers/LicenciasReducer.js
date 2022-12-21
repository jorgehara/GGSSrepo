import { ADD_DETALLE_LICENCIA, ADD_NEW_DETALLE, ADD_ONE_LICENCIA, ADD_SELECT_DETALLE, DELETE_DET_LIC, OPTIONS_FORMULARIO, SELECTED_OPTION, UPDATE_DETALLE,  } from "../types/LicenciasTypes";

export const initialState = {
    selectedOptionLicencia : "",
    formulario : {
        inputOpcionsLicencias : ""
    },
    licenciaEmpleado : "",
    detalleLicencia : "",
    detalleSelect : ""
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
        default :
        return state;
    }
}
