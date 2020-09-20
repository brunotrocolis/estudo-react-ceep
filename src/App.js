import React, { Component } from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';

import ListaDeNotas from './components/ListaNotas';
import FormularioCadastro from './components/FormularioCadastro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      listaNotas: [
        { titulo: 'Teste', texto: 'Isso é apenas um teste!' }
      ],
    }
  }

  criarNota(titulo, texto) {
    this.setState({
      listaNotas: [...this.state.listaNotas, { titulo, texto }]
    });
  }

  apagarNota(index) {
    this.setState({
      listaNotas: this.state.listaNotas.filter((value, key) => {
        return index !== key;
      })
    });
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" className="nav-bar">
          <Navbar.Brand href="#home">
            <FontAwesomeIcon className="nav-bar-icon" icon={faStickyNote}/> {'  '} Quadro de Notas
          </Navbar.Brand>
        </Navbar>

        <Container>
          <Row>
            <Col sm={3}>
              <FormularioCadastro
                criar-nota={this.criarNota.bind(this)}
              />
            </Col>
            <Col sm={9}>
              <ListaDeNotas
                lista-notas={this.state.listaNotas}
                apagar-nota={this.apagarNota.bind(this)}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
