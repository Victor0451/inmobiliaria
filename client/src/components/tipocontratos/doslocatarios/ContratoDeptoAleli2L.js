import React, { Component } from "react";
import moment from "moment";

//redux
import { connect } from "react-redux";
import { mostrarUnidadFuncional } from "../../../actions/unidadFuncionalActions";
import { mostrarLocatario } from "../../../actions/locatarioActions";
import { mostrarContrato } from "../../../actions/contratosActions";
import { mostrarLocador } from "../../../actions/locadoresActions";

class ContratoDeptoAleli2L extends Component {
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
    let monthnumber = newDate.getMonth();
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
              Entre SRA.LAURA EMILIA BRAVO DNI N°27.585.522,representado en este
              acto por el Sr. JOAQUIN IRIARTE N°25.444.609 con domicilio en
              calle Lavalle N°123, San Salvador de Jujuy, Provincia de Jujuy, en
              adelante LA LOCADORA y <strong> {locatario.apellido} </strong>
              <strong> {locatario.nombre}</strong> ,
              <strong>{locatario.cuit} </strong>
              con domicilio en <strong> {locatario.domicilio}</strong> - B°
              <strong> {locatario.barrio}</strong> –
              <strong> {locatario.localidad}</strong>, –Provincia de Jujuy-, y
              el Sr.
              <strong> {locatario2.apellido} </strong>
              <strong>{locatario2.nombre}</strong>, CUIT
              <strong> {locatario2.cuit} </strong>
              con domicilio en <strong> {locatario2.domicilio}</strong> - B°
              <strong> {locatario2.barrio}</strong> –
              <strong> {locatario2.localidad}</strong>, –Provincia de Jujuy-,
              LOS LOCATARIOS , las partes conviene en celebrar el presente
              contrato de locación, sujeto a las siguientes cláusulas:
            </p>

            <p className="text-justify">
              <u>PRIMERA:</u> LA LOCADORA da en locación a LOS LOCATARIOS y
              éstos aceptan, la unidad funcional de un (1) AMBIENTES, una
              habitación con una alacena con mesada y tres puertas, incluye el
              alquiler una cocina eléctrica de dos hornallas. Y una habitación
              baño con una ducha lavatorio inodoro y bidet, todo instalando y
              funcionando , las ventas y puertas cuentas con sus aberturas en
              perfecto estado y sus vidrios sanos,el departamento en cuestión se
              individualiza identificada como <strong>{uf.uf_tipo}</strong>, del
              edificio de propiedad del primero, ubicado en la calle ALELI N°779
              del barrio chijra, departamento Manuel Belgrano, Provincia de
              Jujuy fijándose como fecha de inicio de este contrato el día
              <strong> {alta}</strong>, fecha a la cual retrotraen los efectos
              de este contrato. Todos los montos que se consignan a continuación
              en el presente contrato incluyen impuesto de IVA (impuesto al
              valor agregado) e Ingresos Bruto, los cuales se encuentran a cargo
              de LOS LOCATARIOS. En este acto LA LOCADORA recibe de LOS
              LOCATARIOS, suma de PESOS
              <strong> ${contrato.contrato_p1}</strong>. sirviendo la presente
              de suficiente recibo por dicho importe, aplicado al concepto de
              pago anticipado de un mes de alquiler, correspondientes al mes de{" "}
              <strong>Agosto </strong>
              del año <strong>2021</strong>. Por otra parte, los locatarios
              presentan documentación suficiente – fotocopias de recibos de
              sueldos, fotocopias de documentos, una vez que se haya abonados
              todos los alquileres, gastos de remodelación, impuestos y
              servicios por parte de LOS LOCATARIOS y eventuales reparaciones en
              el inmueble alquilado. En caso de existir saldo a pagar por los
              conceptos enunciados de abonaran por parte el total, hasta cubrir
              los mismos.
              LOS LOCATARIOS se compromete a respetar y/o a cumplir
              cabalmente las disposiciones estatuídas en el Reglamento de
              Copropiedad y/o Convivencia que se encuentren vigentes durante el
              tiempo de la locación, el cual declaran conocer a la firma del
              presente contrato, facilitándose copia respectiva del mismo por
              éste acto.
            </p>

            <p className="text-justify">
              <u>SEGUNDA:</u> LOS LOCATARIOS realizaran un depósito en garantía
              de Pesos (<strong>${contrato.contrato_p1}</strong>). Estemonto que
              será devuelto una vez finalizado o vencido el plazo de vigencia de
              esta locación o cuando las partes resuelvan su rescisión, siempre
              y cuando LOS LOCATARIOS no adeuden suma alguna por ningún
              concepto. Dicha garantía no reconocerá ningún tipo de interés o
              reajuste hasta la fecha de su devolución.
            </p>

