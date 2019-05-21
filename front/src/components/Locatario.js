import React, { Component } from "react";
import { Link } from "react-router-dom";
import toastr from "../functions/toastr";
import Contrato from "./Contrato";

export default class Locatario extends Component {
  state = {
    locatario: {
      nombre: "",
      apellido: "",
      dni: "",
      cuit: "",
      cuil: "",
      unfunc: "",
      domicilio: "",
      barrio: "",
      localidad: ""
    }
  };

  crearLocatario = e => {
    e.preventDefault();

    let divcont = document.getElementById("cont");
    let form = document.getElementById("form");

    const {
      nombre,
      apellido,
      dni,
      cuil,
      cuit,
      uf,
      domicilio,
      barrio,
      localidad
    } = e.target.elements;

    let nombrevalue = nombre.value;
    let apellidovalue = apellido.value;
    let dnivalue = dni.value;
    let cuilvalue = cuil.value;
    let cuitvalue = cuit.value;
    let unfuncvalue = uf.value;
    let domiciliovalue = domicilio.value;
    let barriovalue = barrio.value;
    let localidadvalue = localidad.value;

    this.setState({
      locatario: {
        nombre: nombrevalue,
        apellido: apellidovalue,
        dni: dnivalue,
        cuit: cuitvalue,
        cuil: cuilvalue,
        unfunc: unfuncvalue,
        domicilio: domiciliovalue,
        barrio: barriovalue,
        localidad: localidadvalue
      }
    });
    divcont.hidden = false;
    form.hidden = true;

    toastr.success("bien cargado");
  };

  render() {
    return (
      <div className="">
        <form className="form-style-8" onSubmit={this.crearLocatario} id="form">
          <h2>Datos del Locatario</h2>
          <div className="row">
            <div className="col-md-6">
              <p className="has-dynamic-label">
                <input
                  type="number"
                  className=""
                  name="dni"
                  placeholder="DNI"
                  required
                />
                <label for="in-range-input">DNI</label>
              </p>

              <p className="has-dynamic-label">
                <input
                  type="number"
                  className=""
                  name="cuit"
                  placeholder="Cuit"
                  required
                />
                <label for="in-range-input">Cuit</label>
              </p>

              <p className="has-dynamic-label">
                <input
                  type="number"
                  className=""
                  name="cuil"
                  placeholder="Cuil"
                  required
                />
                <label for="in-range-input">Cuil</label>
              </p>

              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  name="uf"
                  placeholder="Unidad Funcional"
                  required
                />
                <label for="in-range-input">Unidad Funcional</label>
              </p>
            </div>

            <div className="col-md-6">
              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  name="apellido"
                  placeholder="Apellido"
                  required
                />
                <label for="in-range-input">Apellido</label>
              </p>

              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  name="nombre"
                  placeholder="Nombre"
                  required
                />
                <label for="in-range-input">Nombre</label>
              </p>

              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  name="domicilio"
                  placeholder="Domicilio"
                  required
                />
                <label for="in-range-input">Domicilio</label>
              </p>

              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  name="barrio"
                  placeholder="Barrio"
                  required
                />
                <label for="in-range-input">Barrio</label>
              </p>

              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  name="localidad"
                  placeholder="Localidad"
                  required
                />
                <label for="in-range-input">Localidad</label>
              </p>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-4">
            Crear Contrato
          </button>
        </form>

        <div id="cont" hidden="true">
          <Contrato locatario={this.state.locatario} />
        </div>
      </div>
    );
  }
}
