import axios from "axios";
import toastr from '../utils/toastr'

export function getUFByTitular(docval) {
  let url = `http://192.168.1.102:3002/getunidadfunc/${docval}`;

  return axios.get(url);
}

//Get UF by ID

export function getUFSel(id) {
  let url = `http://192.168.1.102:3002/getufselect/${id}`;

  return axios.get(url);
}

//Get Locatario by ID

export function getLocatarioSel(id) {
  let url = `http://192.168.1.102:3002/getlocatarioselect/${id}`;

  return axios.get(url);
}

//Get Locatario2 by ID
export function getLocatario2Sel(id) {
  let url = `http://192.168.1.102:3002/getlocatario2select/${id}`;

  return axios.get(url);
}

//Get locador by ID
export function getLocadorSel(id) {
  let url = `http://192.168.1.102:3002/getlocadorselect/${id}`;

  return axios.get(url);
}

//Get UF by ID

export function getIdCont(id) {
  let url = `http://192.168.1.102:3002/getidcont/${id}`;

  return axios.get(url);
}

//Get Contrato

export function getContratoSel(id) {
  let url = `http://192.168.1.102:3002/getcontratoselect/${id}`;

  return axios.get(url);
}


//Insert locatario

export function postLocatario(
  nombrevalue,
  apellidovalue,
  dnivalue,
  cuitvalue,  
  domiciliovalue,
  barriovalue,
  localidadvalue
 
) {
  let url = `http://192.168.1.102:3002/postlocatario`;

  const locatario = {
    nombre: nombrevalue,
    apellido: apellidovalue,
    dni: dnivalue,
    cuit: cuitvalue,   
    domicilio: domiciliovalue,
    barrio: barriovalue,
    localidad: localidadvalue
  }

  axios
    .post(url, locatario)
    .then(response => {
      console.log(response);
      toastr.success("Se guardo el registro exitosamente","ATENCION")
    })
    .catch(err => {
      console.log(err);
      toastr.success(`Se detecto el siguiente error: ${err}`,"ATENCION")

    });
}

//Insert Unidad Funcional

export async function postUnidadFuncional(
  padronvalue,
  poligonovalue,
  medidorvalue,
  dir_planvalue,
  dir_boletavalue,
  uf_tipovalue,
  uf_tiponumvalue,
  titularvalue
) {
  let url = `http://192.168.1.102:3002/postunidadfuncional`;

  const unidadfuncinal = {
    padron: padronvalue,
    poligono: poligonovalue,
    medidor: medidorvalue,
    dir_plan: dir_planvalue,
    dir_boleta: dir_boletavalue,
    uf_tipo: uf_tipovalue,
    uf_tiponum: uf_tiponumvalue,
    titular: titularvalue
  };

  await axios
    .post(url, unidadfuncinal)
    .then(response => {
      console.log(response);
      toastr.success("Se guardo el registro exitosamente","ATENCION")
    })
    .catch(err => {
      console.log(err);
      toastr.success(`Se detecto el siguiente error: ${err}`,"ATENCION")

    });
}

//Insert Locador

export async function postLocador(
  dnivalue,
      apellidovalue,
      nombrevalue,
      domiciliovalue,
      barriovalue,
      localidadvalue,
      provinciavalue
) {
  let url = `http://192.168.1.102:3002/postlocador`;

  const locador = {
    dni: dnivalue,
    apellido: apellidovalue,
    nombre: nombrevalue,
    domicilio: domiciliovalue,
    barrio: barriovalue,
    localidad: localidadvalue,
    provincia: provinciavalue
  };

  await axios
    .post(url, locador)
    .then(response => {
      console.log(response);
      toastr.success("Se guardo el registro exitosamente","ATENCION")
    })
    .catch(err => {
      console.log(err);
      toastr.success(`Se detecto el siguiente error: ${err}`,"ATENCION")

    });
}

//Insert contrato

export async function postContrato(
  idcontrato,
  dniloc,
  dniloc2,
  ufnumvalue,
  dnilocador
) {
  let url = `http://192.168.1.102:3002/postcontrato`;

  const contrato = {
    id_contrato: idcontrato,
    dni_locatario: dniloc,
    dni_locatario2: dniloc2,
    uf_tiponum: ufnumvalue,
    locador: dnilocador
  };

  await axios
    .post(url, contrato)
    .then(response => {
      console.log(response);
      toastr.success("Se guardo el registro exitosamente","ATENCION")
    })
    .catch(err => {
      console.log(err);
      toastr.success(`Se detecto el siguiente error: ${err}`,"ATENCION")

    });
}

