import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//REDUX
import { Provider } from "react-redux";
import store from "../store";

import Header from "./layouts/Header";
import LocatarioContrato from "./contratos/LocatarioContrato";
import Form from "./contratos/Form";
import Locador from "./locadores/Locador";
import nuevaUnidadFuncional from "./unidadesfuncionales/nuevaUnidadFuncional";
import unidadFuncional from "./unidadesfuncionales/unidadFuncional";
import unidadesFuncionales from './unidadesfuncionales/unidadesFuncionales';
import Contrato from './contratos/contrato';
import RenovarContrato from './contratos/renovarContrato';

//Tipos de contratos
import ContratoSinBaño2L from './tipocontratos/doslocatarios/ContratoSinBaño2L';
import ContratoConBaño2L from './tipocontratos/doslocatarios/ContratoConBaño2L';
import ContratoDeptoMono from './tipocontratos/doslocatarios/ContratoDeptoMono';
import ContratoDepto2Dorm from './tipocontratos/doslocatarios/ContratoDeptoMono';
import ContratoDeptoAleli2L from './tipocontratos/doslocatarios/ContratoDeptoAleli2L';


import ContratoConBaño1L from './tipocontratos/unlocatario/ContratoConBaño1L';
import ContratoSinBaño1L from './tipocontratos/unlocatario/ContratoSinBaño1L';
import ContratoDeptoMono1l from './tipocontratos/unlocatario/ContratoDeptoMono1l';
import ContratoDepto2Dorm1l from './tipocontratos/unlocatario/ContratoDepto2Dorm1l';


import Homepage from "./Homepage";
import NotFound from "./NotFound";
import Locatario from "./locatarios/Locatario";
import Locatarios from './locatarios/locatarios'
import listadoContratos from "./contratos/listadoContratos";


export default class Router extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />

          <Switch>

            {/* HOME */}
            <Route exact path="/" component={Homepage} />

            {/* CONTRATOS */}
            <Route exact path="/crearcontrato" component={Form} />
            <Route exact path="/crearcontrato/:id" component={LocatarioContrato} />
            <Route exact path="/contratos/listados" component={listadoContratos} />
            <Route exact path="/contratos/:id" component={Contrato} />
            <Route exact path="/contratos/renovar/:id" component={RenovarContrato} />




            {/* TIPOS DE COINTRATOS */}
            <Route exact path="/unlocatario/contratoconbaño/:id" component={ContratoConBaño1L} />
            <Route exact path="/unlocatario/contratosinbaño/:id" component={ContratoSinBaño1L} />
            <Route exact path="/unlocatario/contratodeptomono1l/:id" component={ContratoDeptoMono1l} />
            <Route exact path="/unlocatario/contratodepto2dorm1l/:id" component={ContratoDepto2Dorm1l} />

            <Route exact path="/doslocatario/contratoconbaño/:id" component={ContratoConBaño2L} />
            <Route exact path="/doslocatario/contratosinbaño/:id" component={ContratoSinBaño2L} />
            <Route exact path="/doslocatario/contratodeptomono/:id" component={ContratoDeptoMono} />
            <Route exact path="/doslocatario/contratodepto2dorm/:id" component={ContratoDepto2Dorm} />
            <Route exact path="/doslocatario/contratodeptoaleli/:id" component={ContratoDeptoAleli2L} />




            {/* LOCADOR */}
            <Route exact path="/crearlocador" component={Locador} />

            {/* LOCATARIO */}
            <Route exact path="/locatarios" component={Locatarios} />
            <Route exact path="/locatarios/nuevo" component={Locatario} />

            {/* UNIDADES FUNCIONALES */}
            <Route exact path="/unidadesfuncionales" component={unidadesFuncionales} />
            <Route exact path="/unidadesfuncionales/:id" component={unidadFuncional} />
            <Route exact path="/unidadfuncional/nuevo/" component={nuevaUnidadFuncional} />


            {/* PAGE NOT FOUND*/}
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>

    );
  }
}
