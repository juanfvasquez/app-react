import React, { Component } from 'react'

import Todo from './todo'

const KEY = 'todos'

class Lista extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      texto: '',
      cargando: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const str = window.localStorage.getItem(KEY)
      const todos = str.length > 0 ? JSON.parse(str) : []
      this.setState({ todos, cargando: false })
    }, 2000)
  }

  render() {
    const {texto, todos, cargando} = this.state
    if (cargando) {
      return <h1>Cargando...</h1>
    }
    return <>
      <h3>Tienes {todos.filter(t => !t.completado).length} tareas pendientes de {todos.length}</h3>
      { todos.map((t, i) => (
        <Todo
          key={i}
          todo={t}
          clickBoton={this.clickBoton}
          cambioCheckbox={this.cambioCompletado}
        />
      )) }
      <input type="text" onChange={this.cambioInput} value={texto}/>
      <button onClick={this.crearTodo}>Agregar</button>
    </>
  }

  cambioInput = evt => {
    const texto = evt.target.value
    this.setState({ texto })
  }

  crearTodo = () => {
    const {texto ,todos} = this.state
    if (texto.trim().length <= 0) {
      alert('No se puede agregar')
      return
    }
    const todo = { texto, completado: false }
    const nuevalista = [...todos, todo]
    this.setState((state, props) => ({
      todos: nuevalista,
      texto: ''
    }))
    this.guardarLista(nuevalista)
  }

  clickBoton = todo => {
    const {todos} = this.state
    const index = todos.indexOf(todo)
    todos.splice(index, 1)
    this.setState({ todos: [...todos] })
    this.guardarLista(todos)
  }
  
  cambioCompletado = (anterior, nuevo) => {
    const {todos} = this.state
    const index = todos.indexOf(anterior)
    todos[index] = nuevo
    this.setState({ todos: [...todos] })
    this.guardarLista(todos)
  }

  guardarLista = todos => {
    const str = JSON.stringify(todos)
    window.localStorage.setItem(KEY, str)
  }
}

export default Lista