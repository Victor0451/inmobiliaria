import React, { Component } from "react";
import GridUnidadFuncional from "../unidadesfuncionales/GridUnidadFuncional";


//redux
import { connect } from "react-redux";
import { mostrarUnidadesFuncionalesTitular, mostrarUnidadesFuncionales } from "../../actions/unidadFuncionalActions";

class Form extends Component {

  selectvalue = () => {
    const id = document.getElementById("locador").value;
    this.props.mostrarUnidadesFuncionalesTitular(id);
    
  };

  componentDidMount() {
    //this.props.mostrarUnidadesFuncionales();
  }

  render() {
    const { unidadesFuncionales } = this.props

    return (
      <div>
        <form className="form-style-8">
          <div className="row">
            <div className="col-md-12">
              <h2>Locador</h2>

              <div className="form-group ">
                <p className="has-dynamic-label">
                  <select
                    id="locador"
                    className=""
                    name="locador"
                    required
                    onChange={this.selectvalue.bind(this)}
                  >
                    <option value="">Locador</option>
                    <option value="25444609">Iriarte Joaquin</option>
                    <option value="24399134">Busignani Amelia</option>
                  </select>
                </p>
              </div>
            </div>
          </div>
          {/* 
          <button type="submit" className="btn btn-primary btn-block mt-4">
            Buscar
          </button> */}
        </form>

        <GridUnidadFuncional
          unidadesFuncionales={unidadesFuncionales}
        />

      </div>
    );
  }
}

//state
const mapStateToProps = state => ({
  unidadesFuncionales: state.unidadesFuncionales.unidadesFuncionales

});

export default connect(
  mapStateToProps,
  { mostrarUnidadesFuncionales, mostrarUnidadesFuncionalesTitular }
)(Form);