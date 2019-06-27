import React from 'react'

const InfoContrato = ({ contrato }) => {
    return (
        <div>
            <div className="row mt-4">
                <div className="col-md-4">
                    <h3>Unidad Funcional: {contrato.uf_tiponum}</h3>
                </div>
                <div className="col-md-4">
                    <h3>Titular: {contrato.locador}</h3>
                </div>
                <div className="col-md-4">
                    <h3>1° Locatario: {contrato.dni_locatario}</h3>
                    <br />
                    <h3>2° Locatario: {contrato.dni_locatario2}</h3>
                </div>
            </div>

            <hr className="my-4" />
            <h3>PAGOS</h3>
            <br />

            <div className="border border-secondary p-2">
                <h3 className="">Pagos por contrato</h3>

                <div className="row mt-4 ">


                    <div className="col-md-3">
                        <p>
                            <span className="font-weight-bold">
                                Primer Pago:
                        </span> {''}
                            {contrato.contrato_p1}
                        </p>
                    </div>

                    <div className="col-md-3">
                        <p>
                            <span className="font-weight-bold">
                                Segundo Pago:
                        </span> {''}
                            {contrato.contrato_p2}
                        </p>
                    </div>

                    <div className="col-md-3">
                        <p>
                            <span className="font-weight-bold">
                                Tercer Pago:
                        </span> {''}
                            {contrato.contrato_p3}
                        </p>
                    </div>

                    <div className="col-md-3">
                        <p>
                            <span className="font-weight-bold">
                                Cuarto Pago:
                        </span> {''}
                            {contrato.contrato_p4}
                        </p>
                    </div>

                </div>
                <hr className="border border-secondary" />
                <div className="row d-flex justify-content-center">

                    <p>
                        <span className="font-weight-bold">
                            Total del contrato:
                        </span> {''}
                        {((contrato.contrato_p1 * 6) + (contrato.contrato_p2 * 6) + (contrato.contrato_p3 * 6) + (contrato.contrato_p4 * 6))}
                    </p>

                </div>

            </div>

            <hr className="my-4" />


            <div className="border border-secondary p-2">
                <h3 className="">Pagos por pagare</h3>

                <div className="row mt-4 ">


                    <div className="col-md-3">
                        <p>
                            <span className="font-weight-bold">
                                Primer Pago:
                        </span> {''}
                            {contrato.pagare_p1}
                        </p>
                    </div>

                    <div className="col-md-3">
                        <p>
                            <span className="font-weight-bold">
                                Segundo Pago:
                        </span> {''}
                            {contrato.pagare_p2}
                        </p>
                    </div>

                    <div className="col-md-3">
                        <p>
                            <span className="font-weight-bold">
                                Tercer Pago:
                        </span> {''}
                            {contrato.pagare_p3}
                        </p>
                    </div>

                    <div className="col-md-3">
                        <p>
                            <span className="font-weight-bold">
                                Cuarto Pago:
                        </span> {''}
                            {contrato.pagare_p4}
                        </p>
                    </div>

                </div>

                <hr className="border border-secondary" />
                <div className="row d-flex justify-content-center">
                    <p>
                        <span className="font-weight-bold">
                            Total del pagare:
                        </span> {''}
                        {((contrato.pagare_p1 * 6) + (contrato.pagare_p2 * 6) + (contrato.pagare_p3 * 6) + (contrato.pagare_p4 * 6))}
                    </p>
                </div>


            </div>

        </div>
    )
}

export default InfoContrato