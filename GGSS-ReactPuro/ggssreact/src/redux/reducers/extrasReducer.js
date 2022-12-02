import { GET_INPUT_VALUES_EXTRAS } from "../types/extrasTypes";

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
    }
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
        default : return state;
    }
}