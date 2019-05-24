import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Locatario from "./Locatario";
import Form from "./Form";
import Contrato from "./Contrato";
import Contrato2Locat from "./Contrato2Locat";
import Locador from "./Locador";
import UnidadFuncional from "./UnidadFuncional";
import Homepage from "./Homepage";
import NotFound from "./NotFound";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="*" component={NotFound} />
          <Route exact path="/crearcontrato" component={Form} />
          <Route exact path="/crearcontrato/:id" component={Locatario} />
          <Route exact path="/locador/" component={Locador} />
          <Route exact path="/unidadfuncional/" component={UnidadFuncional} />
          <Route exact path="/contrato/:id" component={Contrato} />
          <Route exact path="/contrato2loc/:id" component={Contrato2Locat} />
        </Switch>
      </BrowserRouter>
    );
  }
}
