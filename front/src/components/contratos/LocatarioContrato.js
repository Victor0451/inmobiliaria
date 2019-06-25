import React, { Component } from "react";
import toastr from "../../utils/toastr";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import FormLocatarioContrato from "./FormLocatarioContrato";

//redux
import { connect } from "react-redux";
import { mostrarUnidadFuncional } from "../../actions/unidadFuncionalActions";
import { agregarLocatarioContrato, buscarLocatario } from '../../actions/locatarioActions';
import { agregarContrato } from '../../actions/contratosActions';


class LocatarioContrato extends Component {

  altaRef = React.createRef();
  vencimientoRef = React.createRef();

  state = {
    unidadFuncional: {},
    locatariocargado: {},
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
    id_contrato: '',
    buscar: '',
    tipo: ''

  };


  leerDatos = e => {


    this.setState({ [e.target.name]: e.target.value })

  }

  crearLocatarioContrato = e => {
    e.preventDefault();

    let alta = this.altaRef.current.value;
    let vencimiento = this.vencimientoRef.current.value;



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
      localidad,
      tipo

    } = this.state


    if (tipo === '') {
      toastr.warning("Debes si o si seleccionar TIPO DE CONTRATO", "ATENCION")
    } else {

      let id_contrato = `CONT-${dni}-${uf_tiponum}`;
      this.setState({ id_contrato: id_contrato })


      const contrato = {
        id_contrato,
        dni,
        pagos_contrato,
        pagos_pagare,
        uf_tiponum,
        titular,
        tipo,
        alta,
        vencimiento

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

              this.props.history.push(`/unlocatario/${tipo}/${id_contrato}`);

              toastr.success("El locatario a sido cargado", "ATENCION");
            }
          }
        ]
      });

    }


  };

  crearLocatarioContrato2 = e => {

    e.preventDefault();


    let alta = this.altaRef.current.value;
    let vencimiento = this.vencimientoRef.current.value;

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
      id_contrato,
      tipo

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
      titular,
      tipo,
      alta,
      vencimiento
    }

    console.log(locatario)

    this.props.agregarLocatarioContrato(locatario);

    this.props.agregarContrato(contrato);

    this.props.history.push(`/doslocatario/${tipo}/${id_contrato}`);

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
          altaRef={this.altaRef}
          vencimientoRef={this.vencimientoRef}
        />
      </div>
    );
  }
}

//state
const mapStateToProps = state => ({
  unidadFuncional: state.unidadesFuncionales.unidadFuncional,
  locatarios: state.locatarios.locatario

});

export default connect(
  mapStateToProps,
  { mostrarUnidadFuncional, agregarLocatarioContrato, agregarContrato, buscarLocatario }
)(LocatarioContrato);
