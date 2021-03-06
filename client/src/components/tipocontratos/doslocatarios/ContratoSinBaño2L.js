import React, { Component } from "react";
import moment from "moment";

//redux
import { connect } from "react-redux";
import { mostrarUnidadFuncional } from "../../../actions/unidadFuncionalActions";
import { mostrarLocatario } from "../../../actions/locatarioActions";
import { mostrarContrato } from "../../../actions/contratosActions";
import { mostrarLocador } from "../../../actions/locadoresActions";

class ContratoSinBaño2L extends Component {
  state = {
    locatario: {},
    locatario2: {},
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
    let id = this.props.contrato.dni_locatario;

    this.props.mostrarLocatario(id);
  };

  traerLocatario2 = () => {
    let id = this.props.contrato.dni_locatario2;

    this.props.mostrarLocatario(id);
  };

  traerContrato = () => {
    let id = this.props.match.params.id;

    this.props.mostrarContrato(id);
  };

  traerUnFunc = () => {
    let id = this.props.contrato.uf_tiponum;

    this.props.mostrarUnidadFuncional(id);
  };

  traerLocador = () => {
    let id = this.props.unidadFuncional.titular;

    this.props.mostrarLocador(id);
  };

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
        });
      }, 700);
    }, 300);
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
    // let monthnumber = newDate.getMonth();
    let monthname = month[newDate.getMonth()];
    let year = newDate.getFullYear();

    let locatario = this.state.locatario;
    let locatario2 = this.state.locatario2;
    let uf = this.state.unidadFuncional;
    let locador = this.state.locador;
    let contrato = this.state.contrato;

    let alta = moment(contrato.alta).format("DD/MM/YYYY");
    let vencimiento = moment(contrato.vencimiento).format("DD/MM/YYYY");

    let ctotal =
      contrato.contrato_p1 * 6 +
      contrato.contrato_p2 * 6 +
      contrato.contrato_p3 * 6 +
      contrato.contrato_p4 * 6;

    return (
      <div className="container">
        <div id="contrato">
          <h2 className="text-center mt-4">
            <strong>CONTRATO DE LOCACION</strong>
          </h2>
          <font size="4.5">
            <p className="text-justify mt-4">
              En San salvador de jujuy, Provincia de Jujuy, República Argentina,
              a los <strong>01</strong> días del mes de
              <strong> Noviembre</strong> de <strong>{year}</strong>, entre la
              Sr/a <strong> {locador.nombre} </strong>{" "}
              <strong>{locador.apellido}</strong>, DNI{" "}
              <strong>{locador.dni}</strong> con domicilio en calle{" "}
              <strong> {locador.domicilio}</strong>
              de Ciudad de <strong>{locador.localidad}</strong> de{" "}
              <strong>{locador.provicia}</strong> –Provincia de{" "}
              <strong>{locador.provincia}</strong>- , en adelante denominado el
              LOCADOR, por una parte; y por la otra
              <strong> {locatario.apellido} </strong>
              <strong> {locatario.nombre} </strong> , CUIT
              <strong> {locatario.cuit} </strong>
              con domicilio en <strong>{locatario.domicilio}</strong> - B°
              <strong>{locatario.barrio}</strong> –
              <strong>{locatario.localidad}</strong>, –Provincia de Jujuy-, y el
              Sr.
              <strong> {locatario2.apellido} </strong>
              <strong>{locatario2.nombre}</strong>, CUIT
              <strong> {locatario2.cuit} </strong>
              con domicilio en <strong>{locatario2.domicilio}</strong> - B°
              <strong>{locatario2.barrio}</strong> –
              <strong>{locatario2.localidad}</strong>, –Provincia de Jujuy- en
              adelante los “LOCATARIOS”, se conviene en celebrar el presente
              Contrato de Locación Comercial, el que se regirá conforme a las
              siguientes cláusulas:
            </p>

            <p className="text-justify">
              <u>PRIMERA:</u> El locador da en arriendo a los locatarios y estos
              aceptan, la unidad funcional n° <strong> {uf.uf_tiponum} </strong>
              , identificada del <strong> {uf.dir_plan} </strong>, que se
              disgregan del edificio situado en OTERO Nº 464 de esta ciudad,
              fijándose como fecha de iniciación de este contrato el día{" "}
              <strong>{alta}</strong>, fecha a la cual retrotraen los efectos de
              este contrato. Todos los montos que se consignan a continuación en
              el presente contrato, incluyen IVA (impuesto al valor agregado).
              En este acto el locador recibe del locatario la suma de pesos:{" "}
              <strong>${contrato.contrato_p1 * 2}</strong>. Sirviendo la
              presente de suficiente recibo por dicho importe, aplicado a los
              siguientes conceptos: la suma de pesos: DOS MIL (
              <strong>${contrato.contrato_p1}</strong>) en concepto de pago
              anticipado de un mes de alquiler, correspondiente al mes de{" "}
              <strong> Noviembre </strong> del año <strong>{year}</strong> y la
              suma de pesos: (<strong>${contrato.contrato_p1}</strong>
              ), en concepto de deposito de garantía, los cuales serán devueltos
              al finalizar el presente contrato, una vez que se hayan abonado
              todos los alquileres, gastos de remodelación, impuestos y
              servicios por parte de los locatarios y eventuales reparaciones en
              el inmueble locado. En caso de existir saldo a pagar por los
              conceptos enunciados se abonaran con el importe del deposito hasta
              cubrir los mismos y si existiese saldo, serán abonados por los
              locatarios. 
              LOS LOCATARIOS se compromete a respetar y/o a cumplir
              cabalmente las disposiciones estatuídas en el Reglamento de
              Copropiedad y/o Convivencia que se encuentren vigentes durante el
              tiempo de la locación, el cual declaran conocer a la firma del
              presente contrato, facilitándose copia respectiva del mismo por
              éste acto.
            </p>

            <p className="text-justify">
              <u>SEGUNDA:</u> el termino de la Locacion será de dos (2) años a
              partir de la fecha citada, feneciendo el{" "}
              <strong>{vencimiento}</strong>,. A su vencimiento, si los
              locatarios desearan continuar en la locacion, se celebrara un
              nuevo contrato. Se pacta expresamente que los locatarios podrán
              rescindir la contratación luego de transcurridos seis (6) meses de
              locación, debiendo notificar fehacientemente su decisión al
              locador con una antelación mínima de sesenta (60) días de la fecha
              en que reintegrara el inmueble locado. Los locatarios deberán
              abonar el valor equivalente a 1 (un) mes y medio de alquiler si la
              rescisión se produce dentro del primer año de contrato, y de 1
              (un) mes de alquiler si se produce después del primer año, en
              concepto de indemnización.--
            </p>

            <p className="text-justify">
              <u>TERCERA:</u> El Locatario se compromete a abonar por la unidad
              funcional que arriendan la suma de (
              <strong>${contrato.contrato_p1}</strong>) mensuales, pagaderos por
              mes adelantado del 1 al 10 de cada mes, en calle LAVALLE Nº 123 de
              esta ciudad o donde el locador indique, además y como formando
              parte de la locacion los locatarios abonaran al Locador en el
              mismo termino, las expensas comunes por, limsa, impuestos
              inmobiliario, luz, agua, gas, que forman parte de dicha expensas,
              Internet y todo cuando otro gasto común que se realice para el
              buen funcionamiento y aseo de las unidades funcionales de los
              pisos del edificio. Los locatarios se comprometen y obligan a
              cumplir como así también respetar el reglamento de copropiedad y
              administración al que declaran conocer y aceptar. La mora es
              automática, opera de pleno derecho por el mero vencimiento, sin
              necesidad de interpelación judicial o extrajudicial alguna; y toda
              deuda atrasada devengará una mora equivalente al 0,5% diarios, por
              el período comprendido entre el vencimiento y el efectivo pago.-
            </p>

            <p className="text-justify">
              <u>CUARTA:</u> Se fija como precio total de la locacion, la suma
              de <strong> $ {ctotal} </strong>, suma esta que sera abonada en
              forma mensual y anticipada de la siguiente manera: (
              <strong>${contrato.contrato_p1}</strong>) mensuales hasta el mes 6
              (seis); desde el mes 7 (siete) hasta el mes 12 (doce) el alquiler
              pactado será de pesos (<strong>${contrato.contrato_p2}</strong>)
              desde el mes 13 (trece) hasta el mes 18 (dieciocho) el alquiler
              pactado será de pesos (<strong>${contrato.contrato_p3}</strong>)
              desde el mes 19 (diecinueve) hasta el mes 24 (veinticuatro) el
              alquiler pactado será de pesos (
              <strong>${contrato.contrato_p4}</strong>). Como complemento a lo
              mencionado con anterioridad en la presente cláusula se establece
              que por la situación de emergencia e incertidumbre que reina en el
              país sobre los pecios de las locaciones y sobre la evolución de
              los precios en general.- es por ello que si el precio fijado se
              tornara excesivamente oneroso para el locatario, podrán rescindir
              el contrato sin penalidad alguna. si lo fuera para el locador, el
              contrato quedara resuelto de pleno derecho y el locatario deberá
              desalojar el inmueble, en un plazo de 72 hrs. hábiles. el locador
              podrá evitar la rescisión del contrato, realizando un ofrecimiento
              de reajuste equitativo del precio, mediante un medio fehaciente de
              comunicación. el plazo de espera del mencionado ofrecimiento será
              de 10 días hábiles desde el pedido expreso de reajuste por parte
              del locador. el precio equitativo ofrecido por el locatario no
              podrá ser menor al precio que determine la cámara inmobiliaria de
              jujuy en base al reajuste fijado sobre el precio de la locacion.
            </p>

            <p className="text-justify">
              <u>QUINTA:</u> El locatario recibe la unidad funcional
              identificada <strong> N° {uf.uf_tiponum} </strong>
              del <strong> {uf.dir_plan} </strong> en perfectas condiciones de
              uso, ccon todos los herrajes, con todos los herrajes, un portero
              eléctrico, llaves, artefactos de iluminación y correctamente
              pintada y aseada, dando en este acto su mas absoluta conformidad a
              lo que aquí se manifiesta, comprometiéndose a restituirla al
              término de la locacion en las mismas condiciones en que la recibió
              y pintada con la misma calidad de pintura.
            </p>

            <p className="text-justify">
              <u>SEXTA:</u> El bien arrendado deberá ser destinado
              exclusivamente para el funcionamiento de la especialidad de los
              inquilinos y podrán ser compartidos con otros profesionales de su
              especialidad, sin que ello importe la admisión de cesión de la
              locacion o sub-locacion y al terminar la locacion y devolver la
              unidad funcional, los locatarios se comprometen a entregarlo libre
              de ocupantes y cosas.-
            </p>

            <p className="text-justify">
              <u>SEPTIMA:</u> Los locatarios no podrán introducir cambios,
              reformas, mejoras o modificaciones, de cualquier tipo y especie en
              el inmueble, sin autorización por escrito del locador. Todas las
              mejoras autorizadas que se realicen en las unidad funcional
              arrendada, aún con autorización de El Locador, quedaran en
              beneficio de la propiedad sin derecho a solicitar reintegro todo
              esto sin perjuicio de que el mismo (refiere El locador) puede
              exigir la inmediata restitución al estado anterior a costa
              exclusiva de los locatarios. Ellos (los locatarios) se
              responsabilizan por todos los daños que ocasionen no solo en la
              unidad funcional si no también en los espacios comunes del
              edificio de calle OTERO Nº 464 de esta ciudad. Como respaldo a
              esto se detalla a continuación los elementos que se encuentran en
              los espacios comunes, los cuales son: trece (13) unidades de Luces
              de Emergencia de 100 LED, marca ALIC; veintiún (21) artefactos de
              embutir redondo para dos lamparas, marca BAP; cuatro (4) unidades
              de Artefactos 36 x3 con sus respectivas lamparas marca BAP; doce
              (12) unidades de Artefactos 26 x2 con sus respectivas lamparas
              marcas BAP; Todos los espacios pintados con pintura de la marca
              Murella código 6084; una (1) puertas de aluminio negro con vidrio;
              cuatro (4) puertas ventanas de aluminio negro con vidrio;
              veinticuatro (24) ventanas de aluminio negro con vidrio; Seis (6)
              puertas de baños de marca Oblack, completas con vidrio, picaporte
              y cerraduras; Seis (6) Inodoros con tabla de madera, mochila y
              lavatorios Ferrum con gritería tipo prismática marca FV; trece
              (13) llaves de un puntos; doce (12) llaves de dos puntos; cuatro
              (4) llaves de tres puntos; (8) tomas corrientes; seis (6) tapas
              ciegas; dos (2) termotanques eléctricos de marca Rheem de 125
              litros.
            </p>

            <p className="text-justify">
              <u>OCTAVA:</u> El propietario y la administración quedan
              totalmente eximidos de responsabilidad por la rotura o
              desperfectos que se causen a artefactos eléctricos, (sea que dicho
              artefacto roto o con desperfectos) se encuentre en la unidad en la
              que se produjo o en cualquier otra.-
            </p>

            <p className="text-justify">
              <u>NOVENA:</u> El incumplimiento por parte de los locatarios a
              cualquiera de las cláusulas, prohibiciones, u obligaciones a su
              cargo, así como la falta de pago de dos mensualidades consecutivas
              de alquiler y/o expensas, dará derecho al locador a rescindir este
              contrato y exigir el inmediato desalojo, sin necesidad de
              interpelación judicial o extrajudicial de ninguna especie,
              debiendo restituirse a su propietario el bien objeto de la
              locacion en las condiciones establecidas en la cláusula cuarta.-
            </p>

            <p className="text-justify">
              <u>DECIMA:</u> Para cualquier cuestión litigiosa que pudiera
              plantearse las partes se someten a la jurisdicción de los
              tribunales ordinarios de la ciudad de san salvador de Jujuy, con
              exclusión de cualquiera otro fuero o jurisdicción de excepción,
              siendo validas las notificaciones que se realicen en los
              domicilios establecidos en el contrato.-
            </p>

            <p className="text-justify">
              <u>UNDECIMA:</u> El sellado del presente contrato por ante la
              Dirección Provincial de Rentas de la Provincia, cualquier impuesto
              que se creara y los que sean inherentes a la profesión de los
              ocupantes de la unidad funcional, serán a cargo de los
              locatarios.- En prueba de conformidad y para su fiel cumplimiento,
              se firman dos ejemplares de un mismo tenor e igual efecto en la
              ciudad de san salvador de Jujuy a los a los <strong>01</strong>{" "}
              días del mes de
              <strong> Noviembre </strong> de <strong>{year}</strong>.-
            </p>
          </font>
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-4"
          onClick={this.imprimir}
        >
          Imprimir Contrato
        </button>

        <hr />

        <div id="contradocumento" className="mt-4">
          <h2 className="text-center mt-4">
            <u>CONTRADOCUMENTO</u>
          </h2>
          <font size="4.5">
            <p className="text-justify mt-4">
              En San salvador de jujuy, Provincia de Jujuy, República Argentina,
              a los <strong>01</strong> días del mes de
              <strong> Noviembre </strong> de <strong>{year}</strong>, entre la
              Sr/a <strong> {locador.nombre} </strong>{" "}
              <strong> {locador.apellido} </strong>, DNI{" "}
              <strong> {locador.dni} </strong> con domicilio en calle{" "}
              <strong> {locador.domicilio} </strong>
              de Ciudad de <strong>{locador.localidad}</strong> de{" "}
              <strong>{locador.provicia}</strong> –Provincia de{" "}
              <strong>{locador.provincia}</strong>- , en adelante denominado el
              LOCADOR, por una parte; y por la otra
              <strong> {locatario.apellido} </strong>
              <strong> {locatario.nombre} </strong> , CUIT
              <strong> {locatario.cuit} </strong>
              con domicilio en <strong> {locatario.domicilio} </strong> - B°
              <strong> {locatario.barrio} </strong> –
              <strong> {locatario.localidad} </strong>, –Provincia de Jujuy-, y
              el Sr.
              <strong> {locatario2.apellido} </strong>
              <strong> {locatario2.nombre} </strong>, CUIT
              <strong> {locatario2.cuit} </strong>
              con domicilio en <strong>{locatario2.domicilio}</strong> - B°
              <strong>{locatario2.barrio}</strong> –
              <strong>{locatario2.localidad}</strong>, –Provincia de Jujuy- en
              adelante los “LOCATARIOS”, convienen en celebrar el
              presente CONTRADOCUMENTO en relación al Contrato de Locación
              celebrado entre las partes en fecha <strong>01</strong> de
              <strong> Noviembre</strong> de <strong>{year}</strong> respecto la
              unidad funcional n° <strong>{uf.uf_tiponum}</strong>, identificada
              del <strong>{uf.dir_plan}</strong>, que se disgregan del edificio
              situado en OTERO Nº 464 de esta ciudad.
            </p>

            <p className="text-justify mt-4">
              A tal evento, las partes manifiestan que a solicitud de los
              LOCATARIOS se han consignado en el referido instrumento un valor
              locativo referencial cuando el precio real de la locación
              celebrada entre las partes se ajusta a los siguientes valores
              locativos que serán abonada de la siguiente manera en forma
              mensual y por mes adelantado : 1.-')' hasta el mes de{" "}
              <strong>6 (Seis)</strong> inclusive el LOCATARIO abonará el pago
              de <strong>$ {contrato.contrato_p1 + contrato.pagare_p1}</strong>{" "}
              en forma mensual; 2.-')' desde el mes  <strong>7 (Siete) </strong>{" "}
              hasta el mes <strong>12 (Doce) </strong>
              inclusive el LOCATARIO abonará el pago de{" "}
              <strong>$ {contrato.contrato_p2 + contrato.pagare_p2}</strong> en
              forma mensual; 3.-')' desde el mes <strong>13 (Trece) </strong> al
              mes <strong>18 (Dieciocho) </strong> inclusive abonará el pago de{" "}
              <strong>$ {contrato.contrato_p3 + contrato.pagare_p3}</strong> en
              forma mensual; 4.-')' desde el mes{" "}
              <strong> 19 (Diecinueve) </strong> el LOCATARIO abonará el pago de
              <strong>
                {" "}
                $ {contrato.contrato_p4 + contrato.pagare_p4}{" "}
              </strong>{" "}
              en forma mensual hasta la cancelación del presente contrato. Estos
              valores locativos pactados lo son sin perjuicio del abono por
              parte del LOCATARIO de las expensas, luz, agua, y LIMSA conforme
              señala el contrato de locación suscripto. Las partes acuerdan que
              por cada una de las mensualidades estipuladas para el pago del
              precio de la locacion el LOCATARIO suscribe pagarés sin protesto
              con el monto correspondiente a cada valor locativo mensual, los
              cuales serán restituidos con el correspondiente abono del precio
              de locacion de cada mes.
            </p>
          </font>
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-4"
          onClick={this.imprimirCD}
        >
          Imprimir Contra Documento
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
)(ContratoSinBaño2L);
