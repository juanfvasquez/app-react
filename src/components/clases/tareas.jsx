import React, { Component } from 'react'

import Tarea from './tarea'

class Tareas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tareas: [],
      texto: ''
    }
    this.refInput = React.createRef()
    this.cambioInput = this.cambioInput.bind(this)
    this.agregarTarea = this.agregarTarea.bind(this)
    this.eliminarTarea = this.eliminarTarea.bind(this)
    this.eventoClick = this.eventoClick.bind(this)
  }

  render() {
    const {tareas, texto} = this.state
    return <>
     <ul>
       { tareas.map((t, i) => <Tarea 
          key={i}
          texto={t}
          eventoClick={this.eventoArrow}
        />
      )}
     </ul>
     <input type="text" onChange={this.cambioInput} value={texto} ref={this.refInput} id="input"/>
     <button onClick={this.agregarTarea}>Agregar</button>
     <button onClick={this.eliminarTareaArrow}>Eliminar</button>
    </>
  }

  agregarTarea() {
    const {texto} = this.state
    // const texto = this.refInput.current.value
    // const texto = document.getElementById('input').value
    if (texto.trim().length > 0) {
      this.setState((state, props) => ({
        tareas: [...state.tareas, texto],
        texto: ''
      }))
    } else {
      alert('No se puede agregar')
    }
  }

  cambioInput(evt) {
    const val = evt.target.value
    this.setState({ texto: val })
  }

  eliminarTarea() {
    const {texto} = this.state
    this.setState((state, props) => ({
      tareas: state.tareas.filter(t => t !== texto),
      texto: ''
    }))
  }

  eliminarTareaArrow = () => {
    const {texto} = this.state
    this.setState((state, props) => ({
      tareas: state.tareas.filter(t => t !== texto),
      texto: ''
    }))
  }

  eventoClick() {
    alert(this.state.tareas)
  }

  eventoArrow = () => {
    alert(this.state.tareas)
  }
}

export default Tareas