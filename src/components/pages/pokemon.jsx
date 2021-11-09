import React, { useState, useEffect} from 'react'

import axios from 'axios'

import { useParams } from 'react-router-dom'

export function Pokemon() {
  const [pokemon, setPokemon] = useState()
  const { nombre } = useParams()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then(response => {
      setPokemon(response.data)
    })
  }, [])

  return !pokemon ? <h4>Cargando...</h4> : (
    <div>
      <h3>{ pokemon.name }</h3>
      <p>Peso: { pokemon.weight }</p>
      <p>Altura: { pokemon.height }</p>
    </div>
  )
}
