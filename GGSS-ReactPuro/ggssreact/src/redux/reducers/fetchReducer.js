import { ADD_CARGOS, ADD_ESTADOS, ADD_ESTADOSCIVILES, ADD_ESTUDIOS, ADD_PAISES, ADD_TIPOSDOCUMENTO, AXIOS_ERROR, SET_LOADING, ADD_TAREASDESEMPEÑADAS, ADD_PARENTESCOS, ADD_FORMASPAGO, ADD_MODOSCONTRATACION, ADD_MODOSLIQUIDACION, ADD_EMPLEADORES, ADD_DOMICLIOS, ADD_CALLES, ADD_DEPARTAMENTOS, ADD_LOCALIDADES, ADD_PROVINCIAS, ADD_BARRIOS, ADD_FAMILIARES, ADD_NEW_FAMILIAR, DELETE_ONE_FAMILIAR, ADD_CONVENIOS, ADD_CATEGORIAS, ADD_AGRUPAMIENTOS, ADD_CENTRO_COSTO, ADD_SECTOR_DEPTO, ADD_OBRAS_SOCIALES, ADD_LUGARES_DE_PAGO, ADD_BANCOS, ADD_DIRECCIONES, ADD_SINDICATOS, ADD_ESQUEMAS, ADD_NEW_ESCI, ADD_NEW_ESTUDIO, DELETE_ESCI, GET_ID_ESCI, GET_ID_ESTUDIO, DELETE_ESTUDIO, ADD_NEW_TIPODOC, GET_ID_TIPODOC, DELETE_TIPODOC, PUT_ESCI, PUT_ESTUDIO, PUT_TIPODOC, ADD_NEW_PARENTESCO, GET_ID_PARENTESCO, DELETE_PARENTESCO, PUT_PARENTESCO, ADD_NEW_ESTADO, GET_ID_ESTADO, DELETE_ESTADO, PUT_ESTADO, ADD_NEW_FORMAPAGO, GET_ID_FORMAPAGO, DELETE_FORMAPAGO, PUT_FORMAPAGO, ADD_NEW_CARGO, GET_ID_CARGO, DELETE_CARGO, PUT_CARGO, ADD_NEW_TAREA, GET_ID_TAREA, DELETE_TAREA, PUT_TAREA, ADD_NEW_MODOLIQ, GET_ID_MODOLIQ, DELETE_MODOLIQ, PUT_MODOLIQ, ADD_NEW_BANCO, ADD_NEW_OBRASOCIAL, ADD_NEW_CENTROCOSTO, GET_ID_BANCO, DELETE_BANCO, GET_ID_OBRASOCIAL, DELETE_OBRASOCIAL, GET_ID_CENTROCOSTO, DELETE_CENTROCOSTO, PUT_BANCO, PUT_OBRASOCIAL, PUT_CENTROCOSTO, ADD_NEW_SINDICATO, GET_ID_SINDICATO, DELETE_SINDICATO, PUT_SINDICATO, ADD_NEW_PROVINCIA, ADD_NEW_DEPTO, ADD_NEW_LOCALIDAD, ADD_NEW_BARRIO, GET_ID_PROVINCIA, DELETE_PROVINCIA, GET_ID_DEPTO, DELETE_DEPTO, GET_ID_LOCALIDAD, DELETE_LOCALIDAD, GET_ID_BARRIO, DELETE_BARRIO, PUT_PROVINCIA, PUT_DEPTO, PUT_LOCALIDAD, PUT_BARRIO } from "../types/fetchTypes";

