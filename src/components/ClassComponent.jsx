import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {
    return (
      <li>{this.props.nome} {!this.props.estaNaLista && 'não'} está convidada(o) para festa</li>
    )
   }
}
