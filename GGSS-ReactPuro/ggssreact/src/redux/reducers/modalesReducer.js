import { ADD_SELECTED_EC, ADD_SELECTED_ESTUDIO, GET_ESTUDIOS, CANCEL_MODALS, GET_ESTADOSCIVILES, ADD_SELECTED_TIPODOC, GET_TIPOSDOC, ADD_SELECTED_PARENTESCO, GET_PARENTESCOS, ADD_SELECTED_ESTADO, GET_ESTADOS, ADD_SELECTED_FORMAPAGO, GET_FORMASPAGO, ADD_SELECTED_CARGO, GET_CARGOS, ADD_SELECTED_TAREA, GET_TAREAS, ADD_SELECTED_MODOLIQ, GET_MODOSLIQ, ADD_SELECTED_BANCO, GET_BANCOS, ADD_SELECTED_CENTROCOSTO, GET_CENTROSCOSTO, ADD_SELECTED_SINDICATO, GET_SINDICATOS, ADD_SELECTED_PROVINCIA, GET_PROVINCIAS, ADD_SELECTED_DEPTO, GET_DEPTOS, ADD_SELECTED_LOCALIDAD, GET_LOCALIDADES, ADD_SELECTED_BARRIO, GET_BARRIOS, ADD_SELECTED_MODOCONT, GET_MODOSCONT } from "../types/modalesTypes";

export const initialState = {
    estadoCivilSelected: "",
    estudioSelected: "",
    tipoDocumentoSelected: "",
    parentescoSelected: "",
    estadoSelected: "",
    formaPagoSelected: "",
    cargoSelected: "",
    tareaSelected: "",
    calleSelected: "",
    modoContSelected: "",
    modoLiqSelected: "",
    provinciaSelected: "",
    deptoSelected: "",
    localidadSelected: "",
    barrioSelected: "",
    bancoSelected: "",
    sindicatoSelected: "",
    centroCostoSelected: "",
    formulario: {
        // estados civiles
        inputEstadosCivilesModal: "",
        inputEstadosCivilesModalFem: "",
        // estudios
        inputNivelEstudio: "",
        // tipos de documento
        inputTipoDocumento: "",
        // parentescos
        inputParentesco: "",
        inputAsignacionParent: "",
        inputGananciaParent: "",
        inputImporteParent: "",
        textAreaParent: "",
        // estados para los empleados
        inputEstado: "",
        // formas de pago
        inputFormaPago: "",
        textAreaFormaPago: "",
        // cargos
        inputCargo : "",
        textAreaCargo : "",
        // tareas desempeñadas
        inputTarea : "",
        textAreaTarea : "",
        // modos de contratación
        inputModoCont: "",
        inputVtoModoCont: "",
        // modos de liquidación
        inputModoLiquidacion : "",
        textAreaModosLiq : "",
        // provincias
        inputProvincia: "",
        textAreaProvincia: "",
        // deptos
        labelDeptos: "",
        inputDepto: "",
        textAreaDeptos: "",
        // localidades
        labelLocalidades: "",
        inputLocalidad: "",
        textAreaLocalidades: "",
        // barrios
        labelBarrios: "",
        inputBarrios: "",
        textAreaBarrios: "",

        /// ---------------- PARA LIQUIDACION (NO VAN) --------------
        // bancos
        inputBanco: "",
        textAreaBanco: "",
        // sindicatos
        inputSindicato: "",
        inputAbreviaturaSindicato: "",
        textAreaSindicato: "",
        // centros de costos
        inputCentroCosto: "",
        textAreaCentroCosto: ""
    }
}

const modalesReducer = (state = initialState, action) => {

    const { type, payload } = action;
    switch (type) {
        case ADD_SELECTED_EC: {
            return {
                ...state,
                estadoCivilSelected: payload

            };
        }
        case GET_ESTADOSCIVILES: {
            return {
                ...state,
                formulario: { ...state.formulario, [payload.name]: payload.value }
            }
        }


        case ADD_SELECTED_ESTUDIO: {
            return {
                ...state,
                estudioSelected: payload
            }
        }
        case GET_ESTUDIOS: {
            return {
                ...state,
                formulario: { ...state.formulario, [payload.name]: payload.value }
            }
        }

        case ADD_SELECTED_TIPODOC: {
            return {
                ...state,
                tipoDocumentoSelected: payload
            }
        }
        case GET_TIPOSDOC: {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value }
            }
        }

        case ADD_SELECTED_PARENTESCO : {
            return {
                ...state,
                parentescoSelected: payload

            }
        }
        case GET_PARENTESCOS : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value}

            }
        }

        case ADD_SELECTED_ESTADO : {
            return {
                ...state,
                estadoSelected: payload
            }
        }
        case GET_ESTADOS : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value}
            }
        }

        case ADD_SELECTED_FORMAPAGO : {
            return {
                ...state,
                formaPagoSelected: payload
            }
        }
        case GET_FORMASPAGO : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value}
            }
        }

        case ADD_SELECTED_CARGO : {
            return {
                ...state,
                cargoSelected: payload
            }
        }
        case GET_CARGOS : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value}
            }
        }

        case ADD_SELECTED_TAREA : {
            return {
                ...state,
                tareaSelected: payload
            }
        }
        case GET_TAREAS : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value}
            }
        }

        case ADD_SELECTED_MODOCONT : {
            return {
                ...state,
                modoContSelected: payload
            }
        }
        case GET_MODOSCONT : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value}
            }
        }


        case ADD_SELECTED_MODOLIQ : {
            return {
                ...state,
                modoLiqSelected: payload
            }
        }
        case GET_MODOSLIQ : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value}
            }
        }

        case ADD_SELECTED_PROVINCIA : {
            return {
                ...state,
                provinciaSelected: payload
            }
        }
        case GET_PROVINCIAS : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value}
            }
        }

        case ADD_SELECTED_DEPTO : {
            return {
                deptoSelected: payload
            }
        }
        case GET_DEPTOS : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value}
            }
        }

        case ADD_SELECTED_LOCALIDAD : {
            return {
                localidadSelected: payload
            }
        }
        case GET_LOCALIDADES : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value}
            }
        }

        case ADD_SELECTED_BARRIO : {
            return {
                barrioSelected: payload
            }
        }
        case GET_BARRIOS : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value}
            }
        }
        













        // PARA LIQUIDACION (NO VAN) ----------------------------------
        case ADD_SELECTED_BANCO : {
            return {
                ...state,
                bancoSelected: payload
            }
        }
        case GET_BANCOS : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value}
            }
        }

        case ADD_SELECTED_SINDICATO : {
            return {
                ...state,
                sindicatoSelected: payload
            }
        }

        case GET_SINDICATOS : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value}
            }
        }

        case ADD_SELECTED_CENTROCOSTO : {
            return {
                ...state,
                centroCostoSelected: payload
            }
        }
        case GET_CENTROSCOSTO : {
            return {
                ...state,
                formulario: {...state.formulario, [payload.name]: payload.value}
            }
        }


        /// -------------- BTN CANCELAR
        case CANCEL_MODALS: {
            debugger;
            let newForm = { ...state.formulario }
            return {
                ...state,
                formulario: Object.keys(newForm).reduce((acc, curr) => ({ ...acc, [curr]: "" }), {})
            }
        }


        default:
            return state;
    }
}

export default modalesReducer;