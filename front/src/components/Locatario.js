import React, { Component } from "react";
import toastr from "../utils/toastr";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { postLocatario, postLocatario2, getUFSel } from "../functions/apis";
import Contrato from "./Contrato";
import Contrato2Locat from "./Contrato2Locat";
import FormLocatario from "./FormLocatario";

export default class Locatario extends Component {
  state = {
    uf: {},

    locatario1: {
      nombre: "",
      apellido: "",
      dni: "",
      cuit: "",
      unfunc: "",
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
      unfunc2: "",
      domicilio2: "",
      barrio2: "",
      localidad2: "",
      loc_tipo2: ""
    },

    contrato: {},

    oneLoc: false,

    twoLoc: false
  };

  crearLocatario = e => {
    e.preventDefault();

    let form = document.getElementById("form");
    let form2 = document.getElementById("form2");

    const {
      nombre,
      apellido,
      dni,
      cuit,
      uf,
      domicilio,
      barrio,
      localidad
    } = e.target.elements;

    let nombrevalue = nombre.value;
    let apellidovalue = apellido.value;
    let dnivalue = dni.value;
    let cuitvalue = cuit.value;
    let unfuncvalue = uf.value;
    let domiciliovalue = domicilio.value;
    let barriovalue = barrio.value;
    let localidadvalue = localidad.value;

    let unfunnum = this.state.uf.uf_tiponum;
    let idcontrato = `CONT-${dnivalue}-${unfunnum}`;

    confirmAlert({
      title: "Atencion",
      message: "Desea agregar otro locatario",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            this.setState({
              locatario1: {
                nombre: nombrevalue,
                apellido: apellidovalue,
                dni: dnivalue,
                cuit: cuitvalue,
                unfunc: unfuncvalue,
                domicilio: domiciliovalue,
                barrio: barriovalue,
                localidad: localidadvalue,
                uf_tiponum: unfunnum,
                loc_tipo: 1
              }
            });

            let loc_tipo = 1;

            postLocatario(
              nombrevalue,
              apellidovalue,
              dnivalue,
              cuitvalue,
              unfuncvalue,
              domiciliovalue,
              barriovalue,
              localidadvalue,
              idcontrato,
              unfunnum,
              loc_tipo
            );

            this.setState({
              contrato: idcontrato
            });

            console.log(idcontrato);

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
            this.setState({
              locatario1: {
                nombre: nombrevalue,
                apellido: apellidovalue,
                dni: dnivalue,
                cuit: cuitvalue,
                unfunc: unfuncvalue,
                domicilio: domiciliovalue,
                barrio: barriovalue,
                localidad: localidadvalue,
                uf_tiponum: unfunnum,
                loc_tipo: "1"
              }
            });

            let loc_tipo = 1;

            postLocatario(
              nombrevalue,
              apellidovalue,
              dnivalue,
              cuitvalue,
              unfuncvalue,
              domiciliovalue,
              barriovalue,
              localidadvalue,
              idcontrato,
              unfunnum,
              loc_tipo
            );

            form.hidden = true;

            this.props.history.push(`/contrato/${unfunnum}`);

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
      uf2,
      domicilio2,
      barrio2,
      localidad2,
      contrato
    } = e.target.elements;

    let nombrevalue2 = nombre2.value;
    let apellidovalue2 = apellido2.value;
    let dnivalue2 = dni2.value;
    let cuitvalue2 = cuit2.value;
    let unfuncvalue2 = uf2.value;
    let domiciliovalue2 = domicilio2.value;
    let barriovalue2 = barrio2.value;
    let localidadvalue2 = localidad2.value;
    let idcontratovalue2 = contrato.value;

    let loc_tipo2 = 2;

    this.setState({
      locatario2: {
        nombre2: nombrevalue2,
        apellido2: apellidovalue2,
        dni2: dnivalue2,
        cuit2: cuitvalue2,
        unfunc2: unfuncvalue2,
        domicilio2: domiciliovalue2,
        barrio2: barriovalue2,
        localidad2: localidadvalue2,
        contrato2: idcontratovalue2,
        loc_tipo2: 2
      }
    });

    postLocatario2(
      nombrevalue2,
      apellidovalue2,
      dnivalue2,
      cuitvalue2,
      unfuncvalue2,
      domiciliovalue2,
      barriovalue2,
      localidadvalue2,
      idcontratovalue2,
      loc_tipo2
    );

    form2.hidden = true;
    form.hidden = true;

     toastr.success("El locatario a sido cargado", "ATENCION");
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
        <FormLocatario
          crearLocatario={this.crearLocatario}
          crearLocatario2={this.crearLocatario2}
          uf={this.state.uf}
          contrato={this.state.contrato}
        />
      </div>
    );
  }
}