            <p className="text-justify">
              <u>TERCERA:</u> LOS LOCATARIOS se obligan a respetar y acatar el
              reglamento de copropiedad y administración que declaran conocer y
              aceptar, y no podrán introducir mejoras de ningún tipo en el
              inmueble y especialmente en la fachada del edificio, en el que
              queda expresamente prohibido colocar cartelera, artefactos (aire
              acondicionado, etc.) o alterar de cualquier otra forma la fachada,
              sin previa autorización escrita de LA LOCADORA, siendo la
              infracción a esta prohibición causal de inmediato desalojo, además
              de una multa diaria equivalente a la quinceava parte del valor
              locativo mensual vigente al momento de la infracción, desde que
              ésta fuera cometida y hasta el efectivo retiro de la cartelera,
              artefacto o modificación de la fachada. En cualquier supuesto, las
              mejoras introducidas y autorizadas por escrito por LA LOCADORA
              quedarán en beneficio del inmueble sin derecho a resarcimiento
              alguno para LOS LOCATARIOS salvo que LA LOCADORA optare por exigir
              la remoción de las mejoras, a cargo exclusivo de LOS LOCATARIOS, y
              la restitución del inmueble en las mismas condiciones recibidas.
            </p>

            <p className="text-justify">
              <u>CUARTA:</u> LOS LOCATARIOS se responsabilizan por los daños que
              los mismos y/o las personas que concurran y/o trabajen en el
              departamento alquilado (sean o no dependientes de aquellos)
              ocasionen no sólo en la unidad funcional dada en locación, sino
              también en los espacios comunes del edificio de Alelí N°779 de
              esta ciudad.
            </p>

