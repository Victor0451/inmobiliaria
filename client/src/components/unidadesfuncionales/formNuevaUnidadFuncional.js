import React from 'react'

export default function FormUnidadFuncional(props) {
    return (
        <div>
             <form className="form-style-8" onSubmit={props.crearUnidadFuncional} id="form">
        <h2>Datos del locador</h2>

        <div className="row">
          <div className="col-md-6">
            <p className="has-dynamic-label">
              <input
                type="number"
                className=""
                name="padron"
                placeholder="Padron"
                required
              />
              <label for="in-range-input">Padron</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="poligono"
                placeholder="Poligono"
                required
              />
              <label for="in-range-input">Poligono</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="medidor"
                placeholder="Medidor"
                required
              />
              <label for="in-range-input">Medidor</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="dir_plan"
                placeholder="Direccion segun plan"
                required
              />
              <label for="in-range-input">Direccion Segun Plan</label>
            </p>
          </div>

          <div className="col-md-6">
            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="dir_boleta"
                placeholder="Direccion segun boleta"
                required
              />
              <label for="in-range-input">Direccion Segun Boleta</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="uf_tipo"
                placeholder="Tipo de Unidad Funcional"
                required
              />
              <label for="in-range-input">Tipo de Unidad Funcional</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="uf_tiponum"
                placeholder="Numero de Unidad Funcional"
                required
              />
              <label for="in-range-input">Numero de Unidad Funcional</label>
            </p>

            <p className="has-dynamic-label">
              <input
                type="text"
                className=""
                name="titular"
                placeholder="DNI del Titular"
                required
              />
              <label for="in-range-input">DNI del Titular</label>
            </p>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mt-4">
          Cargar
        </button>
      </form>
        </div>
    )
}
