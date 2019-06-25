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

//Tipos de contratos

import ContratoSinBaño2L from './tipocontratos/doslocatarios/ContratoSinBaño2L';
import ContratoConBaño2L from './tipocontratos/doslocatarios/ContratoConBaño2L';

import ContratoConBaño1L from './tipocontratos/unlocatario/ContratoConBaño1L';
import ContratoSinBaño1L from './tipocontratos/unlocatario/ContratoSinBaño1L';

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

            {/* TIPOS DE COINTRATOS */}
            <Route exact path="/unlocatario/contratoconbaño1l/:id" component={ContratoConBaño1L} />
            <Route exact path="/unlocatario/contratosinbaño1l/:id" component={ContratoSinBaño1L} />

            <Route exact path="/doslocatario/contratoconbaño2l/:id" component={ContratoConBaño2L} />
            <Route exact path="/doslocatario/contratosinbaño2l/:id" component={ContratoSinBaño2L} />


            {/* LOCADOR */}
            <Route exact path="/crearlocador" component={Locador} />

            {/* LOCATARIO */}
            <Route exact path="/locatarios" component={Locatarios} />
            <Route exact path="/locatarios/nuevo" component={Locatario} />

            {/* UNIDADES FUNCIONALES */}
            <Route exact path="/unidadesfuncionales" component={unidadesFuncionales} />
            <Route exact path="/unidadesfuncionales/:id" component={unidadFuncional} />
            <Route exact path="unidadesfuncionales/nuevo" component={nuevaUnidadFuncional} />

            {/* PAGE NOT FOUND*/}
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>

    );
  }
}
