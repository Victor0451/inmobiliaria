import { combineReducers } from "redux";
import unidadFuncionalReducers from "./unidadFuncionalReducer";
import locatariosReducers from './locatariosReducers';
import contratosReducers from './contratosReducers';
import locadoresReducers from './locadoresReducers';



export default combineReducers({
    unidadesFuncionales: unidadFuncionalReducers,
    locatarios: locatariosReducers,
    contratos: contratosReducers,
    locadores: locadoresReducers
});