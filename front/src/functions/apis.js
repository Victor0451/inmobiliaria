import axios from "axios";


//Insert 1 locatario

export function postLocatario(
  nombrevalue,
  apellidovalue,
  dnivalue,
  cuitvalue,
  unfuncvalue,
  domiciliovalue,
  barriovalue,
  localidadvalue,
  idcontrato,
  unfunnum,
  loc_tipo
) {
  let url = `http://localhost:3002/postlocatario`;

  const locatario1 = {
    nombre: nombrevalue,
    apellido: apellidovalue,
    dni: dnivalue,
    cuit: cuitvalue,
    unfunc: unfuncvalue,
    domicilio: domiciliovalue,
    barrio: barriovalue,
    localidad: localidadvalue,
    idcontrato: idcontrato,
    uf_tiponum: unfunnum,
    loc_tipo: loc_tipo
  };

  console.log(locatario1);

  axios
    .post(url, locatario1)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}

//Insert 2 locatario

export function postLocatario2(
  nombrevalue2,
  apellidovalue2,
  dnivalue2,
  cuitvalue2,
  unfuncvalue2,
  domiciliovalue2,
  barriovalue2,
  localidadvalue2,
  idcontratovalue2,
  loc_tipo2
) {
  let url = `http://localhost:3002/postlocatario`;

  const locatario2 = {
    nombre: nombrevalue2,
    apellido: apellidovalue2,
    dni: dnivalue2,
    cuit: cuitvalue2,
    unfunc: unfuncvalue2,
    domicilio: domiciliovalue2,
    barrio: barriovalue2,
    localidad: localidadvalue2,
    idcontrato: idcontratovalue2,
    loc_tipo: loc_tipo2
  };

  axios
    .post(url, locatario2)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}

//Get UF by ID

export function getUFSel(id) {
  let url = `http://localhost:3002/getufselect/${id}`;

  return axios.get(url);
}

//Get Locatario by ID

export function getLocatarioSel(id) {
  let url = `http://localhost:3002/getlocatarioselect/${id}`;

  return axios.get(url);
}

//Get UF by ID

export function getIdCont(id) {
  let url = `http://localhost:3002/getidcont/${id}`;

  return axios.get(url);
}
