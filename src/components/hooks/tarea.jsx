import React, { useEffect } from 'react'

export function Tarea({ clickBoton, todo, cambioCheckbox }) {
  const {texto, completado} = todo

  // componentWillUnmount
  useEffect(() => {
    // componentDidMount
    
    return () => {
      console.log('Desmontando tarea ' + texto)
    }
  }, [])

  const _cambioCheckbox = evt => {
    const nuevo = { ...todo }
    nuevo.completado = evt.target.checked
    cambioCheckbox(todo, nuevo)
  }

  return <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <input type="checkbox" onChange={_cambioCheckbox} checked={completado} />
      <p>{ texto }</p>
      <button onClick={() => clickBoton(todo)}>X</button>
    </div>
}