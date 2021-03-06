import {
    MOSTRAR_UNIDADES_FUNCIONALES, MOSTRAR_UNIDAD_FUNCIONAL_TITULAR, MOSTRAR_UNIDAD_FUNCIONAL, AGREGAR_UNIDAD_FUNCIONAL
} from "../actions/types";

//CADA REDUCER TIENE SU ṔROPIO STATE

const initialState = {
    unidadesFuncionales: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_UNIDADES_FUNCIONALES:
            return {
                ...state,
                unidadesFuncionales: action.payload
            };

        case MOSTRAR_UNIDAD_FUNCIONAL_TITULAR:
            return {
                ...state,
                unidadesFuncionales: action.payload
            };

        case MOSTRAR_UNIDAD_FUNCIONAL:
            return {
                ...state,
                unidadFuncional: action.payload
            };

        // case BUSCAR_TITULAR:
        //     return {
        //         ...state,
        //         titular: action.payload
        //     };

        // case ELIMINAR_PRODUCTO:
        //     return {
        //         ...state,
        //         productos: state.productos.filter(
        //             producto => producto.id !== action.payload
        //         )
        //     };

        case AGREGAR_UNIDAD_FUNCIONAL:
            return {
                ...state,
                unidadesFuncionales: [...state.unidadesFuncionales, action.payload]
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