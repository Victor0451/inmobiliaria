import React, { Component } from "react";
import { Link } from "react-router-dom";



export default class UnidadFuncional extends Component {
  render() {
    return (
      <div className="form-style-8">
        <h2> Unidades Funcionales </h2>
        <div className="table-wrapper table-responsive">
          <table className="fl-table">
            <thead>
              <tr>
                <th scope="col">Padron</th>
                <th scope="col">Poligono</th>
                <th scope="col">Medidor</th>
                <th scope="col">Direccion (plan)</th>
                <th scope="col">Direccion (boleta)</th>
                <th scope="col">Unidad Funcional</th>
                <th scope="col">Numero de Unidad Funcional</th>
                <th scope="col">Acciones</th>
           
              </tr>
            </thead>
            <tbody>
            {this.props.unfucselect.map((item, index) => {
                            return (

                                <tr key={index}>

                                    <td className="toggler">
                                        {item.padron}
                                    </td>
                                    <td>
                                        {item.poligono}
                                    </td>
                                    <td>
                                        {item.medidor}
                                    </td>
                                    <td>
                                        {item.dir_plan}
                                    </td>
                                    <td>
                                        {item.dir_boleta}
                                    </td>
                                    <td>
                                        {item.uf_tipo}
                                    </td>
                                    <td>
                                        {item.uf_tiponum}
                                    </td>
                                   
                                    <td>

                                        <Link to={"/crearcontrato/" + item.uf_tiponum} className="btn btn-primary btn-block" >Selecionar</Link>
                                       
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
