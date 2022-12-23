import {  GET_DE_SELECTED, GET_INPUT_VALUES_EXTRAS } from "../types/extrasTypes";

export const initialState = {
    formulario : {
        inputDatosExtrasCbo : "",
        inputFechaExtras : "",
        inputTextExtras : "",
        inpútAdscriptoExtras : "",
        inputInstrumLegal : "",
        inputAfectacionesExtras : "",
        inputInstrumLegalAfectaciones : "",
        inputSectorExtras : "",
        inputDireccionesExtras : "",
        inputTextExtrasAdscripto : "",
        inputTextExtrasAfectaciones : ""
    },
    datoExtra : ""
}

export const extrasReducer =(state = initialState, action)=>{
    const {type, payload} = action;

    switch(type){
        case GET_INPUT_VALUES_EXTRAS :{
            return {
                ...state,
                formulario : {...state.formulario, [payload.name]:payload.value}
            }
        }
        case GET_DE_SELECTED : {
            return {
                ...state,
                datoExtra : payload
            }
        }
        default : return state;
    }
}