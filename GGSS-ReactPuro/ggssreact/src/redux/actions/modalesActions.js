import { CANCEL_MODALS, ADD_SELECTED_EC, GET_ESTADOSCIVILES, ADD_SELECTED_ESTUDIO, GET_ESTUDIOS, ADD_PETITION_VALUE, ADD_SELECTED_TIPODOC, GET_TIPOSDOC, ADD_SELECTED_PARENTESCO, GET_PARENTESCOS, ADD_SELECTED_ESTADO, GET_ESTADOS } from "../types/modalesTypes"

export const addSelectedEstadoCivil = (payload) => {
    return {
        type: ADD_SELECTED_EC,
        payload
    }
}
export const getEstadosCiviles = (payload) => {
    return {
        type: GET_ESTADOSCIVILES,
        payload
    }
}

export const addSelectedEstudio = (payload) => {
    return {
        type: ADD_SELECTED_ESTUDIO,
        payload
    }
}

export const getEstudios = (payload) => {
    return {
        type: GET_ESTUDIOS,
        payload
    }
}


export const addSelectedTipoDocu = (payload) => {
    return {
        type: ADD_SELECTED_TIPODOC,
        payload
    }
}
export const getTiposDoc = (payload) => {
    return {
        type: GET_TIPOSDOC,
        payload
    }
}

export const addSelectedParentesco = (payload) => {
    return {
        type: ADD_SELECTED_PARENTESCO,
        payload
    }
}
export const getParentescos = (payload) => {
    return {
        type: GET_PARENTESCOS,
        payload
    }
}

export const addSelectedEstado = (payload) => {
    return {
        type: ADD_SELECTED_ESTADO,
        payload
    }
}
export const getEstados = (payload) => {
    return {
        type: GET_ESTADOS,
        payload
    }
}










export const cancelModals = (payload) => {
    return {
        type: CANCEL_MODALS,
        payload
    };
}
