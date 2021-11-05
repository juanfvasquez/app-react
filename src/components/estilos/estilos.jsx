import React, { Component } from 'react'

import styled from 'styled-components'

// import './styles.css'
import { estilos } from './styles'

const Div = styled.div`
  background-color: #f0f;
  width: 100px;
  height: 100px;
  border-radius: 10px;
`

class Estilos extends Component {

  state = {
    color: '#f00'
  }

  render() {
    const { color } = this.state
    return <>
      {/* <div style={{ backgroundColor: color, width: 100, height: 100 }}>
        <p>Estilos</p>
      </div> */}
      <Div>
        <div>Estilos</div>
      </Div>
      <hr />
      <button onClick={this.cambiarColor}>Cambiar</button>
    </>
  }

  cambiarColor = () => {
    const colores = [
      '#f00', '#0f0', '#00f', '#ff0', '#0ff'
    ]
    const random = Math.floor(Math.random() * colores.length)
    console.log(random)
    this.setState({ color: colores[random] })
  }
}

// const estilos = {
//   container: {
//     backgroundColor: '#f00',
//     width: 100,
//     height: 100,
//   }
// }

export default Estilos