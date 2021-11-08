import React, { useState, useEffect } from 'react'

import {Tarea} from './tarea'

export function Tareas(props) {

  const [tareas, setTareas] = useState([])
  const [pendientes, setPendientes] = useState(0)
  // const [tarea, setTarea] = useState({ texto: '' })

  // componentDidUpdate
  useEffect(() => {
    console.log('Cambio tareas')
    setPendientes(tareas.filter(t => !t.completado).length)
  }, [tareas])

  useEffect(() => {
    console.log('Otra vez cambio pendientes')
  }, [pendientes])

  // componentDidMount
  useEffect(() => {
    console.log('Actualización') 
    const data = window.localStorage.getItem('todos') || ''
    const tareas = JSON.parse(data)
    setTareas(tareas)
  }, [])

  const clickBoton = tarea => {
    const index = tareas.indexOf(tarea)
    tareas.splice(index, 1)
    setTareas([...tareas])
    // setTarea({ ...tarea })
  }

  const cambioCompletado = (anterior, nuevo) => {
    const index = tareas.indexOf(anterior)
    tareas[index] = nuevo
    setTareas([...tareas])
  }

  return <>
    <h3>Lista Tareas</h3>
    <hr />
    <h4>Tienes pendienties {pendientes} tareas</h4>
    <hr />
    { tareas.map((t, i) => 
      <Tarea
        key={i}
        todo={t}
        clickBoton={clickBoton}
        cambioCheckbox={cambioCompletado}
      />) 
    }
  </>
}