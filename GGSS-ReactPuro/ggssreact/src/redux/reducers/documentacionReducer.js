import { GET_DOC_EMPL, GET_INPUT_VALUE } from "../types/documentacionTypes";

export const initialState = {
    domiciliosDelEmpleado : "",
    formulario : {
        inputDatePresentacion : "",
        inputDateVencimiento : "",
        inputSelectDocumentacion : "",
        textAreaDocumentacion : "",
        inputCheckLiquidacion : "",
        inputIncluirCuotaAlim : ""
    }
}

export const documentacionReducer=(state = initialState, action)=>{
 const {type , payload} = action;

 switch(type){
    case GET_INPUT_VALUE : {
        console.log(payload)
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
    default : return state
 }
}