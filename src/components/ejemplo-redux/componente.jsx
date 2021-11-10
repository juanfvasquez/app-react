import React from 'react'
import { useSelector } from 'react-redux'

export function Componente() {
  const monto = useSelector(({ cuenta }) => cuenta.monto)
  return (
    <div>
      Monto actual: $ { monto }
    </div>
  )
}
