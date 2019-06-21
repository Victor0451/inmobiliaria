import React, { Component } from "react";
import formNuevaUnidadFuncional from "./formNuevaUnidadFuncional";


export default class nuevaUnidadFuncional extends Component {
  state = {
    unidadfuncional: {
      padron: "",
      poligono: "",
      medidor: "",
      dir_plan: "",
      dir_boleta: "",
      uf_tipo: "",
      uf_tiponum: "",
      titular: ""
    }
  };

  crearUnidadFuncional = e => {
    e.preventDefault();

    const {
      padron,
      poligono,
      medidor,
      dir_plan,
      dir_boleta,
      uf_tipo,
      uf_tiponum,
      titular
    } = e.target.elements;

    let padronvalue = padron.value;
    let poligonovalue = poligono.value;
    let medidorvalue = medidor.value;
    let dir_planvalue = dir_plan.value;
    let dir_boletavalue = dir_boleta.value;
    let uf_tipovalue = uf_tipo.value;
    let uf_tiponumvalue = uf_tiponum.value;
    let titularvalue = titular.value;

    this.setState({
      unidadfuncional: {
        padron: padronvalue,
        poligono: poligonovalue,
        medidor: medidorvalue,
        dir_plan: dir_planvalue,
        dir_boleta: dir_boletavalue,
        uf_tipo: uf_tipovalue,
        uf_tiponum: uf_tiponumvalue,
        titular: titularvalue
      }
    });



    //toastr.succes("Locador ingresado con exito!", "ATENCION");
  };

  render() {
    return (
      <div>
        <formNuevaUnidadFuncional crearUnidadFuncional={this.crearUnidadFuncional} />
      </div>
    );
  }
}
