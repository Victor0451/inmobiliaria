import React, { Component } from "react";
import toastr from "../utils/toastr";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import FormLocatarioContrato from "./FormLocatarioContrato";

//redux
import { connect } from "react-redux";
import { mostrarUnidadFuncional } from "../actions/unidadFuncionalActions";
import { agregarLocatarioContrato } from '../actions/locatarioActions';
import { agregarContrato } from '../actions/contratosActions';

class LocatarioContrato extends Component {
  state = {
    unidadFuncional: {},
    dni: '',
    cuit: '',
    nombre: '',
    apellido: '',
    domicilio: '',
    barrio: '',
    localidad: '',
    dni2: '',
    pagos_contrato: '',
    pagos_pagare: '',
    id_contrato: ''

  };

  leerDatos = e => {

    this.setState({ [e.target.name]: e.target.value })
  }

  crearLocatarioContrato = e => {
    e.preventDefault();

    let form = document.getElementById("form");
    let form2 = document.getElementById("form2");

    const { uf_tiponum, titular } = this.state.unidadFuncional;

    const {
      pagos_contrato,
      pagos_pagare,
      dni,
      cuit,
      apellido,
      nombre,
      domicilio,
      barrio,
      localidad
    } = this.state

    let id_contrato = `CONT-${dni}-${uf_tiponum}`;
    this.setState({ id_contrato: id_contrato })


    const contrato = {
      id_contrato,
      dni,
      pagos_contrato,
      pagos_pagare,
      uf_tiponum,
      titular

    }

    let dnil = dni;

    const locatario = {
      dnil,
      cuit,
      apellido,
      nombre,
      domicilio,
      barrio,
      localidad
    }



    confirmAlert({
      title: "Atencion",
      message: "Desea agregar otro locatario",
      buttons: [
        {
          label: "Si",
          onClick: () => {

            this.props.agregarLocatarioContrato(locatario);

            console.log(locatario)

            form2.hidden = false;

            toastr.info(
              "Primer locatario a sido guardado, ahora carga al segundo",
              "ATENCION"
            );
          }
        },

        {
          label: "No",
          onClick: () => {
            form.hidden = true;

            this.props.agregarLocatarioContrato(locatario);

            this.props.agregarContrato(contrato);

            this.props.history.push(`/contrato/${id_contrato}`);

            toastr.success("El locatario a sido cargado", "ATENCION");
          }
        }
      ]
    });
  };

  crearLocatarioContrato2 = e => {

    e.preventDefault();

    const {
      pagos_contrato,
      pagos_pagare,
      dni,
      dni2,
      cuit,
      apellido,
      nombre,
      domicilio,
      barrio,
      localidad,
      id_contrato
    } = this.state

    const { uf_tiponum, titular } = this.state.unidadFuncional;

    let dnil = dni2;

    const locatario = {
      dnil,
      cuit,
      apellido,
      nombre,
      domicilio,
      barrio,
      localidad,
    }

    const contrato = {
      id_contrato,
      dni,
      dni2,
      pagos_contrato,
      pagos_pagare,
      uf_tiponum,
      titular

    }

    console.log(locatario)

    this.props.agregarLocatarioContrato(locatario);

    this.props.agregarContrato(contrato);

    this.props.history.push(`/contrato2loc/${id_contrato}`);

  }



  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.mostrarUnidadFuncional(id);

  }

  componentWillReceiveProps(nextProps, nextState) {
    const { unidadFuncional } = nextProps;

    this.setState({
      unidadFuncional: unidadFuncional,
    });

  }

  render() {

    return (
      <div className="">
        <FormLocatarioContrato
          leerDatos={this.leerDatos}
          unidadFuncional={this.state.unidadFuncional}
          id_contrato={this.state.id_contrato}
          crearLocatarioContrato={this.crearLocatarioContrato}
          crearLocatarioContrato2={this.crearLocatarioContrato2}

        />
      </div>
    );
  }
}

//state
const mapStateToProps = state => ({
  unidadFuncional: state.unidadesFuncionales.unidadFuncional

});

export default connect(
  mapStateToProps,
  { mostrarUnidadFuncional, agregarLocatarioContrato, agregarContrato }
)(LocatarioContrato);
