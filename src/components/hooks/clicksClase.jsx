import React, { Component } from 'react'
 
class Cuenta extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicks: 0
    }
  }

  render() {
    const {clicks} = this.state
    return <>
      <h2>Se ha presionado { clicks } veces</h2>
      <br />
      <button onClick={this.clickBoton}>Click</button>
    </>
  }

  clickBoton = () => {
    const {clicks} = this.state
    this.setState({ clicks: clicks + 1})
  }
}