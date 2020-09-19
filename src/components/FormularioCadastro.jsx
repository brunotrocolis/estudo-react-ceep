import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class FormularioCadastro extends Component {
    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Control placeholder="Título" />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        as="textarea" 
                        rows="4"
                        placeholder="Escreva a nota aqui..." />
                </Form.Group>
                <Button>Criar nota</Button>
            </Form>
        );
    }
}

export default FormularioCadastro;