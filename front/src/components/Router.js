import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Locatario from "./Locatario";
import Form from "./Form";
import Contrato from "./Contrato";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/crearcontrato" component={Locatario} />
          <Route exact path="/" component={Form} />
          <Route exact path="/contrato" component={Contrato} />

        </Switch>
      </BrowserRouter>
    );
  }
}
