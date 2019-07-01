import {
    AGREGAR_CONTRATO, MOSTRAR_CONTRATO, MOSTRAR_CONTRATOS, AGREGAR2LOC_CONTRATO
} from "../actions/types";

//CADA REDUCER TIENE SU ṔROPIO STATE

const initialState = {
    contratos: []
};

export default function (state = initialState, action) {
    switch (action.type) {


        case MOSTRAR_CONTRATO:
            return {
                ...state,
                contrato: action.payload
            };

        case MOSTRAR_CONTRATOS:
            return {
                ...state,
                contratos: action.payload
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

        case AGREGAR_CONTRATO:
            return {
                ...state,
                contratos: [...state.contratos, action.payload]
            };

        case AGREGAR2LOC_CONTRATO:
            return {
                ...state,
                contratos: state.contratos.map(contrato =>
                    contrato.id === action.payload.id
                        ? (contrato = action.payload)
                        : contrato
                )
            };
        default:
            return state;
    }
}