import React from "react";

export default function FormLocatarioContrato(props) {
  const { leerDatos, unidadFuncional, id_contrato, crearLocatarioContrato, crearLocatarioContrato2 } = props

  return (
    <div>
      <form
        className="form-style-8"
        onSubmit={crearLocatarioContrato}
        id="form"
      >
        <h2>Datos del locatario</h2>
        <div className="row">
          <div className="col-md-6">
            <p className="has-dynamic-label">
              <input
                type="number"
                className=""
                name="dni"
                placeholder="DNI"
                onChange={leerDatos}
                required
              />
              <label>DNI</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="number"
                className=""
                name="cuit"
                placeholder="Cuit/Cuil"
                onChange={leerDatos}
                required
              />
              <label >Cuit/Cuil</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="uf_tipo"
                placeholder="Unidad Funcional"
                value={unidadFuncional.uf_tipo}
                onChange={leerDatos}
                readOnly
                required
              />
              <label >Unidad Funcional</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="uf_tiponum"
                placeholder="Unidad Funcional"
                value={unidadFuncional.uf_tiponum}
                readOnly
                onChange={leerDatos}
                required
              />
              <label >Numero de Unidad Funcional</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="pagos_contrato"
                placeholder="Pagos por Contrato"
                onChange={leerDatos}
                required
              />
              <label >Pagos por Contrato</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="pagos_pagare"
                placeholder="Pagos con Pagare"
                onChange={leerDatos}
                required
              />
              <label >Pagos con Pagare</label>
            </p>
          </div>

          <div className="col-md-6">
            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="apellido"
                placeholder="Apellido"
                onChange={leerDatos}
                required
              />
              <label >Apellido</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="nombre"
                placeholder="Nombre"
                onChange={leerDatos}
                required
              />
              <label >Nombre</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="domicilio"
                placeholder="Domicilio"
                onChange={leerDatos}
                required
              />
              <label >Domicilio</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="barrio"
                placeholder="Barrio"
                onChange={leerDatos}
                required
              />
              <label >Barrio</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="localidad"
                placeholder="Localidad"
                onChange={leerDatos}
                required
              />
              <label >Localidad</label>
            </p>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mt-4">
          Cargar
        </button>
      </form>

      {/* FORMULARIO PARA EL SEGUNDO LOCATARIO */}

      <form
        className="form-style-8"
        onSubmit={crearLocatarioContrato2}
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
                onChange={leerDatos}
                required
              />
              <label >DNI</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="number"
                className=""
                name="cuit"
                placeholder="Cuit/Cuil"
                onChange={leerDatos}
                required
              />
              <label >Cuit/Cuil</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="uftipo"
                value={unidadFuncional.uf_tipo}
                readOnly
                placeholder="Unidad Funcional"
                onChange={leerDatos}
                required
              />
              <label >Unidad Funcional</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="ufnum"
                value={unidadFuncional.uf_tiponum}
                readOnly
                placeholder="Unidad Funcional"
                onChange={leerDatos}
                required
              />
              <label >Nombre Unidad Funcional</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="contrato"
                value={id_contrato}
                readOnly
                placeholder="Numero de Contrato"
                onChange={leerDatos}
                required
              />
              <label >Numero de Contrato</label>
            </p>
          </div>

          <div className="col-md-6">
            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="apellido"
                placeholder="Apellido"
                onChange={leerDatos}
                required
              />
              <label >Apellido</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="nombre"
                placeholder="Nombre"
                onChange={leerDatos}
                required
              />
              <label >Nombre</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="domicilio"
                placeholder="Domicilio"
                onChange={leerDatos}
                required
              />
              <label >Domicilio</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="barrio"
                placeholder="Barrio"
                onChange={leerDatos}
                required
              />
              <label >Barrio</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="localidad"
                placeholder="Localidad"
                onChange={leerDatos}
                required
              />
              <label >Localidad</label>
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
