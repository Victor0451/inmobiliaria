import React, { Component } from "react";
import FormLocador from "./FormLocador";


export default class Locador extends Component {
  state = {
    locador: {
      dni: "",
      apellido: "",
      nombre: "",
      domicilio: "",
      barrio: "",
      localidad: "",
      provincia: ""
    }
  };

  crearLocador = e => {
    e.preventDefault();

    const {
      dni,
      apellido,
      nombre,
      domicilio,
      barrio,
      localidad,
      provincia
    } = e.target.elements;

    let dnivalue = dni.value;
    let apellidovalue = apellido.value;
    let nombrevalue = nombre.value;
    let domiciliovalue = domicilio.value;
    let barriovalue = barrio.value;
    let localidadvalue = localidad.value;
    let provinciavalue = provincia.value;

    this.setState({
      locador: {
        dni: dnivalue,
        apellido: apellidovalue,
        nombre: nombrevalue,
        domicilio: domiciliovalue,
        barrio: barriovalue,
        localidad: localidadvalue,
        provincia: provinciavalue
      }
    });

   

    e.target.reset();
  };

  render() {
    return (
      <div>
        <FormLocador crearLocador={this.crearLocador} />
      </div>
    );
  }
}
