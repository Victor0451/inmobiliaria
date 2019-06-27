import React, { Component } from 'react'

export default class FormLocatarioContrato extends Component {

  componentDidMount() {


  }

  render() {

    const { leerDatos, unidadFuncional, id_contrato, crearLocatarioContrato, crearLocatarioContrato2, altaRef, vencimientoRef } = this.props

    let tmp = new Date(Date.now());
    let alta = tmp.toISOString().split('T')[0];


    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let vencimiento = new Date(year + 2, month, day).toISOString().split('T')[0];

    return (
      <div>
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


                {/* Pagos Por Contrato */}


                <div className="container border border-secondary mt-4">
                  <h4 className="mt-2"> <u>Pagos Por Contrato</u> </h4>

                  <div className="row">
                    <div className="col-md-3">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          className=""
                          name="contrato_p1"
                          placeholder="1° Pago"
                          onChange={leerDatos}
                          required
                        />
                        <label >1° Pago</label>
                      </p>
                    </div>
                    <div className="col-md-3">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          className=""
                          name="contrato_p2"
                          placeholder="2° Pago"
                          onChange={leerDatos}
                          required
                        />
                        <label >2° Pago</label>
                      </p>
                    </div>
                    <div className="col-md-3">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          className=""
                          name="contrato_p3"
                          placeholder="3° Pago"
                          onChange={leerDatos}
                          required
                        />
                        <label >3° Pago</label>
                      </p>
                    </div>
                    <div className="col-md-3">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          className=""
                          name="contrato_p4"
                          placeholder="4° Pago"
                          onChange={leerDatos}
                          required
                        />
                        <label >4° Pago</label>
                      </p>
                    </div>
                  </div>
                </div>




                {/* PAGOS POR PAGARE */}





                <div className="container border border-secondary mt-4">
                  <h4 className="mt-2"> <u>Pagos Por Pagare</u> </h4>

                  <div className="row">
                    <div className="col-md-3">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          className=""
                          name="pagare_p1"
                          placeholder="1° Pago"
                          onChange={leerDatos}
                          required
                        />
                        <label >1° Pago</label>
                      </p>
                    </div>
                    <div className="col-md-3">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          className=""
                          name="pagare_p2"
                          placeholder="2° Pago"
                          onChange={leerDatos}
                          required
                        />
                        <label >2° Pago</label>
                      </p>
                    </div>
                    <div className="col-md-3">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          className=""
                          name="pagare_p3"
                          placeholder="3° Pago"
                          onChange={leerDatos}
                          required
                        />
                        <label >3° Pago</label>
                      </p>
                    </div>
                    <div className="col-md-3">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          className=""
                          name="pagare_p4"
                          placeholder="4° Pago"
                          onChange={leerDatos}
                          required
                        />
                        <label >4° Pago</label>
                      </p>
                    </div>
                  </div>
                </div>
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

                <p className="has-dynamic-label">
                  <select id="dynamic-label-input" onChange={leerDatos} defaultValue={"Default"} className="" name="tipo" required >
                    <option selected value="Default">Tipo de contrato</option>
                    <option value="contratosinbaño">Oficina Sin Baño</option>
                    <option value="contratoconbaño" >Oficina Con Baño</option>
                    <option value="contratosinbaño" >Local Sin Baño</option>
                    <option value="contratoconbaño" >Local Con Baño</option>
                    <option value="dptomono" >Dpto Monoambiente</option>
                    <option value="dpto2dorm" >Dpto Dos Dormitorios</option>
                  </select>
                </p>


                <p className="has-dynamic-label">
                  <input
                    type="date"
                    className=""
                    name="alta"
                    placeholder="Fecha de Alta"
                    onChange={leerDatos}
                    defaultValue={alta}
                    required
                    ref={altaRef}
                  />
                  <label className="mt-2">Fecha de Alta</label>
                </p>

                <p className="has-dynamic-label">
                  <input
                    type="date"
                    className=""
                    name="vencimiento"
                    placeholder="Fecha de Vencimiento"
                    onChange={leerDatos}
                    defaultValue={vencimiento}
                    ref={vencimientoRef}
                    required
                  />
                  <label className="mt-2" >Fecha de Vencimiento</label>
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
      </div >
    )
  }
}


