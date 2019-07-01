import {
    MOSTRAR_LOCADOR
} from "./types";

import axios from "axios";

// export const mostrarTitulares = () => async dispatch => {
//     const respuesta = await axios.get("http://192.168.1.102:3002/getlistadotitulares");
//     dispatch({
//         type: MOSTRAR_TITULARES,
//         payload: respuesta.data
//     });
// };

export const mostrarLocador = id => async dispatch => {
    const respuesta = await axios.get(`http://localhost:5000/getlocadorselect/${id}`);

    dispatch({
        type: MOSTRAR_LOCADOR,
        payload: respuesta.data
    });
};

// export const buscarTitular = id => async dispatch => {
//     const respuesta = await axios.get(`http://192.168.1.102:3002/getdatostitular/${id}`);

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

// export const agregarLocatarioContrato = locatario => async dispatch => {
//     const respuesta = await axios.post(
//         "http://localhost:5000/postlocatariocontrato",
//         locatario
//     );

//     dispatch({
//         type: AGREGAR_LOCATARIO_CONTRATO,
//         payload: respuesta.data
//     });
// };

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