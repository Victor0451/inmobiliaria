import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Form extends Component {
  showDiv = e => {
    e.preventDefault();

    let divBaño = document.getElementById("bano");
    let divDepto = document.getElementById("depto");
    let select = document.getElementById("tipoalq");

    if (select.value === "1" || select.value === "2") {
      divBaño.hidden = false;
    } else {
      divDepto.hidden = false;
    }
  };
  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="col-md-12">
              <h2>Locador</h2>
              <select className="custom-select">
                <option selected>Locador</option>
                <option value="1">Juaquin</option>
                <option value="2">Amelia</option>
              </select>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <h2>Alquiler</h2>

              <select className="custom-select" id="tipoalq">
                <option selected>Alquiler</option>
                <option value="1">Local</option>
                <option value="2">Oficina</option>
                <option value="2">Departamento</option>
              </select>
            </div>

            <div className="col-md-12" id="bano" hidden="true">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with checkbox"
                  placeholder="Con Baño"
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                      placeholder="Sin Baño"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with checkbox"
                  placeholder="Sin Baño"
                />
              </div>
            </div>
            <div className="col-md-12" id="depto" hidden="true">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with checkbox"
                  placeholder="Monoambiente"
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with checkbox"
                  placeholder="Dos ambientes"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-4">
            Buscar
          </button>
        </form>
      </div>
    );
  }
}
