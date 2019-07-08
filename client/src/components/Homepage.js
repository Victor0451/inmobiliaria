import React, { Component } from 'react'
import ContratosVencidos from './contratos/contratosVencidos';

//redux
import { connect } from "react-redux";
import { mostrarContratosVencidos } from "../actions/contratosActions";



class Homepage extends Component {


    componentDidMount() {
        let newDate = new Date();
        let month = newDate.getMonth();

        let fecha = `${month}`;

        this.props.mostrarContratosVencidos(fecha);

    }

    render() {

        const { contratos } = this.props
        console.log(contratos)

        if (Object.entries(contratos).length === 0) return <div className="container mt-4 text-center alert alert-success"><strong>No hay contratos vencidos</strong></div>

        return (
            <div className="">
                <h2 className="text-center my-5">Contratos Por Vencer</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8" >
                        <ul>
                            {contratos.map(contrato => (
                                <ContratosVencidos
                                    key={contrato.id_contrato}
                                    contrato={contrato}
                                />
                            ))}
                        </ul>
                    </div>
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
    { mostrarContratosVencidos }
)(Homepage);