import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class FormularioCadastro extends Component {
    constructor() {
        super();
        this.state = {
            titulo: '',
            texto: ''
        }
    }

    _handlerMudarTitulo(event) {
        event.stopPropagation();
        this.setState({
            titulo: event.target.value
        });
    }

    _handlerMudarTexto(event) {
        event.stopPropagation();
        this.setState({
            texto: event.target.value
        });
    }

    _criarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props['criar-nota'](this.state.titulo, this.state.texto);
        this.setState({
            titulo: '',
            texto: ''
        });
    }

    render() {
        return (
            <Form onSubmit={this._criarNota.bind(this)}>
                <Form.Group>
                    <Form.Control
                        placeholder="Título"
                        onChange={this._handlerMudarTitulo.bind(this)}
                        value={this.state.titulo}
                        required={true}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows="4"
                        placeholder="Escreva a nota aqui..."
                        onChange={this._handlerMudarTexto.bind(this)}
                        value={this.state.texto}
                        required={true}
                    />
                </Form.Group>
                <Button type="submit">
                    <FontAwesomeIcon icon={faCheck} /> &nbsp; Criar nota
                </Button>
            </Form>
        );
    }
}

export default FormularioCadastro;