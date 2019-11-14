import React, { Component } from "react";
import FormNuevaUnidadFuncional from "./formNuevaUnidadFuncional";
import toastr from '../../utils/toastr'

//redux
import { connect } from "react-redux";
import { agregarUnidadFuncional } from "../../actions/unidadFuncionalActions";

class nuevaUnidadFuncional extends Component {
  state = {

    padron: "",
    poligono: "",
    medidor: "",
    dir_plan: "",
    dir_boleta: "",
    uf_tipo: "",
    uf_tiponum: "",
    locador: ""

  };

  leerDatos = e => {

    this.setState({ [e.target.name]: e.target.value })

  }

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
    } = this.state


    const unidadfuncional = {
      padron,
      poligono,
      medidor,
      dir_plan,
      dir_boleta,
      uf_tipo,
      uf_tiponum,
      titular
    }

    this.props.agregarUnidadFuncional(unidadfuncional)

    toastr.success("Locador ingresado con exito!", "ATENCION");

  };


  render() {
    return (
      <div>
        <FormNuevaUnidadFuncional
          crearUnidadFuncional={this.crearUnidadFuncional}
          leerDatos={this.leerDatos}
        />
      </div>
    );
  }
}

//state
const mapStateToProps = state => ({
  unidadesFuncionales: state.unidadesFuncionales.unidadesFuncionales,

});

export default connect(
  mapStateToProps,
  { agregarUnidadFuncional }
)(nuevaUnidadFuncional);