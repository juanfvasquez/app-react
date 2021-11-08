import React from 'react'

function Tarea({ eventoClick, texto }) {
  return <li>
      <button onClick={eventoClick}>
        { texto }
      </button>
      <input type="checkbox" />
    </li>
}

export default Tarea