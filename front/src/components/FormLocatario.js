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
                name="uftipo"
                placeholder="Unidad Funcional"
                value={props.uf.uf_tipo}
                readOnly
                required
              />
              <label for="in-range-input">Unidad Funcional</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="ufnum"
                placeholder="Unidad Funcional"
                value={props.uf.uf_tiponum}
                readOnly
                required
              />
              <label for="in-range-input">Numero de Unidad Funcional</label>
            </p>
          </div>

          <div className="col-md-6">
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
      
          <button type="submit"  className="btn btn-primary btn-block mt-4">
            Cargar
          </button>
        
      </form>

      {/* FORMULARIO PARA EL SEGUNDO LOCATARIO */}

      <form
        className="form-style-8"
        onSubmit={props.crearLocatario2}
        id="form2"
        hidden={true}
      >
        <h2>Datos del segundo locatario</h2>
        <div className="row">
          <div className="col-md-6">
            <p className="has-dynamic-label">
              <input
                type="number"
                className=""
                name="dni2"
                placeholder="DNI"
                required
              />
              <label for="in-range-input">DNI</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="number"
                className=""
                name="cuit2"
                placeholder="Cuit/Cuil"
                required
              />
              <label for="in-range-input">Cuit/Cuil</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="uftipo2"
                value={props.uf.uf_tipo}
                readOnly
                placeholder="Unidad Funcional"
                required
              />
              <label for="in-range-input">Unidad Funcional</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="ufnum2"
                value={props.uf.uf_tiponum}
                readOnly
                placeholder="Unidad Funcional"
                required
              />
              <label for="in-range-input">Nombre Unidad Funcional</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="contrato"
                value={props.contrato}
                readOnly
                placeholder="Numero de Contrato"
                required
              />
              <label for="in-range-input">Numero de Contrato</label>
            </p>
          </div>

          <div className="col-md-6">
            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="apellido2"
                placeholder="Apellido"
                required
              />
              <label for="in-range-input">Apellido</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="nombre2"
                placeholder="Nombre"
                required
              />
              <label for="in-range-input">Nombre</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="domicilio2"
                placeholder="Domicilio"
                required
              />
              <label for="in-range-input">Domicilio</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="barrio2"
                placeholder="Barrio"
                required
              />
              <label for="in-range-input">Barrio</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="localidad2"
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
