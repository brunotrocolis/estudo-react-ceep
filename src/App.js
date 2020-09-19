import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import ListaDeNotas from './components/ListaNotas';
import FormularioCadastro from './components/FormularioCadastro';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={3}>
            <FormularioCadastro />
          </Col>
          <Col sm={9}>
            <ListaDeNotas />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
