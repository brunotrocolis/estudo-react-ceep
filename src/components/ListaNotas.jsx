import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CardNota from './CardNota';

class ListaDeNotas extends Component {
    render() {
        return (
            <Row>
                {Array.of('Trabalaho', 'Estudo', 'Trabalho').map((categoria, index) => {
                    return (
                        <Col sm={4} key={index}>
                            <CardNota />
                        </Col>
                    );
                })}
            </Row>
        );
    }
}

export default ListaDeNotas;