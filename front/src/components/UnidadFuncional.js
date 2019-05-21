import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { runInThisContext } from "vm";

export default class UnidadFuncional extends Component {

  render() {

    return (
      <div className="form-style-8">
        <h2> Unidades Funcionales </h2>
        <div className="table-wrapper table-responsive">
          <table className="fl-table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Acciones</th>
                <th scope="col">Acciones</th>
                <th scope="col">Acciones</th>
                <th scope="col">Acciones</th>
                <th scope="col">Acciones</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.props.unfucselect).map(key => {
                return (
                  <tr key={this.props.unfucselect.id}>
                    <td>{this.props.unfucselect.padron}</td>
                    <td>{this.props.unfucselect.poligono}</td>
                    <td>{this.props.unfucselect.medidor}</td>
                    <td>{this.props.unfucselect.medidor}</td>
                    <td>{this.props.unfucselect.medidor}</td>
                    <td>{this.props.unfucselect.medidor}</td>
                    <td>{this.props.unfucselect.medidor}</td>
                    <td>{this.props.unfucselect.medidor}</td>
                    <td>
                      <Link
                        to={"/crearcontrato/"}
                        className="btn btn-primary btn-sm"
                      >
                        Crear Contrato
                      </Link>
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