            <p className="text-justify">
              <u>QUINTA:</u> El presente contrato se celebra por el plazo de TRES
              (3) años a contar desde el día
              <strong> {alta}</strong>, por lo que su vencimiento operará, sin
              necesidad de requerimiento previo alguno, judicial ni
              extrajudicial, el día
              <strong> {vencimiento}</strong>. Al vencimiento del plazo pactado,
              salvo que se celebrara un nuevo contrato de locación o se acordara
              expresamente una extensión del presente, LOS LOCATARIOS deberán
              desocupar el inmueble y entregarlo, junto con los accesorios
              recibidos, libre de todo ocupante y/o cosas, en perfecto estado de
              uso y conservación. Si LOS LOCATARIOS no cumplieran con la
              obligación de desocupación y restitución del departamento
              alquilado,en el plazo y en las condiciones que se pactan en este
              contrato, sea por culpa propia o por fuerza mayor o caso fortuito,
              por esa sola circunstancia incurrirán en mora de pleno derecho sin
              necesidad de interpelación judicial o extrajudicial previa,
              devengándose a partir de esta fecha y por el tiempo de demora, a
              favor de LA LOCADORA, una multa equivalente al cinco por ciento
              (5%) del último alquiler o precio locativo vigente, por cada día
              de demora, sin necesidad de requerimiento previo alguno, judicial
              ni extrajudicial. Ello, sin perjuicio de abonar el valor locativo
              vigente hasta la efectiva devolución del departamento alquilado y
              por mes completo, en las condiciones pactadas precedentemente. LOS
              LOCATARIOS solo podrán justificar el reintegro del departamento
              alquilado, en el plazo y en las condiciones pactadas, mediante
              constancia escrita y firmada por LALOCADORA.LOS LOCATARIOS podrán
              efectuar la rescisión anticipada de este contrato de conformidad
              con las disposiciones del art. 1221, inc. a) del Código Civil y
              Comercial.
            </p>

            <p className="text-justify">
              <u>SEXTA:</u> Se fija de común acuerdo
              {/* en concepto de precio
              locativo total de $ <strong>{ctotal}</strong> (pesos ochenta y
              cuatro mil ochocientos cuatro)  */}
               la forma de pago de la siguiente forma: (
              <strong>${contrato.contrato_p1}</strong>) para el primer año
              de vigencia del presente contrato; de PESOS (
              <strong>$ {contrato.contrato_p2}</strong>)para el segundo
              año; de PESOS (<strong>${contrato.contrato_p3}</strong>) para
              el tercer año.
              {/* de PESOS (
              <strong>$ {contrato.contrato_p4}</strong>) para el cuarto último
              semestre. */}
              Dicho precio locativo mensual deberá abonarse por
              mesadelantado del día 1º al 10º del mes que corresponda, en el
              domicilio de LA LOCADORA o en el lugar que éste indique en lo
              sucesivo por medio fehaciente, produciéndose la mora de pleno
              derecho, por el solo vencimiento del plazo de pago pactado, sin
              necesidad de intimación o requerimiento previo alguno y toda deuda
              atrasada, sea por precio locativo o por gastos comunes mensuales
              (que se especifican en la cláusula séptima del presente),
              devengará un interés equivalente al 0,5 % diario, en el período
              comprendido entre el vencimiento y la fecha del efectivo pago. Los
              montos establecidos precedentemente como precios locativos
              mensuales incluyen el impuesto nacional al valor agregado (I.V.A.)
              y el impuesto provincial a los ingresosbrutos. Se deja establecido
              que, si por las condiciones del mercado inmobiliario o por las
              económicas del país o por cualquier otra circunstancia ajena a las
              partes, se produjeran distorsiones o modificaciones importantes en
              relación a los valores locativos precedentemente pactados, las
              partes se reunirán a efectos de realizar los ajustes que fueran
              necesarios, en relación al precio locativo pactado, obligándose a
              adecuar este instrumento en lo concerniente al precio locativo, de
              conformidad al principio del esfuerzo compartido. En caso de no
              arribar a un acuerdo sobre el particular, es voluntad de las
              partes rescindir el presente contrato, no debiéndose indemnización
              alguna por ninguna de las partes, debiendo desocupar el inmueble
              LOS LOCATARIOS en un plazo de quince días, abonando la parte
              proporcional del alquiler devengado hasta entonces y deberá
              acreditar el pago de los servicios, tasas e impuestos a su cargo.
            </p>

            <p className="text-justify">
              <u>SEPTIMA:</u> LA LOCADORA no será responsable por los daños que
              se ocasionaren a LOS LOCATARIOS u otras personas que trabajen o se
              encuentren circunstancialmente en launidad funcional lacada, por
              accidentes tales como incendios, terremotos, hurtos, robos u otros
              acontecimientos, sea que se produzcan por hechos de la naturaleza,
              por desperfectos de la construcción, roturas de cañerías o
              desperfectos de artefactos, de los servicios de agua corriente,
              energía eléctrica y/o gas natural o por acción u omisión de LOS
              LOCATARIOS o de terceros.
            </p>

            <p className="text-justify">
              <u>OCTAVA:</u> LOS LOCATARIOS no podrán transferir, ni ceder total
              o parcialmente éste contrato, por el título que fuere, ni
              subarrendar, ni prestar, total o parcialmente, la unidad funcional
              lacada, sin la expresa conformidad por escrito de LA LOCADORA,
              siendo el incumplimiento de esta obligación causal de desalojo.
              Así mismo en dicha unidad funcional será para uso familiar de LOS
              LOCATARIOS.
            </p>

            <p className="text-justify">
              <u>NOVENA:</u> Se prohíbe en forma expresa a LAS LOCATARIAS tener
              en la unidad funcional arrendada cualquier tipo de animal
              doméstico. De común acuerdo se establece como causa
              suficientemente grave y fundante de resolución contractual, la
              violación de esta prohibición. Sin perjuicio de la inmediata
              interposición de acción de desalojo que promoviere LA LOCADORA,
              LAS LOCATARIAS deberán abonar una multa diaria equivalente a la
              treintava parte del alquiler vigente a ese momento, por cada día
              de permanencia en el inmueble alquilado a partir de la recepción
              de la comunicación de resolución contractual. -
            </p>

            <p className="text-justify">
              <u>DECIMA:</u> Además, y como formando parte de la locación LOS
              LOCATARIOS abonarán a LA LOCADORA, del 1º al 10º día del mes que
              corresponda, en el domicilio de éste, las expensas comunes, los
              gastos mensuales comunes por LIMSA, impuesto inmobiliario, luz,
              agua, gas, gastos de mantenimiento, limpieza de palieres y
              espacios comunes y todo otro gasto común que se realice para el
              buen funcionamiento y aseo de las unidades funcionales arrendadas.
              También son a cargo exclusivo de LOS LOCATARIOS los gastos que
              demanden las reparaciones urgentes y necesarias o útiles,
              cualquiera sea la causa de los deterioros o desperfectos, incluso
              los producidos por la naturaleza, la calidad de las cosas o vicios
              ocultos o manifiestos de éstas. A estos efectos, LA LOCADORA
              comunicaráa LOS LOCATARIOS el monto de las expensas comunes
              mensuales y/o de las reparaciones urgentes y necesarias o útiles,
              estándole vedado a éste último cuestionar o impugnar el monto de
              las mismas.
            </p>

            <p className="text-justify">
              <u>UNDECIMA:</u> LA LOCADORA queda totalmente eximido de
              responsabilidad por la rotura o desperfectos que se causen a
              artefactos eléctricos, por las causas que fueran, especialmente
              por violación de la prohibición establecida en la presente
              cláusula, por parte de cualquier locatario, sea que el artefacto
              roto o con desperfectos se encuentre en la unidad en la que se
              produjo la violación o en cualquier otra. -
            </p>

            <p className="text-justify">
              <u>DECIMO SEGUNDA:</u> El incumplimiento por parte de LOS
              LOCATARIOS de cualquiera de las cláusulas, prohibiciones, u
              obligaciones a su cargo, así como la falta de pago del precio
              locativo y/o de dos mensualidades consecutivas de gastos comunes,
              dará derecho al locador a rescindir este contrato y exigir el
              inmediato desalojo, sin necesidad de interpelación judicial o
              extrajudicial de ninguna especie, debiendo restituirse al LOCADORA
              el bien objeto de la locación en las 72 (setenta y dos horas)
              subsiguientes de comunicada la resolución del contrato; en las
              condiciones establecidas precedentemente.
            </p>

            <p className="text-justify">
              <u>DECIMO TERCERA:</u> Son a cargo de LOS LOCATARIOS el impuesto
              de sellos del presente contrato, así como cualquier impuesto que
              se creara, los impuestos que se generen por la actividad de LOS
              LOCATARIOS en la UNIDAD FUNCIONAL alquilado , así como las tasas y
              multas municipales, provinciales y/o nacionales que se impongan
              por tales actividades. Se establece que los gastos y honorarios de
              certificación del presente contrato, son a cargo de LOS
              LOCATARIOS.
            </p>

            <p className="text-justify">
              <u>DECIMO CUARTA:</u> Se conviene expresamente entre las partes
              que, en caso de fallecimiento de uno o ambos locatarios, el
              contrato de locación no se transmitirá pasivamente por causa de
              muerte a sus herederos, cónyuges ni a quien acredite unión
              convivencia u ostensible trato familiar por parte del locatario
              fallecido, aunque haya habitado con éste en el inmueble alquilado.
            </p>

            <p className="text-justify">
              <u>DECIMO QUINTA:</u> Las partes contratantes se someten a la
              jurisdicción y competencia de los Tribunales Ordinarios de la
              ciudad de San Salvador de Jujuy, provincia de Jujuy, renunciando a
              todo otro fuero o jurisdicción que pudiera corresponderles,
              especialmente al fuero federal, y constituyen domicilios
              especiales en los indicados al comienzo de este contrato, donde
              serán válidas todas las notificaciones y comunicaciones,
              judiciales y/o extrajudiciales, que recíprocamente se cursaren. -
              En prueba de conformidad, previa lectura y ratificación, se firman
              dos ejemplares de un mismo tenor y a un solo efecto, recibiendo
              cada parte su respectivo ejemplar, en la ciudad de San Salvador de
              Jujuy, Provincia de Jujuy, República Argentina, al día{" "}
              <strong>01</strong> del mes de <strong>Agosto</strong> del año{" "}
              <strong>2020</strong>.
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
              <strong> Noviembre</strong> de <strong>{year}</strong>, entre la
              Sr/a <strong> {locador.nombre} </strong>{" "}
              <strong>{locador.apellido}</strong>, DNI{" "}
              <strong>{locador.dni}</strong> con domicilio en calle{" "}
              <strong>{locador.domicilio}</strong>
              de Ciudad de <strong>{locador.localidad}</strong> de{" "}
              <strong>{locador.provicia}</strong> –Provincia de{" "}
              <strong>{locador.provincia}</strong>- , en adelante denominado el
              LOCADOR, por una parte; y por la otra
              <strong> {locatario.apellido} </strong>
              <strong>{locatario.nombre}</strong> ,
              <strong>{locatario.cuit}</strong>
              con domicilio en <strong>{locatario.domicilio}</strong> - B°
              <strong>{locatario.barrio}</strong> –
              <strong>{locatario.localidad}</strong>, –Provincia de Jujuy-, y el
              Sr.
              <strong> {locatario2.apellido} </strong>
              <strong>{locatario2.nombre}</strong>, CUIT
              <strong>{locatario2.cuit}</strong>
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
              de <strong>${contrato.contrato_p1 + contrato.pagare_p1}</strong>{" "}
              en forma mensual; 2.-')' desde el mes  <strong>7 (Siete) </strong>{" "}
              hasta el mes <strong>12 (Doce) </strong>
              inclusive el LOCATARIO abonará el pago de{" "}
              <strong>${contrato.contrato_p2 + contrato.pagare_p2}</strong> en
              forma mensual; 3.-')' desde el mes <strong>13 (Trece) </strong> al
              mes <strong>18 (Dieciocho) </strong> inclusive abonará el pago de{" "}
              <strong>${contrato.contrato_p3 + contrato.pagare_p3}</strong> en
              forma mensual; 4.-')' desde el mes{" "}
              <strong>19 (Diecinueve) </strong> el LOCATARIO abonará el pago de
              <strong>${contrato.contrato_p4 + contrato.pagare_p4}</strong> en
              forma mensual hasta la cancelación del presente contrato. Estos
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
)(ContratoDeptoAleli2L);
