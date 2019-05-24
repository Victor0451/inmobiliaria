import axios from "axios";

//Insert 1 locatario

export function postLocatario(
  nombrevalue,
  apellidovalue,
  dnivalue,
  cuitvalue,
  ufnumvalue,
  uftipovalue,
  domiciliovalue,
  barriovalue,
  localidadvalue,
  idcontrato,
  loc_tipo
) {
  let url = `http://localhost:3002/postlocatario`;

  const locatario1 = {
    nombre: nombrevalue,
    apellido: apellidovalue,
    dni: dnivalue,
    cuit: cuitvalue,
    uf_tipo: uftipovalue,
    ufnum: ufnumvalue,
    domicilio: domiciliovalue,
    barrio: barriovalue,
    localidad: localidadvalue,
    idcontrato: idcontrato,
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

//Get Locatario2 by ID
export function getLocatario2Sel(id) {
  let url = `http://localhost:3002/getlocatario2select/${id}`;

  return axios.get(url);
}

//Get UF by ID

export function getIdCont(id) {
  let url = `http://localhost:3002/getidcont/${id}`;

  return axios.get(url);
}
