import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          G . C . I
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active">Home</Link>

            <li className="nav-item dropdown">

              <Link
                to="#"
                className="nav-link active dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Locador
             </Link>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/crearlocador" className="dropdown-item">Igresar Locador</Link>

                <div className="dropdown-divider" />
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link active dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Locatario
             </Link>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/locatarios" className="dropdown-item">Listado de Locatarios</Link>
                <div className="dropdown-divider" />
                <Link to="/locatarios/nuevo" className="dropdown-item">Igresar Locatario</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link active dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Unidad Funcional
             </Link>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/unidadesfuncionales" className="dropdown-item">Listado de Unidades Funcionales</Link>
                <div className="dropdown-divider" />
                <Link to="/unidadfuncional/nuevo" className="dropdown-item">Igresar Unidad Funcional</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link active dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Contratos
             </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/contratos/listados" className="dropdown-item">Listado de Contratos</Link>
                <div className="dropdown-divider" />
                <Link to="/crearcontrato" className="dropdown-item">Igresar Contrato</Link>

              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
