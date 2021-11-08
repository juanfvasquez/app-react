import React, { useState } from 'react'

export function Cuenta(props) {

  const [clicks, setClicks] = useState(0)

  const clickBoton = () => {
  }

  return <>
    <h2>Se ha presionado {clicks} veces</h2>
    <br />
    <button onClick={() => {
      clickBoton()
      setClicks(clicks + 1)
    }}>Click</button>
  </>
}