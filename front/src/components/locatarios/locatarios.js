import React, { Component } from 'react'
import { Link } from "react-router-dom";


//redux
import { connect } from "react-redux";
import { mostrarLocatarios } from "../../actions/locatarioActions";

class Locatarios extends Component {

    componentDidMount() {
        this.props.mostrarLocatarios()
    }

    render() {

        const { locatarios } = this.props

        return (
            <div className="form-style-8">
                <h2> Unidades Funcionales </h2>
                <div className="table-wrapper table-responsive">
                    <table className="fl-table">
                        <thead>
                            <tr>
                                <th scope="col">Apellido</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">DNI</th>
                                <th scope="col">CUIT/CUIL</th>
                                <th scope="col">Domicilio</th>
                                <th scope="col">Barrio</th>
                                <th scope="col">Localidad</th>
                                <th scope="col">Acciones</th>

                            </tr>
                        </thead>
                        <tbody>
                            {locatarios.map((item) => {
                                return (

                                    <tr key={item.dni}>
                                        <td>
                                            {item.apellido}
                                        </td>
                                        <td>
                                            {item.nombre}
                                        </td>
                                        <td>
                                            {item.dni}
                                        </td>
                                        <td>
                                            {item.cuit}
                                        </td>
                                        <td className="toggler">
                                            {item.domicilio}
                                        </td>
                                        <td>
                                            {item.barrio}
                                        </td>
                                        <td>
                                            {item.localidad}
                                        </td>
                                        <td>

                                            <Link to={`/crearcontrato/${item.uf_tiponum}`} className="btn btn-primary btn-block" >Selecionar</Link>
                                            <Link to={`/unidadesfuncionales/${item.uf_tiponum}`} className="btn btn-secondary btn-block" >Mas Informacion</Link>


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
    locatarios: state.locatarios.locatarios

});

export default connect(
    mapStateToProps,
    { mostrarLocatarios }
)(Locatarios);