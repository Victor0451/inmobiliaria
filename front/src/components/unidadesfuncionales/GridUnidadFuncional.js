import React, { Component } from "react";
import { Link } from "react-router-dom";



export default class UnidadFuncional extends Component {
  render() {
    const { unidadesFuncionales } = this.props
    return (
      <div className="form-style-8">
        <h2> Unidades Funcionales </h2>
        <div className="table-wrapper table-responsive">
          <table className="fl-table">
            <thead>
              <tr>
                <th scope="col">Unidad Funcional</th>
                <th scope="col">Numero de Unidad Funcional</th>
                <th scope="col">Direccion (plan)</th>
                <th scope="col">Titular</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>

              </tr>
            </thead>
            <tbody>
              {unidadesFuncionales.map((item) => {
                return (

                  <tr key={item.id_uf}>
                    <td>
                      {item.uf_tiponum}
                    </td>
                    <td>
                      {item.uf_tipo}
                    </td>
                    <td>
                      {item.dir_plan}
                    </td>
                    <td>
                      {item.titular}
                    </td>
                    <td className="toggler">
                      {item.estado}
                    </td>

                    <td>

                      <Link to={`/crearcontrato/${item.uf_tiponum}`} className="btn btn-primary btn-block" >Selecionar</Link>
                      <Link to={`/unidadesfuncionales/${item.uf_tiponum}`} className="btn btn-secondary btn-block" >Mas Informacion</Link>


                    </td>

                  </tr>



                );

              })}

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
