import {
    AGREGAR_CONTRATO, MOSTRAR_CONTRATO
} from "./types";

import axios from "axios";

// export const mostrarUnidadesFuncionales = () => async dispatch => {
//     const respuesta = await axios.get("http://192.168.1.108:3002/getunidadfunc");
//     dispatch({
//         type: MOSTRAR_UNIDADES_FUNCIONALES,
//         payload: respuesta.data
//     });
// };

// export const mostrarUnidadesFuncionalesTitular = id => async dispatch => {
//     const respuesta = await axios.get(`http://192.168.1.108:3002/getunidadfunc/${id}`);

//     dispatch({
//         type: MOSTRAR_UNIDAD_FUNCIONAL_TITULAR,
//         payload: respuesta.data
//     });
// };

export const mostrarContrato = id => async dispatch => {
    const respuesta = await axios.get(`http://192.168.1.108:3002/getcontratoselect/${id}`);

    dispatch({
        type: MOSTRAR_CONTRATO,
        payload: respuesta.data
    });
};

// export const buscarTitular = id => async dispatch => {
//     const respuesta = await axios.get(`http://192.168.1.108:3002/getdatostitular/${id}`);

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
        "http://192.168.1.108:3002/postcontrato",
        contrato
    );

    dispatch({
        type: AGREGAR_CONTRATO,
        payload: respuesta.data
    });
};

  // export const editarProducto = producto => async dispatch => {
  //   const respuesta = await axios.put(
  //     `http://localhost:5000/productos/${producto.id}`,
  //     producto
  //   );

  //   dispatch({
  //     type: EDITAR_PRODUCTO,
  //     payload: respuesta.data
  //   });
  // };