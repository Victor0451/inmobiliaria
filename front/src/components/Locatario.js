import React, { Component } from "react";
import FormLocatario from "./FormLocatario";


export default class Locatario extends Component {
  state = {
    locatario1: {
      nombre: "",
      apellido: "",
      dni: "",
      cuit: "",
      domicilio: "",
      barrio: "",
      localidad: ""
    }
  };

  crearLocatario = e => {
    e.preventDefault();

    const {
      nombre,
      apellido,
      dni,
      cuit,
      domicilio,
      barrio,
      localidad
    } = e.target.elements;

    let nombrevalue = nombre.value;
    let apellidovalue = apellido.value;
    let dnivalue = dni.value;
    let cuitvalue = cuit.value;
    let domiciliovalue = domicilio.value;
    let barriovalue = barrio.value;
    let localidadvalue = localidad.value;

    this.setState({
      locatario1: {
        nombre: nombrevalue,
        apellido: apellidovalue,
        dni: dnivalue,
        cuit: cuitvalue,
        domicilio: domiciliovalue,
        barrio: barriovalue,
        localidad: localidadvalue
      }
    });

   
  };

  render() {
    return (
      <div>
        <FormLocatario />
      </div>
    );
  }
}
