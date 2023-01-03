import { CANCEL_MODALS, ADD_SELECTED_EC, GET_ESTADOSCIVILES, ADD_SELECTED_ESTUDIO, GET_ESTUDIOS, ADD_SELECTED_TIPODOC, GET_TIPOSDOC, ADD_SELECTED_PARENTESCO, GET_PARENTESCOS, ADD_SELECTED_ESTADO, GET_ESTADOS, ADD_SELECTED_FORMAPAGO, GET_FORMASPAGO, ADD_SELECTED_CARGO, GET_CARGO, GET_CARGOS, ADD_SELECTED_TAREA, GET_TAREAS, ADD_SELECTED_MODOLIQ, GET_MODOSLIQ, ADD_SELECTED_BANCO, GET_BANCOS, ADD_SELECTED_OBRASOCIAL, GET_OBRASSOCIALES, ADD_SELECTED_CENTROCOSTO, GET_CENTROSCOSTO, ADD_SELECTED_SINDICATO, GET_SINDICATOS, ADD_SELECTED_PROVINCIA, GET_PROVINCIAS, ADD_SELECTED_DEPTO, GET_DEPTOS, ADD_SELECTED_LOCALIDAD, GET_LOCALIDADES, ADD_SELECTED_BARRIO, GET_BARRIOS } from "../types/modalesTypes"

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

export const addSelectedFormaPago = (payload) => {
    return {
        type: ADD_SELECTED_FORMAPAGO,
        payload
    }
}
export const getFormasPago = (payload) => {
    return {
        type: GET_FORMASPAGO,
        payload
    }
}

export const addSelectedCargo = (payload) => {
    return {
        type: ADD_SELECTED_CARGO,
        payload
    }
}
export const getCargos = (payload) => {
    return {
        type: GET_CARGOS,
        payload
    }
}

export const addSelectedTarea = (payload) => {
    return {
        type: ADD_SELECTED_TAREA,
        payload
    }
}
export const getTareas = (payload) => {
    return {
        type: GET_TAREAS,
        payload
    }
}

export const addSelectedModoLiq = (payload) => {
    return {
        type: ADD_SELECTED_MODOLIQ,
        payload
    }
}
export const getModosLiq = (payload) => {
    return {
        type: GET_MODOSLIQ,
        payload
    }
}

export const addSelectedProvincia = (payload) => {
    return {
        type: ADD_SELECTED_PROVINCIA,
        payload
    }
}
export const getProvincias = (payload) => {
    return {
        type: GET_PROVINCIAS,
        payload
    }
}

export const addSelectedDepto = (payload) => {
    return {
        type: ADD_SELECTED_DEPTO,
        payload
    }
}
export const getDeptos = (payload) => {
    return {
        type: GET_DEPTOS,
        payload
    }
}

export const addSelectedLocalidad = (payload) => {
    return {
        type: ADD_SELECTED_LOCALIDAD,
        payload
    }
}
export const getLocalidades = (payload) => {
    return {
        type: GET_LOCALIDADES,
        payload
    }
}

export const addSelectedBarrio = (payload) => {
    return {
        type: ADD_SELECTED_BARRIO,
        payload
    }
}
export const getBarrios = (payload) => {
    return {
        type: GET_BARRIOS,
        payload
    }
}











// PARA LIQUIDACION (NO VAN)
export const addSelectedBanco = (payload) => {
    return {
        type: ADD_SELECTED_BANCO,
        payload
    }
}
export const getBancos = (payload) => {
    return {
        type: GET_BANCOS,
        payload
    }
}

export const addSelectedSindicato = (payload) => {
    return {
        type: ADD_SELECTED_SINDICATO,
        payload
    }
}
export const getSindicatos = (payload) => {
    return {
        type: GET_SINDICATOS,
        payload
    }
}

export const addSelectedCentroCosto = (payload) => {
    return {
        type: ADD_SELECTED_CENTROCOSTO,
        payload
    }
}
export const getCentrosCosto = (payload) => {
    return {
        type: GET_CENTROSCOSTO,
        payload
    }
}










export const cancelModals = (payload) => {
    return {
        type: CANCEL_MODALS,
        payload
    };
}
