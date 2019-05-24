import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Locatario from "./Locatario";
import Form from "./Form";
import Contrato from "./Contrato";
import Contrato2Locat from "./Contrato2Locat";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/crearcontrato/:id" component={Locatario} />
          <Route exact path="/" component={Form} />
          <Route exact path="/contrato/:id" component={Contrato} />
          <Route exact path="/contrato2loc/:id" component={Contrato2Locat} />

        </Switch>
      </BrowserRouter>
    );
  }
}
