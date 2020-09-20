import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CardNota from '../CardNota';

class ListaDeNotas extends Component {
    render() {
        return (
            <Row className="display-flex">
                {this.props['lista-notas'].map((nota, index) => {
                    return (
                        <Col sm={4} key={index}>
                            <CardNota
                                titulo={nota.titulo}
                                texto={nota.texto}
                                apagar-nota={this.props['apagar-nota'].bind(this, index)}
                            />
                        </Col>
                    );
                })}
            </Row>
        );
    }
}

export default ListaDeNotas;