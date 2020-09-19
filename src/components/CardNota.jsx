import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class CardNota extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        Titulo da nota
                    </Card.Title>
                    <Card.Text>
                        Escreva a nota aqui!
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default CardNota;