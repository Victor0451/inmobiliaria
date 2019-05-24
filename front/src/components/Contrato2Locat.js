import React, { Component } from "react";

export default class Contrato2Locat extends Component {
  render() {
    let month = new Array();
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

    let locatario = this.props.locatario1;
    let uf = this.props.uf;

    return (
      <div className="container">
        <h2 className="text-center">
          <strong>CONTRATO DE LOCACION</strong>
        </h2>
        <p className="text-justify mt-4">
          En San salvador de jujuy, Provincia de Jujuy, República Argentina, a
          los <strong>{date}</strong> días del mes de
          <strong> {monthname}</strong> de <strong>{year}</strong>, entre la
          Sr/a AMELIA BUSIGNANI, DNI 24.399.134 con domicilio en calle LAMADRID
          N°188 de Ciudad de san salvador de jujuy –Provincia de Jujuy- , en
          adelante denominado el LOCADOR, por una parte; y por la otra
          <strong> {locatario.apellido} </strong>
          <strong>{locatario.nombre}</strong> ,<strong>{locatario.cuit}</strong>
          con domicilio en <strong>{locatario.domicilio}</strong> - B°
          <strong>{locatario.barrio}</strong> –
          <strong>{locatario.localidad}</strong>, –Provincia de Jujuy- ,
          –Provincia de Jujuy-, y el Sr. FARFAN EDUARDO RENE, CUIT 20-10853949-7
          con domicilio en Ricardo hueda n°42 - B° AMPUAP bajo la viña – san
          salvador de jujuy, –Provincia de Jujuy- en adelante los “LOCATARIOS”,
          se conviene en celebrar el presente Contrato de Locación Comercial, el
          que se regirá conforme a las siguientes cláusulas:
        </p>

        <p className="text-justify">
          PRIMERA: El locador da en arriendo a los locatarios y estos aceptan,
          la unidad funcional n° <strong>{uf.uf_tiponum}</strong>, identificada
          del <strong>{uf.dir_plan}</strong>, que se disgregan del edificio
          situado en OTERO Nº 464 de esta ciudad, fijándose como fecha de
          iniciación de este contrato el día{" "}
          <strong>{`${date}/${monthnumber}/${year}`}</strong>, fecha a la cual
          retrotraen los efectos de este contrato. Todos los montos que se
          consignan a continuación en el presente contrato, no incluyen IVA
          (impuesto al valor agregado). En este acto el locador recibe del
          locatario la suma de pesos: CUATRO MIL ($4.000). Sirviendo la presente
          de suficiente recibo por dicho importe, aplicado a los siguientes
          conceptos: la suma de pesos: DOS MIL ($2.000-) en concepto de pago
          anticipado de un mes de alquiler, correspondiente al mes de mayo del
          año 2019 y la suma de pesos: DOS MIL ($2.000-), en concepto de
          deposito de garantía, los cuales serán devueltos al finalizar el
          presente contrato, una vez que se hayan abonado todos los alquileres,
          gastos de remodelación, impuestos y servicios por parte de los
          locatarios y eventuales reparaciones en el inmueble locado. En caso de
          existir saldo a pagar por los conceptos enunciados se abonaran con el
          importe del deposito hasta cubrir los mismos y si existiese saldo,
          serán abonados por los locatarios. SEGUNDA: el termino de la Locacion
          será de dos (2) años a partir de la fecha citada, feneciendo el
          30/04/21. A su vencimiento, si los locatarios desearan continuar en la
          locacion, se celebrara un nuevo contrato. Se pacta expresamente que
          los locatarios podrán rescindir la contratación luego de transcurridos
          seis (6) meses de locación, debiendo notificar fehacientemente su
          decisión al locador con una antelación mínima de sesenta (60) días de
          la fecha en que reintegrara el inmueble locado. Los locatarios deberán
          abonar el valor equivalente a 1 (un) mes y medio de alquiler si la
          rescisión se produce dentro del primer año de contrato, y de 1 (un)
          mes de alquiler si se produce después del primer año, en concepto de
          indemnización.-- TERCERA: Los Locatarios se comprometen a abonar por
          la unidad funcional que arriendan la suma de DOS MIL ($2.000-)
          mensuales, pagaderos por mes adelantado del 1 al 10 de cada mes, en
          calle LAVALLE Nº 123 de esta ciudad o donde el locador indique, además
          y como formando parte de la locacion los locatarios abonaran al
          Locador en el mismo termino, las expensas comunes por, limsa,
          impuestos inmobiliario, luz, agua, gas, que forman parte de dicha
          expensas, Internet y todo cuando otro gasto común que se realice para
          el buen funcionamiento y aseo de las unidades funcionales de los pisos
          del edificio. Los locatarios se comprometen y obligan a cumplir como
          así también respetar el reglamento de copropiedad y administración al
          que declaran conocer y aceptar. La mora es automática, opera de pleno
          derecho por el mero vencimiento, sin necesidad de interpelación
          judicial o extrajudicial alguna; y toda deuda atrasada devengará una
          mora equivalente al 0,5% diarios, por el período comprendido entre el
          vencimiento y el efectivo pago.- CUARTA: siendo intención de las
          partes mantener el precio del alquiler de modo que conserve su valor
          adquisitivo, convienen que el monto del alquiler pactado será de pesos
        </p>
      </div>
    );
  }
}
