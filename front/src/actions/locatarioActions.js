import { AGREGAR_LOCATARIO_CONTRATO, MOSTRAR_LOCATARIO, MOSTRAR_LOCATARIOS, BUSCAR_LOCATARIO } from "./types";

import axios from "axios";

export const mostrarLocatarios = () => async dispatch => {
    const respuesta = await axios.get("http://190.52.32.168:3002/getlocatarios");
    dispatch({
        type: MOSTRAR_LOCATARIOS,
        payload: respuesta.data
    });
};

export const mostrarLocatario = id => async dispatch => {
    const respuesta = await axios.get(`http://190.52.32.168:3002/getlocatarioselect/${id}`);

    dispatch({
        type: MOSTRAR_LOCATARIO,
        payload: respuesta.data
    });
};


export const buscarLocatario = id => async dispatch => {
    const respuesta = await axios.get(`http://190.52.32.168:3002/getlocatarioselect/${id}`);

    dispatch({
        type: BUSCAR_LOCATARIO,
        payload: respuesta.data
    });
};

// export const borrarProducto = id => async dispatch => {
//   await axios.delete(`http://localhost:5000/productos/${id}`);

//   dispatch({
//     type: ELIMINAR_PRODUCTO,
//     payload: id
//   });
// };

export const agregarLocatarioContrato = locatario => async dispatch => {
    const respuesta = await axios.post(
        "http://190.52.32.168:3002/postlocatariocontrato",
        locatario
    );

    dispatch({
        type: AGREGAR_LOCATARIO_CONTRATO,
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