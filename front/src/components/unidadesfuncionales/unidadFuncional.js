import React, { Component } from 'react'

//redux
import { connect } from "react-redux";
import { mostrarUnidadFuncional } from "../../actions/unidadFuncionalActions";



class unidadFuncional extends Component {
    state = {
        unidadesFuncionales: {}

    }

    componentDidMount() {

        let id = this.props.match.params.id;
        this.props.mostrarUnidadFuncional(id);

    }

    componentWillReceiveProps(nextProps) {
        const { unidadesFuncionales } = nextProps

        this.setState({ unidadesFuncionales: unidadesFuncionales }
        )
    }

    render() {

        const { unidadesFuncionales } = this.state;
        
        return (
            <div>
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-3"> {unidadesFuncionales.dir_boleta}</h1>
                        </div>
                    </div>

                    <hr className="my-4" />


                </div>
            </div>
        )
    }
}

//state
const mapStateToProps = state => ({
    unidadesFuncionales: state.unidadesFuncionales.unidadFuncional

});

export default connect(
    mapStateToProps,
    { mostrarUnidadFuncional }
)(unidadFuncional);