import React from 'react'
import { Link } from 'react-router-dom';


const ContratosVencidos = (contrato) => {
    const { id_contrato } = contrato.contrato
    return (
        <li className="list-group-item">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-8 d-flex justify-content-between align-items-center">
                    <p className="text-dark m-0">{id_contrato}</p>
                </div>

                <div className="col-md-4 d-flex justify-content-end acciones">
                    <Link
                        to={`/contratos/renovar/${id_contrato}`}
                        className="btn btn-primary mr-2"
                    >
                        Renovar
                  </Link>
                    <Link
                        to={`/contratos/${id_contrato}`}
                        className="btn btn-secondary mr-2"
                    >
                        Mas Informacion
                  </Link>

                </div>
            </div>
        </li>


    )
}

export default ContratosVencidos
