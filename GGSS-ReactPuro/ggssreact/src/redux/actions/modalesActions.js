import { CANCEL_MODALS, ADD_SELECTED_EC, GET_ESTADOSCIVILES, ADD_SELECTED_ESTUDIO, GET_ESTUDIOS, ADD_PETITION_VALUE } from "../types/modalesTypes"

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


export const cancelModals = (payload) => {
    return {
        type: CANCEL_MODALS,
        payload
    };
}
