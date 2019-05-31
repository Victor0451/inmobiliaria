import React, { Component } from "react";
import toastr from "../utils/toastr";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { postLocatario, getUFSel, postContrato } from "../functions/apis";
import FormLocatarioContrato from "./FormLocatarioContrato";

export default class LocatarioContrato extends Component {
  state = {
    uf: {},

    locatario1: {
      nombre: "",
      apellido: "",
      dni: "",
      cuit: "",
      ufnum: "",
      uftipo: "",
      domicilio: "",
      barrio: "",
      localidad: "",
      loc_tipo: ""
    },

    locatario2: {
      nombre2: "",
      apellido2: "",
      dni2: "",
      cuit2: "",
      ufnum2: "",
      uftipo2: "",
      domicilio2: "",
      barrio2: "",
      localidad2: "",
      loc_tipo2: ""
    },

    contrato: {}
  };

  crearLocatarioContrato = e => {
    e.preventDefault();

    let form = document.getElementById("form");
    let form2 = document.getElementById("form2");

    const {
      nombre,
      apellido,
      dni,
      cuit,
      ufnum,
      uftipo,
      domicilio,
      barrio,
      localidad
    } = e.target.elements;

    let nombrevalue = nombre.value;
    let apellidovalue = apellido.value;
    let dnivalue = dni.value;
    let cuitvalue = cuit.value;
    let uftipovalue = uftipo.value;
    let ufnumvalue = ufnum.value;
    let domiciliovalue = domicilio.value;
    let barriovalue = barrio.value;
    let localidadvalue = localidad.value;

    let unfunnum = this.state.uf.uf_tiponum;
    let idcontrato = `CONT-${dnivalue}-${unfunnum}`;

    this.setState({
      locatario1: {
        nombre: nombrevalue,
        apellido: apellidovalue,
        dni: dnivalue,
        cuit: cuitvalue,
        uftipo: uftipovalue,
        ufnum: ufnumvalue,
        domicilio: domiciliovalue,
        barrio: barriovalue,
        localidad: localidadvalue,
        loc_tipo: 1
      },
      contrato: idcontrato
    });

    confirmAlert({
      title: "Atencion",
      message: "Desea agregar otro locatario",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            form2.hidden = false;

            postLocatario(
              nombrevalue,
              apellidovalue,
              dnivalue,
              cuitvalue,
              domiciliovalue,
              barriovalue,
              localidadvalue
            );

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

            let dniloc = dnivalue;
            let dniloc2 = 0;
            let dnilocador = this.state.uf.titular;

            postLocatario(
              nombrevalue,
              apellidovalue,
              dnivalue,
              cuitvalue,
              domiciliovalue,
              barriovalue,
              localidadvalue
            );
            postContrato(idcontrato, dniloc, dniloc2, ufnumvalue, dnilocador);

            this.props.history.push(`/contrato/${idcontrato}`);

            toastr.success("El locatario a sido cargado", "ATENCION");
          }
        }
      ]
    });
  };

  crearLocatario2 = e => {
    e.preventDefault();

    let form = document.getElementById("form");
    let form2 = document.getElementById("form2");

    const {
      nombre2,
      apellido2,
      dni2,
      cuit2,
      ufnum2,
      uftipo2,
      domicilio2,
      barrio2,
      localidad2,
      contrato
    } = e.target.elements;

    let nombrevalue = nombre2.value;
    let apellidovalue = apellido2.value;
    let dnivalue = dni2.value;
    let cuitvalue = cuit2.value;
    let uftipovalue = uftipo2.value;
    let ufnumvalue = ufnum2.value;
    let domiciliovalue = domicilio2.value;
    let barriovalue = barrio2.value;
    let localidadvalue = localidad2.value;
    let idcontrato = contrato.value;

    this.setState({
      locatario2: {
        nombre2: nombrevalue,
        apellido2: apellidovalue,
        dni2: dnivalue,
        cuit2: cuitvalue,
        uftipo2: uftipovalue,
        ufnum2: ufnumvalue,
        domicilio2: domiciliovalue,
        barrio2: barriovalue,
        localidad2: localidadvalue,
        loc_tipo2: 2
      }
    });

    postLocatario(
      nombrevalue,
      apellidovalue,
      dnivalue,
      cuitvalue,
      domiciliovalue,
      barriovalue,
      localidadvalue
    );

    let dniloc = this.state.locatario1.dni;
    let dniloc2 = dnivalue;
    let dnilocador = this.state.uf.titular;

    postContrato(idcontrato, dniloc, dniloc2, ufnumvalue, dnilocador);

    form2.hidden = true;
    form.hidden = true;

    this.props.history.push(`/contrato2loc/${idcontrato}`);
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    getUFSel(id)
      .then(uf => {
        this.setState({
          uf: uf.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="">
        <FormLocatarioContrato
          crearLocatarioContrato={this.crearLocatarioContrato}
          crearLocatario2={this.crearLocatario2}
          uf={this.state.uf}
          contrato={this.state.contrato}
        />
      </div>
    );
  }
}
