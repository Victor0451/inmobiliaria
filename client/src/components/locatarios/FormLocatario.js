import React from "react";

export default function FormLocatario(props) {
  return (
    <div>
      <form className="form-style-8" onSubmit={props.crearLocatario} id="form">
        <h2>Datos del locatario</h2>
        <div className="row">
          <div className="col-md-6">
            <p className="has-dynamic-label">
              <input
                type="number"
                className=""
                name="dni"
                placeholder="DNI"
                required
              />
              <label for="in-range-input">DNI</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="number"
                className=""
                name="cuit"
                placeholder="Cuit/Cuil"
                required
              />
              <label for="in-range-input">Cuit/Cuil</label>
            </p>
            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="apellido"
                placeholder="Apellido"
                required
              />
              <label for="in-range-input">Apellido</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="nombre"
                placeholder="Nombre"
                required
              />
              <label for="in-range-input">Nombre</label>
            </p>
          </div>

          <div className="col-md-6">
            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="domicilio"
                placeholder="Domicilio"
                required
              />
              <label for="in-range-input">Domicilio</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="barrio"
                placeholder="Barrio"
                required
              />
              <label for="in-range-input">Barrio</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="localidad"
                placeholder="Localidad"
                required
              />
              <label for="in-range-input">Localidad</label>
            </p>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mt-4">
          Cargar
        </button>
      </form>
    </div>
  );
}
