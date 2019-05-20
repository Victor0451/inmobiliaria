import React from "react";
import "../css/App.css";
import Header from "./Header";
import Form from "./Form";
import UnidadFuncional from "./UnidadFuncional";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Form />
          </div>
          <div className="col-md-8">
            <UnidadFuncional />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
