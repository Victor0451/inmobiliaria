import {
    MOSTRAR_UNIDADES_FUNCIONALES, MOSTRAR_UNIDAD_FUNCIONAL_TITULAR, MOSTRAR_UNIDAD_FUNCIONAL
} from "./types";

import axios from "axios";

export const mostrarUnidadesFuncionales = () => async dispatch => {
    const respuesta = await axios.get("http://localhost:5000/getunidadfunc");
    dispatch({
        type: MOSTRAR_UNIDADES_FUNCIONALES,
        payload: respuesta.data
    });
};

export const mostrarUnidadesFuncionalesTitular = id => async dispatch => {
    const respuesta = await axios.get(`http://localhost:5000/getunidadfunc/${id}`);

    dispatch({
        type: MOSTRAR_UNIDAD_FUNCIONAL_TITULAR,
        payload: respuesta.data
    });
};

export const mostrarUnidadFuncional = id => async dispatch => {
    const respuesta = await axios.get(`http://localhost:5000/getufselect/${id}`);

    dispatch({
        type: MOSTRAR_UNIDAD_FUNCIONAL,
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

// export const agregarTitular = titular => async dispatch => {
//     const respuesta = await axios.post(
//         "http://localhost:5000/posttitular",
//         titular
//     );

//     dispatch({
//         type: AGREGAR_TITULAR,
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