import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//REDUX
import { Provider } from "react-redux";
import store from "../store";

import Header from "./layouts/Header";
import LocatarioContrato from "./LocatarioContrato";
import Form from "./Form";
import Contrato from "./Contrato";
import Contrato2Locat from "./Contrato2Locat";
import Locador from "./locadores/Locador";
import nuevaUnidadFuncional from "./unidadesfuncionales/nuevaUnidadFuncional";
import unidadFuncional from "./unidadesfuncionales/unidadFuncional";
import unidadesFuncionales from './unidadesfuncionales/unidadesFuncionales';

import Homepage from "./Homepage";
import NotFound from "./NotFound";
import Locatario from "./locatarios/Locatario";
import Locatarios from './locatarios/locatarios'

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
            <Route exact path="/contrato/:id" component={Contrato} />
            <Route exact path="/contrato2loc/:id" component={Contrato2Locat} />

            {/* LOCADOR */}
            <Route exact path="/crearlocador" component={Locador} />

            {/* LOCATARIO */}
            <Route exact path="/locatarios" component={Locatarios} />
            <Route exact path="/locatarios/nuevo" component={Locatario} />

            {/* UNIDADES FUNCIONALES */}
            <Route exact path="/unidadesfuncionales/" component={unidadesFuncionales} />
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
