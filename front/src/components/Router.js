import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//REDUX
import { Provider } from "react-redux";
import store from "../store";

import Header from "./Header";
import LocatarioContrato from "./LocatarioContrato";
import Form from "./Form";
import Contrato from "./Contrato";
import Contrato2Locat from "./Contrato2Locat";
import Locador from "./Locador";
import UnidadFuncional from "./UnidadFuncional";
import Homepage from "./Homepage";
import NotFound from "./NotFound";
import Locatario from "./Locatario";

export default class Router extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/crearcontrato" component={Form} />
            <Route exact path="/crearcontrato/:id" component={LocatarioContrato} />

            <Route
              exact
              path="/crearcontrato/:id"
              component={LocatarioContrato}
            />
            <Route exact path="/crearlocador" component={Locador} />
            <Route exact path="/crearlocatario" component={Locatario} />
            <Route
              exact
              path="/crearunidadfuncional"
              component={UnidadFuncional}
            />
            <Route exact path="/contrato/:id" component={Contrato} />
            <Route exact path="/contrato2loc/:id" component={Contrato2Locat} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>

    );
  }
}
