import React from "react";

export default function Header() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Gestion Inmobiliaria</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   Locador
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/locador">Ingresar Locador</a>
                                    <div className="dropdown-divider"></div>
                                   
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   Locatario
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Ingresar Locatario</a>
                                    <div className="dropdown-divider"></div>
                                   
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   Unidad Funcional
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/unidadfuncional">Ingresar Unidad Funcional</a>
                                    <div className="dropdown-divider"></div>
                                   
                                </div>
                            </li>

                        </div>
                    </div>
                </nav>
    </div>
  );
}
