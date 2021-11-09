import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

export function Inicio() {

  const [lista, setLista] = useState([])

  useEffect(() => {
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
    // .then(response => response.json())
    // .then(resJson => {
    //   console.log(resJson)
    // })
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=10')
    .then(response => {
      setLista(response.data.results)
    })
  }, [])

  return (
    <div>
      <h3>Inicio</h3>
      <hr />
      { lista.map((p, i) => 
        <li key={i}>
          <Link to={`/pokemon/${p.name}`}>
            { p.name }
          </Link>
        </li>)
      }
    </div>
  )
}
