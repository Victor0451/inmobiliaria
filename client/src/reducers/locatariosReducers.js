import { AGREGAR_LOCATARIO_CONTRATO, MOSTRAR_LOCATARIO, MOSTRAR_LOCATARIOS, BUSCAR_LOCATARIO } from "../actions/types";

//CADA REDUCER TIENE SU ṔROPIO STATE

const initialState = {
    locatarios: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_LOCATARIOS:
            return {
                ...state,
                locatarios: action.payload
            };

        case MOSTRAR_LOCATARIO:
            return {
                ...state,
                locatarios: [...state.locatarios, action.payload]
            };

        //         case MOSTRAR_UNIDAD_FUNCIONAL:
        //             return {
        //                 ...state,
        //                 unidadFuncional: action.payload
        //             };

        case BUSCAR_LOCATARIO:
            return {
                ...state,
                locatario: action.payload
            };

        // case ELIMINAR_PRODUCTO:
        //     return {
        //         ...state,
        //         productos: state.productos.filter(
        //             producto => producto.id !== action.payload
        //         )
        //     };

        case AGREGAR_LOCATARIO_CONTRATO:

            return {
                ...state,
                locatarios: [...state.locatarios, action.payload]
            };

        // case EDITAR_PRODUCTO:
        //     return {
        //         ...state,
        //         productos: state.productos.map(producto =>
        //             producto.id === action.payload.id
        //                 ? (producto = action.payload)
        //                 : producto
        //         )
        //     };
        default:
            return state;
    }
}