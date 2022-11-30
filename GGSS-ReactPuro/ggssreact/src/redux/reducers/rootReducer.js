import { combineReducers } from "redux"
import datosPersonalesReducer from "./datosPersonalesReducer";
import domicilioReducer from "./domicilioReducer";
import employeReducer from "./employeReducer";
import familiaReducer from "./familiaReducer";
import { fetchReducer } from "./fetchReducer";
import { liquidacionReducer } from "./liquidacionReducer";
import modalesReducer from "./modalesReducer";
import trabajosAnterioresReducer from "./trabajosAnterioresReducer";


const rootReducer = combineReducers({
    //Este es nuestro estado general de Empleados (Lo llamamos en el Browser con useSelector.)
    employeStates: employeReducer,
    datosPersonalesStates : datosPersonalesReducer,
    domiciliosStates : domicilioReducer,
    familiaStates : familiaReducer,
    generalState : fetchReducer,
    trabajosAnteriores : trabajosAnterioresReducer,
    liquidacionState : liquidacionReducer,
    modalState : modalesReducer   
});

export default rootReducer;