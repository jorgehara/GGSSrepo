import { GET_INPUTS_VALUE } from "../types/liquidacionTypes";


export const initialState = {
    formulario : {
        inputEmpleadorLiquidacion : "",
        inputConvenio : "",
        inputCategoria : "",
        inputAgrupamiento : "",
        inputCargo : "",
        inputTareaDesempeñada : "",
        inputModoCOntratacion : "",
        inputModoLiquidacion : "",
        inputCentroCosto : "",
        inputSectorDepto : "",
        inputObraSocial : "",
        inputFormaDePago : "",
        inputLugaresDePago : "",
        inputBanco : "",
        inputNumCta : "",
        inputCBU : "",
        inputRadioAsidePagos : "",
        inputDireccionLiquidacion : "",
        sindicatosLiquidacion : [],
        ingresoInput : "",
        ingresoDateInput : "",
        selectOptionsId : "",
        inputCheckEfectivo : "",
        inputDateEfectivo : "",
        inputCheckAsigna : "",
        inputTotalRemu : "",
        inputTotalNeto : "",
        inputCheckEmbargo : "",
        inputCheckSumAdministrativo : "",
        inputCheckLicSinGoce : ""
    }
}

export const liquidacionReducer =(state = initialState, action)=>{
    const { type, payload } = action;

    switch(type){
        case GET_INPUTS_VALUE : {
            console.log(payload)
            return{
                ...state,
                formulario : {...state.formulario, [payload.name]:payload.value}
            }
        }
        default : return  state;
    }
}