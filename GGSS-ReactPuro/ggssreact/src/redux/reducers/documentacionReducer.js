import { ADD_NEW_DOC, GET_DOC_EMPL, GET_DOC_SELECT, GET_INPUT_VALUE } from "../types/documentacionTypes";

export const initialState = {
    domiciliosDelEmpleado : "",
    formulario : {
        inputDatePresentacion : "",
        inputDateVencimiento : "",
        inputSelectDocumentacion : "",
        textAreaDocumentacion : "",
        inputCheckLiquidacion : "",
        inputIncluirCuotaAlim : ""
    },
    documentacionSeleccionada : ""
}

export const documentacionReducer=(state = initialState, action)=>{
 const {type , payload} = action;

 switch(type){
    case GET_INPUT_VALUE : {
        return{
            ...state,
            formulario : {...state.formulario, [payload.name]:payload.value}
        }
    }
    case GET_DOC_EMPL : {
        return {
            ...state,
            domiciliosDelEmpleado : payload
        }
    }
    case GET_DOC_SELECT : {
        return {
            ...state,
            documentacionSeleccionada : payload
        }
    }
    default : return state
 }
}