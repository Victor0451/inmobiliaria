import React, { Component } from "react";
import GridUnidadFuncional from "./GridUnidadFuncional";
import axios from "axios";


export default class Form extends Component {
  state = {
    unfucselect: []
  };

  selectvalue = () => {
    let doc = document.getElementById("locador");
    let docval = doc.value;
    let url = `http://localhost:3002/getunidadfunc/${docval}`;

    axios
      .get(url)
      .then(unfucselect => {
        this.setState({
          unfucselect: unfucselect.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    console.log(this.state.unfucselect);
  };
  render() {
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
                    <option value="111">Juaquin</option>
                    <option value="24399134">Amelia</option>
                  </select>
                </p>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12 ">
              <h2 className="mt-4">Alquiler</h2>

              <div className="form-group ">
                <p className="has-dynamic-label">
                  <select id="uf" className="" name="uf" required>
                    <option value="">Tipo de UF</option>
                    <option value="">Oficina</option>
                    <option value="">Local</option>
                    <option value="">Departamento</option>
                  </select>
                </p>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-4">
            Buscar
          </button>
        </form>

        <div>
          <GridUnidadFuncional unfucselect={this.state.unfucselect} />
        </div>
     
      </div>


    );
  }
}
