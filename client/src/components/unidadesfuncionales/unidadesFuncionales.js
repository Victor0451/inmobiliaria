import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from "reactstrap";


//redux
import { connect } from "react-redux";
import { mostrarUnidadesFuncionales } from "../../actions/unidadFuncionalActions";

let prev = 0;
//let next = 0;
let last = 0;
//let first = 


class unidadesFuncionales extends Component {


    componentDidMount() {
        this.props.mostrarUnidadesFuncionales();

    }

    componentWillReceiveProps(nextProps) {
        const { unidadesFuncionales } = nextProps

        this.setState({

            unidadesFuncionales: unidadesFuncionales
        })
    }

    constructor() {
        super();
        this.state = {
            unidadesFuncionales: [],
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

        let { unidadesFuncionales, currentPage, todosPerPage } = this.state;


        // Logic for displaying current todos
        let indexOfLastTodo = currentPage * todosPerPage;
        let indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        let currentTodos = unidadesFuncionales.slice(indexOfFirstTodo, indexOfLastTodo);
        prev = currentPage > 0 ? (currentPage - 1) : 0;
        last = Math.ceil(unidadesFuncionales.length / todosPerPage);
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
                                <th scope="col">Unidad Funcional</th>
                                <th scope="col">Numero de Unidad Funcional</th>
                                <th scope="col">Direccion (plan)</th>
                                <th scope="col">Titular</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Acciones</th>

                            </tr>
                        </thead>
                        <tbody>
                            {currentTodos.map((item, index) => {
                                return (

                                    <tr key={index}>
                                        <td>
                                            {item.uf_tiponum}
                                        </td>
                                        <td>
                                            {item.uf_tipo}
                                        </td>
                                        <td>
                                            {item.dir_plan}
                                        </td>
                                        <td>
                                            {item.titular}
                                        </td>
                                        <td className="toggler">
                                            {item.estado}
                                        </td>

                                        <td>

                                            <Link to={`/crearcontrato/${item.uf_tiponum}`} className="btn btn-primary btn-block" >Selecionar</Link>
                                            <Link to={`/unidadesfuncionales/${item.uf_tiponum}`} className="btn btn-secondary btn-block" >Mas Informacion</Link>


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
    unidadesFuncionales: state.unidadesFuncionales.unidadesFuncionales

});

export default connect(
    mapStateToProps,
    { mostrarUnidadesFuncionales }
)(unidadesFuncionales);
