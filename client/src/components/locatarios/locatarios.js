import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from "reactstrap";


//redux
import { connect } from "react-redux";
import { mostrarLocatarios } from "../../actions/locatarioActions";

let prev = 0;
//let next = 0;
let last = 0;
//let first = 0;

class Locatarios extends Component {


    componentDidMount() {

        this.props.mostrarLocatarios()

    }

    componentWillReceiveProps(nextProps) {
        const { locatarios } = nextProps;

        this.setState({
            locatarios: locatarios
        })

    }

    constructor() {
        super();
        this.state = {
            locatarios: [],
            currentPage: 1,
            todosPerPage: 5,

        };
        this.handleClick = this.handleClick.bind(this);
        this.handleLastClick = this.handleLastClick.bind(this);
        this.handleFirstClick = this.handleFirstClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    handleLastClick(event) {
        event.preventDefault();
        this.setState({
            currentPage: last
        });
    }
    handleFirstClick(event) {
        event.preventDefault();
        this.setState({
            currentPage: 1
        });
    }


    render() {


        let { locatarios, currentPage, todosPerPage } = this.state;


        if (Object.entries(locatarios).length === 0) return <div className="container mt-4 text-center alert alert-success"><strong>No Hay Locatarios Registrados</strong></div>


        // Logic for displaying current todos
        let indexOfLastTodo = currentPage * todosPerPage;
        let indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        let currentTodos = locatarios.slice(indexOfFirstTodo, indexOfLastTodo);
        prev = currentPage > 0 ? (currentPage - 1) : 0;
        last = Math.ceil(locatarios.length / todosPerPage);
        //let next = (last === currentPage) ? currentPage : currentPage + 1;

        // Logic for displaying page numbers
        let pageNumbers = [];
        for (let i = 1; i <= last; i++) {
            pageNumbers.push(i);
        }

        return (
            <div className="form-style-8">
                <h2> Unidades Funcionales </h2>
                <div className="table-wrapper table-responsive">
                    <table className="fl-table">
                        <thead>
                            <tr>
                                <th scope="col">Apellido</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">DNI</th>
                                <th scope="col">CUIT/CUIL</th>
                                <th scope="col">Domicilio</th>
                                <th scope="col">Barrio</th>
                                <th scope="col">Localidad</th>
                                <th scope="col">Acciones</th>

                            </tr>
                        </thead>
                        <tbody>
                            {currentTodos.map((item, index) => {
                                return (

                                    <tr key={index}>
                                        <td>
                                            {item.apellido}
                                        </td>
                                        <td>
                                            {item.nombre}
                                        </td>
                                        <td>
                                            {item.dni}
                                        </td>
                                        <td>
                                            {item.cuit}
                                        </td>
                                        <td className="toggler">
                                            {item.domicilio}
                                        </td>
                                        <td>
                                            {item.barrio}
                                        </td>
                                        <td>
                                            {item.localidad}
                                        </td>
                                        <td>

                                            <Link to={`/crearcontrato/${item.dni}`} className="btn btn-primary btn-block" >Selecionar</Link>
                                            <Link to={`/locatario/${item.dni}`} className="btn btn-secondary btn-block" >Mas Informacion</Link>


                                        </td>

                                    </tr>



                                );

                            })}

                        </tbody>
                    </table>
                </div>
                <nav className="d-flex justify-content-center mt-4">
                    <Pagination>
                        <PaginationItem>
                            {prev === 0 ? <PaginationLink disabled>First</PaginationLink> :
                                <PaginationLink onClick={this.handleFirstClick} id={prev} href={prev}>First</PaginationLink>
                            }
                        </PaginationItem>
                        <PaginationItem>
                            {prev === 0 ? <PaginationLink disabled>Prev</PaginationLink> :
                                <PaginationLink onClick={this.handleClick} id={prev} href={prev}>Prev</PaginationLink>
                            }
                        </PaginationItem>
                        {
                            pageNumbers.map((number, i) =>
                                <Pagination key={i}>
                                    <PaginationItem active={pageNumbers[currentPage - 1] === (number) ? true : false} >
                                        <PaginationLink onClick={this.handleClick} href={number} key={number} id={number}>
                                            {number}
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            )}

                        <PaginationItem>
                            {
                                currentPage === last ? <PaginationLink disabled>Next</PaginationLink> :
                                    <PaginationLink onClick={this.handleClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Next</PaginationLink>
                            }
                        </PaginationItem>

                        <PaginationItem>
                            {
                                currentPage === last ? <PaginationLink disabled>Last</PaginationLink> :
                                    <PaginationLink onClick={this.handleLastClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Last</PaginationLink>
                            }
                        </PaginationItem>
                    </Pagination>
                </nav>
            </div>
        )
    }
}
//state
const mapStateToProps = state => ({
    locatarios: state.locatarios.locatarios

});

export default connect(
    mapStateToProps,
    { mostrarLocatarios }
)(Locatarios);