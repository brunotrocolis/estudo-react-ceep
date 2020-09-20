import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class FormularioCadastro extends Component {
    constructor () {
        super();
        this.titulo = '';
    }

    handlerMudarTitulo(event) {
        this.titulo = event.target.value;
        console.log(this.titulo);
    }

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Control
                        placeholder="Título"
                        onChange={this.handlerMudarTitulo.bind(this)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows="4"
                        placeholder="Escreva a nota aqui..."
                    />
                </Form.Group>
                <Button type="submit">Criar nota</Button>
            </Form>
        );
    }
}

export default FormularioCadastro;