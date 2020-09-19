import React, { Component } from 'react';
import CardNota from './CardNota';

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of('Trabalaho', 'Estudo', 'Trabalho').map(categoria => {
                    return (
                        <li>
                            <CardNota />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;