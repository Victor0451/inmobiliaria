import React, { Component } from 'react';
import FormRenovarContrato from './formRenovarContrato'
import toastr from '../../utils/toastr'

//redux
import { connect } from "react-redux";
import { mostrarUnidadFuncional } from "../../actions/unidadFuncionalActions";
import { mostrarLocatario } from '../../actions/locatarioActions';
import { mostrarContrato } from '../../actions/contratosActions';
import { mostrarLocador } from '../../actions/locadoresActions';


class RenovarContrato extends Component {

    altaRef = React.createRef();
    vencimientoRef = React.createRef();


    state = {
        locatario: {},
        locatario2: {},
        contrato: {},
        locador: {},
        unidadFuncional: {},
        dni: '',
        cuit: '',
        nombre: '',
        apellido: '',
        domicilio: '',
        barrio: '',
        localidad: '',
        uf_tipo: '',
        uf_tiponum: '',
        contrato_p1: '',
        contrato_p2: '',
        contrato_p3: '',
        contrato_p4: '',
        pagare_p1: '',
        pagare_p2: '',
        pagare_p3: '',
        pagare_p4: '',
        id_contrato: '',
        dni2: '',
        cuit2: '',
        nombre2: '',
        apellido2: '',
        domicilio2: '',
        barrio2: '',
        localidad2: '',
        tipo: ''
    };

    leerDatos = e => {
        e.preventDefault();

        const {
            dni,
            cuit,
            nombre,
            apellido,
            domicilio,
            barrio,
            localidad,
            uf_tipo,
            uf_tiponum,
            contrato_p1,
            contrato_p2,
            contrato_p3,
            contrato_p4,
            pagare_p1,
            pagare_p2,
            pagare_p3,
            pagare_p4,
            dni2,
            cuit2,
            nombre2,
            apellido2,
            domicilio2,
            barrio2,
            localidad2,
            id_contrato,
            tipo
        } = e.target.elements


        if (tipo.value === 'Default') {
            toastr.warning("Debes seleccionar un tipo de contrato", "ATENCION")
        } else {


            this.setState({

                dni: dni.value,
                cuit: cuit.value,
                nombre: nombre.value,
                apellido: apellido.value,
                domicilio: domicilio.value,
                barrio: barrio.value,
                localidad: localidad.value,
                uf_tipo: uf_tipo.value,
                uf_tiponum: uf_tiponum.value,
                contrato_p1: contrato_p1.value,
                contrato_p2: contrato_p2.value,
                contrato_p3: contrato_p3.value,
                contrato_p4: contrato_p4.value,
                pagare_p1: pagare_p1.value,
                pagare_p2: pagare_p2.value,
                pagare_p3: pagare_p3.value,
                pagare_p4: pagare_p4.value,
                id_contrato: id_contrato.value,
                tipo: tipo.value
            });

            if (dni2.value === "") {
                toastr.success(`Se renovo el contrato: ${id_contrato.value} con exito`, "ATENCION")
            } else {
                this.setState({
                    dni2: dni2.value,
                    cuit2: cuit2.value,
                    nombre2: nombre2.value,
                    apellido2: apellido2.value,
                    domicilio2: domicilio2.value,
                    barrio2: barrio2.value,
                    localidad2: localidad2.value,
                    id_contrato: id_contrato.value

                });
                toastr.success(`Se renovo el contrato: ${id_contrato.value} con exito`, "ATENCION")

            }
        }


    }


    traerLocatario = () => {
        let id = this.props.contrato.dni_locatario

        this.props.mostrarLocatario(id)

    }

    traerLocatario2 = () => {
        let id = this.props.contrato.dni_locatario2

        this.props.mostrarLocatario(id)

    }

    traerContrato = () => {
        let id = this.props.match.params.id;

        this.props.mostrarContrato(id)

    }

    traerUnFunc = () => {
        let id = this.props.contrato.uf_tiponum

        this.props.mostrarUnidadFuncional(id);
    }

    traerLocador = () => {
        let id = this.props.unidadFuncional.titular;

        this.props.mostrarLocador(id)
    }


    componentDidMount() {
        setTimeout(() => {

            setTimeout(() => {

                this.traerContrato();
            }, 200);

            setTimeout(() => {

                this.traerLocatario();

            }, 300);

            setTimeout(() => {

                this.traerLocatario2();

            }, 400);

            setTimeout(() => {

                this.traerUnFunc();

            }, 500);


            setTimeout(() => {

                this.traerLocador();

            }, 600);

            setTimeout(() => {

                this.setState({
                    contrato: this.props.contrato,
                    locatario: this.props.locatarios.locatarios[0],
                    locatario2: this.props.locatarios.locatarios[1],
                    unidadFuncional: this.props.unidadFuncional,
                    locador: this.props.locadores
                })

            }, 700);


        }, 300);

    }

    render() {


        return (
            <div>
                <FormRenovarContrato
                    leerDatos={this.leerDatos}
                    unidadFuncional={this.state.unidadFuncional}
                    locatario={this.state.locatario}
                    locatario2={this.state.locatario2}
                    contrato={this.state.contrato}
                    altaRef={this.altaRef}
                    vencimientoRef={this.vencimientoRef}
                />
            </div>
        )
    }
}


//state
const mapStateToProps = state => ({
    unidadFuncional: state.unidadesFuncionales.unidadFuncional,
    contrato: state.contratos.contrato,
    locatarios: state.locatarios,
    locadores: state.locadores.locadors

});

export default connect(
    mapStateToProps,
    { mostrarContrato, mostrarLocatario, mostrarUnidadFuncional, mostrarLocador }
)(RenovarContrato);