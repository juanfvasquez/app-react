import React, { useState, useEffect} from 'react'

export function Pokemon() {
  const [pokemon, setPokemon] = useState()
  return !pokemon ? <h4>Cargando...</h4> : (
    <div>
      <h3>{ pokemon.name }</h3>
      <h4>Peso: { pokemon.weight }</h4>
      <h4>Altura: { pokemon.height }</h4>
    </div>
  )
}
