import {
    AGREGAR_CONTRATO, MOSTRAR_CONTRATO, MOSTRAR_CONTRATOS, AGREGAR2LOC_CONTRATO
} from "./types";

import axios from "axios";

export const mostrarContratos = () => async dispatch => {
    const respuesta = await axios.get("http://localhost:5000/getcontratos");
    dispatch({
        type: MOSTRAR_CONTRATOS,
        payload: respuesta.data
    });
};



export const mostrarContrato = id => async dispatch => {
    const respuesta = await axios.get(`http://localhost:5000/getcontratoselect/${id}`);

    dispatch({
        type: MOSTRAR_CONTRATO,
        payload: respuesta.data
    });
};

// export const buscarTitular = id => async dispatch => {
//     const respuesta = await axios.get(`http://localhost:5000/getdatostitular/${id}`);

//     dispatch({
//         type: BUSCAR_TITULAR,
//         payload: respuesta.data
//     });
// };
// export const borrarProducto = id => async dispatch => {
//   await axios.delete(`http://localhost:5000/productos/${id}`);

//   dispatch({
//     type: ELIMINAR_PRODUCTO,
//     payload: id
//   });
// };

export const agregarContrato = contrato => async dispatch => {
    const respuesta = await axios.post(
        "http://localhost:5000/postcontrato",
        contrato
    );

    dispatch({
        type: AGREGAR_CONTRATO,
        payload: respuesta.data
    });
};

export const agregar2Locatario = contrato => async dispatch => {


    const respuesta = await axios.put(
        `http://localhost:5000/putlocatario/${contrato.id_contrato}`,
        contrato
    );

    console.log(contrato)

    dispatch({
        type: AGREGAR2LOC_CONTRATO,
        payload: respuesta.data
    });
};