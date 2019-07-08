import React from 'react'


const FormRenovarContrato = ({ leerDatos, unidadFuncional, altaRef, vencimientoRef, locatario, locatario2, contrato }) => {

    let tmp = new Date(Date.now());
    let alta = tmp.toISOString().split('T')[0];


    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let vencimiento = new Date(year + 2, month, day).toISOString().split('T')[0];

    let id_contrato = `CONT-${locatario.dni}-${year}`

    return (
        <div>

            <form
                className="form-style-8"
                onSubmit={leerDatos}
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

                                defaultValue={locatario.dni}

                            />
                            <label>DNI</label>
                        </p>

                        <p className="has-dynamic-label">
                            <input
                                type="number"
                                className=""
                                name="cuit"
                                placeholder="Cuit/Cuil"

                                defaultValue={locatario.cuit}

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

                                readOnly

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

                                            defaultValue={contrato.contrato_p1}


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

                                            defaultValue={contrato.contrato_p2}

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

                                            defaultValue={contrato.contrato_p3}

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

                                            defaultValue={contrato.contrato_p4}

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
                                            defaultValue={contrato.pagare_p1}


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

                                            defaultValue={contrato.pagare_p2}

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

                                            defaultValue={contrato.pagare_p3}

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
                                            defaultValue={contrato.pagare_p4}


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

                                defaultValue={locatario.apellido}

                            />
                            <label >Apellido</label>
                        </p>

                        <p className="has-dynamic-label">
                            <input
                                type="text"
                                className=""
                                name="nombre"
                                placeholder="Nombre"

                                defaultValue={locatario.nombre}

                            />
                            <label >Nombre</label>
                        </p>

                        <p className="has-dynamic-label">
                            <input
                                type="text"
                                className=""
                                name="domicilio"
                                placeholder="Domicilio"

                                defaultValue={locatario.domicilio}

                            />
                            <label >Domicilio</label>
                        </p>

                        <p className="has-dynamic-label">
                            <input
                                type="text"
                                className=""
                                name="barrio"
                                placeholder="Barrio"

                                defaultValue={locatario.barrio}

                            />
                            <label >Barrio</label>
                        </p>

                        <p className="has-dynamic-label">
                            <input
                                type="text"
                                className=""
                                name="localidad"
                                placeholder="Localidad"

                                defaultValue={locatario.localidad}

                            />
                            <label >Localidad</label>
                        </p>

                        <p className="has-dynamic-label">
                            <select id="dynamic-label-input"  defaultValue={"Default"} className="" name="tipo"  >
                                <option selected value="Default">Tipo de contrato</option>
                                <option value="contratosinbaño">OTERO 464 - Oficina Sin Baño</option>
                                <option value="contratoconbaño" >OTERO 464 - Oficina Con Baño</option>
                                <option value="contratosinbaño" >OTERO 464 - Local Sin Baño</option>
                                <option value="contratoconbaño" >OTERO 464 - Local Con Baño</option>
                                <option value="contratodeptomono" >OTERO 464 - Dpto Monoambiente</option>
                                <option value="contratodpto2dorm" >OTERO 464 - Dpto Dos Dormitorios</option>
                                <option value="contratodeptoaleli" >ALELI 779 - Departamentos</option>
                            </select>
                        </p>


                        <p className="has-dynamic-label">
                            <input
                                type="date"
                                className=""
                                name="alta"
                                placeholder="Fecha de Alta"

                                defaultValue={alta}

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

                                defaultValue={vencimiento}
                                ref={vencimientoRef}

                            />
                            <label className="mt-2" >Fecha de Vencimiento</label>
                        </p>
                    </div>
                </div>





                <br /><br /><br />
                <hr />



                <h2>Datos del segundo locatario</h2>
                <div className="row">
                    <div className="col-md-6">
                        <p className="has-dynamic-label">
                            <input
                                type="number"
                                className=""
                                name="dni2"
                                placeholder="DNI"
                                defaultValue={locatario2.dni}

                            />
                            <label >DNI</label>
                        </p>

                        <p className="has-dynamic-label">
                            <input
                                type="number"
                                className=""
                                name="cuit2"
                                placeholder="Cuit/Cuil"
                                defaultValue={locatario2.cuit}

                            />
                            <label >Cuit/Cuil</label>
                        </p>

                        <p className="has-dynamic-label">
                            <input
                                type="text"
                                className=""
                                name="id_contrato"
                                value={id_contrato}
                                readOnly
                                placeholder="Numero de Contrato"
                                defaultValue={id_contrato}

                            />
                            <label >Numero de Contrato</label>
                        </p>
                    </div>

                    <div className="col-md-6">
                        <p className="has-dynamic-label">
                            <input
                                type="text"
                                className=""
                                name="apellido2"
                                placeholder="Apellido"
                                defaultValue={locatario2.apellido}

                            />
                            <label >Apellido</label>
                        </p>

                        <p className="has-dynamic-label">
                            <input
                                type="text"
                                className=""
                                name="nombre2"
                                placeholder="Nombre"
                                defaultValue={locatario2.nombre}

                            />
                            <label >Nombre</label>
                        </p>

                        <p className="has-dynamic-label">
                            <input
                                type="text"
                                className=""
                                name="domicilio2"
                                placeholder="Domicilio"
                                defaultValue={locatario2.domicilio}

                            />
                            <label >Domicilio</label>
                        </p>

                        <p className="has-dynamic-label">
                            <input
                                type="text"
                                className=""
                                name="barrio2"
                                placeholder="Barrio"
                                defaultValue={locatario2.barrio}

                            />
                            <label >Barrio</label>
                        </p>

                        <p className="has-dynamic-label">
                            <input
                                type="text"
                                className=""
                                name="localidad2"
                                placeholder="Localidad"
                                defaultValue={locatario2.localidad}

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
    )
}

export default FormRenovarContrato
