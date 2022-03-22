import React, { Component } from "react";

//redux
import { connect } from "react-redux";
import { mostrarUnidadFuncional } from "../../../actions/unidadFuncionalActions";
import { mostrarLocatario } from '../../../actions/locatarioActions';
import { mostrarContrato } from '../../../actions/contratosActions';
import { mostrarLocador } from '../../../actions/locadoresActions';



class ContratoSinBaño1L extends Component {
  state = {
    locatario: {},
    unidadFuncional: {},
    contrato: {},
    locador: {}
  };

  imprimir = () => {
    let contenido = document.getElementById("contrato").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload(true);
  };

  imprimirCD = () => {
    let contenido = document.getElementById("contradocumento").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload(true);
  };

  traerLocatario = () => {
    let id = this.props.contrato.dni_locatario

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

      this.traerContrato();
    }, 200);

    setTimeout(() => {

      this.traerLocatario();

    }, 300);

    setTimeout(() => {

      this.traerUnFunc();

    }, 400);


    setTimeout(() => {

      this.traerLocador();

    }, 550);

    setTimeout(() => {

      this.setState({
        contrato: this.props.contrato,
        locatario: this.props.locatarios.locatarios[0],
        unidadFuncional: this.props.unidadFuncional,
        locador: this.props.locadores
      })

    }, 650);

    setTimeout(() => {

      console.log(this.state);

    }, 700);
  }




  render() {


    let month = [];
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";


    let newDate = new Date();
    let date = newDate.getDate();
    //let monthnumber = newDate.getMonth();
    let monthname = month[newDate.getMonth()];
    let year = newDate.getFullYear();

    let locatario = this.state.locatario;
    let uf = this.state.unidadFuncional;
    let locador = this.state.locador;
    let contrato = this.state.contrato;

    return (
      <div className="container">
        <div id="contrato">
          <h2 className="text-center mt-4">
            <strong>CONTRATO DE COMODATO</strong>
          </h2>

          <p className="text-justify mt-4">
            Entre la firma <strong> “WERCHOW MEDICINA PRIVADA SOCIEDAD ANONIMA”</strong>.
            CUIT Nº 30-67535691-9, inscripta en el Registro Público de Comercio de esta Provincia al Folio 193,
            Acta Nro. 189, Libro 1 de Sociedades Anónimas; y Registrada con copia, bajo Asiento Nro. 5
            al Folio 29/70, Legajo V del Registro de Escrituras Mercantiles de S.A. con fecha 29 de
            Marzo de 2000, representada en este acto por su Presidente Don <strong>SANTIAGO JAVIER
              IRIARTE</strong>, argentino, D.N.I N° 23.116.380, nacido el día 22 de Noviembre del año 1972,
            Divorciado, Licenciado, domiciliado en calle Lavalle número 123, de esta Ciudad, llamado en
            adelante LA COMODANTE, por una parte y por la otra parte lo hace Don <strong>{locatario.nombre} {locatario.apellido}</strong>,
            argentino, D.N.I N° {locatario.dni},
            casado en primeras nupcias con ______________________, empleado, domiciliado en calle ________________, Planta Baja,
            departamento 2, Barrio Chijra, de esta Capital; llamado en adelante EL COMODATARIO;
            convienen en celebrar el presente contrato de Comodato, sujeto a las siguientes cláusulas y
            condiciones:
          </p>


          <p className="text-justify">
            <u>PRIMERA:</u> LA COMODANTE representada en este acto por Don Santiago
            Javier Iriarte da en comodato a EL COMODATARIO Don Raúl Horacio Urbina, un inmueble
            de su propiedad sito en calle Alhelí N” 779, Planta Baja, departamento “2”,
            del Barrio Chijra, de esta Capital, con Servicio de Energía Eléctrica número 257223,
            individualizado con Nomenclatura Catastral: CIRCUNSCRIPCION 1 -— SECCION 6 — MANZANA 103 —
            PARCELA 8, PADRON A-95640, MATRICULA A-72468, con las medidas, linderos,
            superficie y demás características que constan en su respectivo título.-
          </p>

          <p className="text-justify">
            <u>SEGUNDA:</u> El Comodatario Don ______________________, se compromete a dar al inmueble
            el destino de vivienda para el y su familia, sin poderla afectar para otro fin.-
          </p>

          <p className="text-justify">
            <u>TERCERA:</u> El Comodatario recibe el inmueble en buen estado de conservación,
            obligándose a su devolución en iguales condiciones a excepción de las mejoras que
            se realicen previa autorización de La Comodante,
            las cuales quedarán en beneficio de la titular del inmueble.-
          </p>

          <p className="text-justify">
            <u>CUARTA:</u> El Comodatario se compromete a desocupar y devolver la vivienda, cuando así
            lo disponga La Comodante, haciéndose pasible de una multa diaria en el caso de no entregar el bien, libre de ocupantes.-
          </p>
          <p className="text-justify">
            <u>QUINTA:</u> Para todos los efectos legales, judiciales, extrajudiciales y demás del presente
            contrato, las partes se someten desde ya a la jurisdicción de los Tribunales Ordinarios de esta
            Ciudad, fijando domicilio especial en el los lugares indicados al principio de este contrato.-
            Bajo los cinco artículos que anteceden, las partes dan por celebrado el presente contrato de
            comodato, obligándose a su fiel cumplimiento, firmándose dos ejemplares de un mismo tenor y a un solo efecto,
            en la Ciudad de San Salvador de Jujuy, a los ______________________________
          </p>


        </div>

        <button type="submit" className="btn btn-primary mt-4" onClick={this.imprimir}>
          Imprimir Contrato
        </button>

      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  unidadFuncional: state.unidadesFuncionales.unidadFuncional,
  contrato: state.contratos.contrato,
  locatarios: state.locatarios,
  locadores: state.locadores.locador

});

export default connect(
  mapStateToProps,
  { mostrarContrato, mostrarLocatario, mostrarUnidadFuncional, mostrarLocador }
)(ContratoSinBaño1L);