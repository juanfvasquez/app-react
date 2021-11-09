import React, { Component } from 'react'

class Lista extends Component {

  constructor(props) {
    super(props)
    this.state = {
      elementos: [
        'Elemento 1',
        'Elemento 2',
      ],
      contador: 0
    }
    this.clickBoton = this.clickBoton.bind(this)
  }  

  render() {
    const { elementos } = this.state
    return (
      <>
        <ul>
          { elementos.map((e, i) => <li key={i}>{e}</li>) }
        </ul>
        <button onClick={this.clickBoton}>Agregar</button>
      </>
    )
  }

  clickBoton() {
    const {elementos} = this.state
    const el = `Elemento ${elementos.length + 1}`
    // this.setState({
    //   elementos: [...elementos, el],
    //   contador: this.state.contador + 1
    // })

    // this.setState(function(state, props) {
    //   return ({
    //     elementos: [...elementos, el],
    //     contador: state.contador + 1
    //   })
    // })

    this.setState((state, props) => ({
      elementos: [...state.elementos, el],
        contador: state.contador + 1
    }))
  }
}

export default Lista