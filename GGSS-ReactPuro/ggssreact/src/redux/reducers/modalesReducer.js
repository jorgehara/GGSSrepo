import { ADD_SELECTED_EC, ADD_SELECTED_ESTUDIO, GET_ESTUDIOS, CANCEL_MODALS, GET_ESTADOSCIVILES, ADD_PETITION_VALUE, ADD_SELECTED_TIPODOC, GET_TIPOSDOC, ADD_SELECTED_PARENTESCO, GET_PARENTESCOS } from "../types/modalesTypes";

export const initialState = {
    estadoCivilSelected: "",
    estudioSelected: "",
    tipoDocumentoSelected: "",
    parentescoSelected: "",
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
        inputObsParent: "",
        // --------------
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