export const initialState = {
    loading: false,
    data: "",
    estados: "",
    estadosCiviles: "",
    nacionalidades: "",
    paises: "",
    estudios: "",
    tiposDocumento: "",
    cargos: "",
    tareasDesempeñadas: "",
    parentescos: "",
    formasDePago: "",
    modosContratacion: "",
    modosLiquidacion: "",
    empleadores: "",
    domicilios: "",
    calles: "",
    provincias: "",
    departamentos: "",
    localidades: "",
    barrios: "",
    error: false,
    familiares: "",
    convenios: "",
    categorias: "",
    agrupamientos: "",
    centroCosto: "",
    sectorDepto: "",
    obrasSociales: "",
    lugaresDePago: "",
    bancos: "",
    direcciones: "",
    sindicatos: "",
    esquemas: "",
    //////////////
    idEstadoCivil: 0,
    idEstudio: 0,
    idTipoDoc: 0,
    idParentesco: 0,
    idEstado: 0,
    idFormaPago: 0,
    idCargo: 0,
    idTarea: 0,
    idModoLiq: 0,
    idBanco: 0,
    idSindicato: 0,
    idCentroCosto: 0,
    idProvincia: 0,
    idDepto: 0,
    idLocalidad: 0,
    idBarrio: 0
}

export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                loading: true,
                error: false,
                data: {}
            };
        case ADD_ESTADOS: {
            return {
                ...state,
                loading: false,
                estados: action.payload
            }
        }
        case ADD_ESTADOSCIVILES: {
            return {
                ...state,
                loading: false,
                estadosCiviles: action.payload
            }
        }
        case ADD_PAISES: {
            return {
                ...state,
                loading: false,
                paises: action.payload
            }
        }
        case ADD_ESTUDIOS: {
            return {
                ...state,
                loading: false,
                estudios: action.payload
            }
        }
        case ADD_TIPOSDOCUMENTO: {
            return {
                ...state,
                loading: false,
                tiposDocumento: action.payload
            }
        }
        case ADD_CARGOS: {
            return {
                ...state,
                loading: false,
                cargos: action.payload
            }
        }
        case ADD_TAREASDESEMPEÑADAS: {
            return {
                ...state,
                loading: false,
                tareasDesempeñadas: action.payload
            }
        }
        case ADD_PARENTESCOS: {
            return {
                ...state,
                loading: false,
                parentescos: action.payload
            }
        }
        case ADD_FORMASPAGO: {
            return {
                ...state,
                loading: false,
                formasDePago: action.payload
            }
        }
        case ADD_MODOSCONTRATACION: {
            return {
                ...state,
                loading: false,
                modosContratacion: action.payload
            }
        }
        case ADD_MODOSLIQUIDACION: {
            return {
                ...state,
                loading: false,
                modosLiquidacion: action.payload
            }
        }
        case ADD_EMPLEADORES: {
            return {
                ...state,
                loading: false,
                empleadores: action.payload
            }
        }
        case ADD_BARRIOS: {
            return {
                ...state,
                loading: false,
                barrios: action.payload
            }
        }
        case ADD_DOMICLIOS: {
            return {
                ...state,
                loading: false,
                domicilios: action.payload
            }
        }
        case ADD_CALLES: {
            return {
                ...state,
                loading: false,
                calles: action.payload
            }
        }
        case ADD_DEPARTAMENTOS: {
            return {
                ...state,
                loading: false,
                departamentos: action.payload
            }
        }
        case ADD_LOCALIDADES: {
            return {
                ...state,
                loading: false,
                localidades: action.payload
            }
        }
        case ADD_PROVINCIAS: {
            return {
                ...state,
                loading: false,
                provincias: action.payload
            }
        }
        case ADD_FAMILIARES: {
            return {
                ...state,
                loading: false,
                familiares: action.payload
            }
        }
        case ADD_NEW_FAMILIAR: {
            return {
                ...state.familiares,
                familiares: [...state.familiares, action.payload]
            }
        }
        case DELETE_ONE_FAMILIAR: {
            return {
                ...state.familiares,
                familiares: state.familiares.filter((fam) => fam.iDfamiliares !== action.payload)
            }
        }
        case ADD_CONVENIOS: {
            return {
                ...state,
                convenios: action.payload
            }
        }
        case ADD_CATEGORIAS: {
            return {
                ...state,
                categorias: action.payload
            }
        }
        case AXIOS_ERROR:
            return {
                error: true,
                loading: false,
                data: {}
            }
        case ADD_AGRUPAMIENTOS: {
            return {
                ...state,
                agrupamientos: action.payload
            }
        }
        case ADD_CENTRO_COSTO: {
            return {
                ...state,
                centroCosto: action.payload
            }
        }
        case ADD_SECTOR_DEPTO: {
            return {
                ...state,
                sectorDepto: action.payload
            }
        }
        case ADD_OBRAS_SOCIALES: {
            return {
                ...state,
                obrasSociales: action.payload
            }
        }
        case ADD_LUGARES_DE_PAGO:
            return {
                ...state,
                lugaresDePago: action.payload
            }
        case ADD_BANCOS: {
            return {
                ...state,
                bancos: action.payload
            }
        }
        case ADD_DIRECCIONES: {
            return {
                ...state,
                direcciones: action.payload
            }
        }
        case ADD_SINDICATOS: {
            return {
                ...state,
                sindicatos: action.payload
            }
        }
        case ADD_ESQUEMAS: {
            return {
                ...state,
                esquemas: action.payload
            }
        }



        // --------------- POST REDUX ---------------
        case ADD_NEW_ESCI: {
            return {
                ...state,
                estadosCiviles: [...state.estadosCiviles, action.payload]
            }
        }

        case ADD_NEW_ESTUDIO: {
            return {
                ...state,
                estudios: [...state.estudios, action.payload]
            }
        }

        case ADD_NEW_TIPODOC: {
            return {
                ...state,
                tiposDocumento: [...state.tiposDocumento, action.payload]
            }
        }

        case ADD_NEW_PARENTESCO: {
            return {
                ...state,
                parentescos: [...state.parentescos, action.payload]
            }
        }

        case ADD_NEW_ESTADO: {
            return {
                ...state,
                estados: [...state.estados, action.payload]
            }
        }

        case ADD_NEW_FORMAPAGO: {
            return {
                ...state,
                formasDePago: [...state.formasDePago, action.payload]
            }
        }

        case ADD_NEW_CARGO: {
            return {
                ...state,
                cargos: [...state.cargos, action.payload]
            }
        }

        case ADD_NEW_TAREA: {
            return {
                ...state,
                tareasDesempeñadas: [...state.tareasDesempeñadas, action.payload]
            }
        }

        case ADD_NEW_MODOLIQ: {
            return {
                ...state,
                modosLiquidacion: [...state.modosLiquidacion, action.payload]
            }
        }

        case ADD_NEW_PROVINCIA : {
            return {
                ...state,
                provincias: [...state.provincias, action.payload]
            }
        }
        case ADD_NEW_DEPTO : {
            return {
                ...state,
                departamentos: [...state.departamentos, action.payload]
            }
        }
        case ADD_NEW_LOCALIDAD : {
            return {
                ...state,
                localidades: [...state.localidades, action.payload]
            }
        }
        case ADD_NEW_BARRIO : {
            return {
                ...state,
                barrios: [...state.barrios, action.payload]
            }
        }


        // PARA LIQUIDACION (NO VAN)
        case ADD_NEW_BANCO: {
            return {
                ...state,
                bancos: [...state.bancos, action.payload]
            }
        }

        case ADD_NEW_SINDICATO: {
            return {
                ...state,
                sindicatos: [...state.sindicatos, action.payload]
            }
        }

        case ADD_NEW_CENTROCOSTO: {
            return {
                ...state,
                centroCosto: [...state.centroCosto, action.payload]
            }
        }



        // --------------- DELETE REDUX ---------------

        case GET_ID_ESCI: {
            return {
                ...state,
                idEstadoCivil: action.payload
            }
        }
        case DELETE_ESCI: {
            return {
                ...state,
                estadosCiviles: state.estadosCiviles.filter((esCi) => esCi.idEstadoCivil !== action.payload)
            }
        }

        case GET_ID_ESTUDIO: {
            return {
                ...state,
                idEstudio: action.payload
            }
        }
        case DELETE_ESTUDIO: {
            return {
                ...state,
                estudios: state.estudios.filter((estudio) => estudio.idEstudio !== action.payload)
            }
        }

        case GET_ID_TIPODOC: {
            return {
                ...state,
                idTipoDoc: action.payload
            }
        }
        case DELETE_TIPODOC: {
            return {
                ...state,
                tiposDocumento: state.tiposDocumento.filter((doc) => doc.idTipoDoc !== action.payload)
            }
        }

        case GET_ID_PARENTESCO: {
            return {
                ...state,
                idParentesco: action.payload
            }
        }
        case DELETE_PARENTESCO: {
            return {
                ...state,
                parentescos: state.parentescos.filter((parent) => parent.idParentesco !== action.payload)
            }
        }

        case GET_ID_ESTADO: {
            return {
                ...state,
                idEstado: action.payload
            }
        }
        case DELETE_ESTADO: {
            return {
                ...state,
                estados: state.estados.filter((estado) => estado.idEstado !== action.payload)
            }
        }

        case GET_ID_FORMAPAGO: {
            return {
                ...state,
                idFormaPago: action.payload
            }
        }
        case DELETE_FORMAPAGO: {
            return {
                ...state,
                formasDePago: state.formasDePago.filter((forma) => forma.idFormaPago !== action.payload)
            }
        }

        case GET_ID_CARGO: {
            return {
                ...state,
                idCargo: action.payload
            }
        }
        case DELETE_CARGO: {
            return {
                ...state,
                cargos: state.cargos.filter((cargo) => cargo.idCargo !== action.payload)
            }
        }

        case GET_ID_TAREA: {
            return {
                ...state,
                idTarea: action.payload
            }
        }
        case DELETE_TAREA: {
            return {
                ...state,
                tareasDesempeñadas: state.tareasDesempeñadas.filter((tarea) => tarea.idTarea !== action.payload)
            }
        }

        case GET_ID_MODOLIQ: {
            return {
                ...state,
                idModoLiq: action.payload
            }
        }
        case DELETE_MODOLIQ: {
            return {
                ...state,
                modosLiquidacion: state.modosLiquidacion.filter((modoliq) => modoliq.idModoLiq !== action.payload)
            }
        }

        case GET_ID_PROVINCIA : {
            return {
                ...state,
                idProvincia: action.payload
            }
        }
        case DELETE_PROVINCIA : {
            return {
                ...state,
                provincias: state.provincias.filter((provincia) => provincia.idProvincia !== action.payload)
            }
        }

        case GET_ID_DEPTO : {
            return {
                ...state,
                idDepto: action.payload
            }
        }
        case DELETE_DEPTO : {
            return {
                ...state,
                departamentos: state.departamentos.filter((depto) => depto.idDepto !== action.payload)
            }
        }

        case GET_ID_LOCALIDAD : {
            return {
                ...state,
                idLocalidad: action.payload
            }
        }
        case DELETE_LOCALIDAD : {
            return {
                ...state,
                localidades: state.localidades.filter((localidad) => localidad.idLocalidad !== action.payload)
            }
        }

        case GET_ID_BARRIO : {
            return {
                ...state,
                idBarrio: action.payload
            }
        }
        case DELETE_BARRIO : {
            return {
                ...state,
                barrios: state.barrios.filter((barrio) => barrio.idBarrio !== action.payload)
            }
        }


        // PARA LIQUIDACION (NO VAN)
        case GET_ID_BANCO: {
            return {
                ...state,
                idBanco: action.payload
            }
        }
        case DELETE_BANCO: {
            return {
                ...state,
                bancos: state.bancos.filter((banco) => banco.idBanco !== action.payload)
            }
        }

        case GET_ID_SINDICATO: {
            return {
                ...state,
                idSindicato: action.payload
            }
        }
        case DELETE_SINDICATO: {
            return {
                ...state,
                sindicatos: state.sindicatos.filter((sindicato) => sindicato.idSindicato !== action.payload)
            }
        }

        case GET_ID_CENTROCOSTO: {
            return {
                ...state,
                idCentroCosto: action.payload
            }
        }
        case DELETE_CENTROCOSTO: {
            return {
                ...state,
                centroCosto: state.centroCosto.filter((centro) => centro.idCentroCosto !== action.payload)
            }
        }




        // --------------- PUT REDUX ---------------

        case PUT_ESCI: {
            return {
                ...state,
                estadosCiviles: state.estadosCiviles.filter((esCi) => esCi.idEstadoCivil !== action.payload),
                estadosCiviles: [...state.estadosCiviles, action.payload]
            }
        }

        case PUT_ESTUDIO: {
            return {
                ...state,
                estudios: state.estudios.filter((estudio) => estudio.idEstudio !== action.payload),
                estudios: [...state.estudios, action.payload]
            }
        }

        case PUT_TIPODOC: {
            return {
                ...state,
                tiposDocumento: state.tiposDocumento.filter((doc) => doc.idTipoDoc !== action.payload),
                tiposDocumento: [...state.tiposDocumento, action.payload]
            }
        }

        case PUT_PARENTESCO: {
            return {
                ...state,
                parentescos: state.parentescos.filter((paren) => paren.idParentesco !== action.payload),
                parentescos: [...state.parentescos, action.payload]
            }
        }

        case PUT_ESTADO: {
            return {
                ...state,
                estados: state.estados.filter((estado) => estado.idEstado !== action.payload),
                estados: [...state.estados, action.payload]
            }
        }

        case PUT_FORMAPAGO: {
            return {
                ...state,
                formasDePago: state.formasDePago.filter((forma) => forma.idFormaPago !== action.payload),
                formasDePago: [...state.formasDePago, action.payload]
            }
        }

        case PUT_CARGO: {
            return {
                ...state,
                cargos: state.cargos.filter((cargo) => cargo.idCargo !== action.payload),
                cargos: [...state.cargos, action.payload]
            }
        }

        case PUT_TAREA: {
            return {
                ...state,
                tareasDesempeñadas: state.tareasDesempeñadas.filter((tarea) => tarea.idTarea !== action.payload),
                tareasDesempeñadas: [...state.tareasDesempeñadas, action.payload]
            }
        }

        case PUT_MODOLIQ: {
            return {
                ...state,
                modosLiquidacion: state.modosLiquidacion.filter((modoliq) => modoliq.idModoLiq !== action.payload),
                modosLiquidacion: [...state.modosLiquidacion, action.payload]
            }
        }

        case PUT_PROVINCIA : {
            return {
                ...state,
                provincias: state.provincias.filter((provincia) => provincia.idProvincia !== action.payload),
                provincias: [...state.provincias, action.payload]
            }
        }
        case PUT_DEPTO : {
            return {
                ...state,
                departamentos: state.departamentos.filter((depto) => depto.idDepto !== action.payload),
                departamentos: [...state.departamentos, action.payload]
            }
        }
        case PUT_LOCALIDAD : {
            return {
                ...state,
                localidades: state.localidades.filter((localidad) => localidad.idLocalidad !== action.payload),
                localidades: [...state.localidades, action.payload]
            }
        }
        case PUT_BARRIO : {
            return {
                ...state,
                barrios: state.barrios.filter((barrio) => barrio.idBarrio !== action.payload),
                barrios: [...state.barrios, action.payload]
            }
        }


        // PARA LIQUIDACION (NO VAN)
        case PUT_BANCO: {
            return {
                ...state,
                bancos: state.bancos.filter((banco) => banco.idBanco !== action.payload),
                bancos: [...state.bancos, action.payload]
            }
        }

        case PUT_SINDICATO: {
            return {
                ...state,
                sindicatos: state.sindicatos.filter((sindicato) => sindicato.idSindicato !== action.payload),
                sindicatos: [...state.sindicatos, action.payload]
            }
        }

        case PUT_CENTROCOSTO: {
            return {
                ...state,
                centroCosto: state.centroCosto.filter((centro) => centro.idCentroCosto !== action.payload),
                centroCosto: [...state.centroCosto, action.payload]

            }
        }

        // case PUT_CALLES : {
        //     return {
        //         ...state,
        //         calles: state.calles.filter((calle) => calle.idCalle !== action.payload ),
        //         calles: [...state.calles, action.payload]
        //     }
        // }

        default: return state;
    }
}