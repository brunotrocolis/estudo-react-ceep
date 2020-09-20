import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './style.css';

class CardNota extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        {this.props.titulo}
                    </Card.Title>
                    <Card.Text>
                        {this.props.texto}
                    </Card.Text>
                    <Card.Link
                        href="#"
                        className="link-apagar"
                        title={`Apagar nota ${this.props.titulo}!`}
                        onClick={this.props['apagar-nota']}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Card.Link>
                </Card.Body>
            </Card>
        );
    }
}

export default CardNota;