import React, { Component } from 'react';
import { Link } from 'react-router-dom'


//redux
import { connect } from "react-redux";
import { mostrarContratos } from "../../actions/contratosActions";

class listadoContratos extends Component {

    componentDidMount() {

        this.props.mostrarContratos();

    }

    render() {
        const { contratos } = this.props

        if (Object.entries(contratos).length === 0) return <div className="container mt-4 text-center alert alert-success"><strong>No hay registrados</strong></div>

        return (
            <div className="form-style-8">
                <h2> Listado de Contratos </h2>
                <div className="table-wrapper table-responsive">
                    <table className="fl-table">
                        <thead>
                            <tr>
                                <th scope="col">ID Contrato</th>
                                <th scope="col">DNI Locatario</th>
                                <th scope="col">DNI 2° Locatario</th>
                                <th scope="col">N° Unidad Funcional</th>
                                <th scope="col">Locador</th>
                                <th scope="col">Alta de Contrato</th>
                                <th scope="col">Vencimiento</th>
                                <th scope="col">Acciones</th>

                            </tr>
                        </thead>
                        <tbody>
                            {contratos.map((item) => {
                                return (

                                    <tr key={item.id_contrato}>
                                        <td>
                                            {item.id_contrato}
                                        </td>
                                        <td>
                                            {item.dni_locatario}
                                        </td>
                                        <td>
                                            {item.dni_locatario2}
                                        </td>
                                        <td>
                                            {item.uf_tiponum}
                                        </td>
                                        <td>
                                            {item.locador}
                                        </td>
                                        <td>
                                            {item.alta}
                                        </td>
                                        <td>
                                            {item.vencimiento}
                                        </td>

                                        <td>

                                            <Link to={`/contratos/renovar/${item.id_contrato}`} className="btn btn-primary btn-block" >Renovar</Link>
                                            <Link to={`/contratos/${item.id_contrato}`} className="btn btn-secondary btn-block" >Mas Informacion</Link>


                                        </td>

                                    </tr>



                                );

                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
//state
const mapStateToProps = state => ({
    contratos: state.contratos.contratos

});

export default connect(
    mapStateToProps,
    { mostrarContratos }
)(listadoContratos);