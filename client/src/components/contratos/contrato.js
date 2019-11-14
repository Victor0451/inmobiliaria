import React, { Component } from 'react'
import { Link } from "react-router-dom";
import InfoContrato from './infocontrato';


//redux
import { connect } from "react-redux";
import { mostrarContrato } from "../../actions/contratosActions";





class Contrato extends Component {
    state = {
        contrato: {}

    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.mostrarContrato(id);
    }

    componentWillReceiveProps(nextProps, nextState) {
        const { contrato } = nextProps;

        this.setState({
            contrato: contrato,
        });
    }

    render() {
        const { contrato } = this.state;

        if (!contrato) return <h1>Cargando...</h1>

        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <Link to="/contratos/listados" className="btn btn-secondary">
                            <i className="fas fa-arrow-circle-left"></i> {''}
                            Volver al Listado
                      </Link>
                    </div>
                </div>

                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-3"> {contrato.id_contrato}</h1>
                        </div>
                    </div>


                    <InfoContrato contrato={contrato} />

                </div>
            </div>



        )
    }
}

//state
const mapStateToProps = state => ({
    contrato: state.contratos.contrato

});

export default connect(
    mapStateToProps,
    { mostrarContrato }
)(Contrato);