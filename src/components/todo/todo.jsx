import React, { Component } from 'react'

class Todo extends Component {
  render() {
    const {todo, clickBoton} = this.props
    const {texto, completado} = todo
    return <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <input type="checkbox" onChange={this.cambioCheckbox} checked={completado} />
      <p>{ texto }</p>
      <button onClick={() => clickBoton(todo)}>X</button>
    </div>
  }

  cambioCheckbox = evt => {
    const {todo, cambioCheckbox} = this.props
    const nuevo = { ...todo }
    nuevo.completado = evt.target.checked
    cambioCheckbox(todo, nuevo)
  }
}

export default Todo