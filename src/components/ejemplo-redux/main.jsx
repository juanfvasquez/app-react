import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { depositar, retirar } from '../../redux/actions/monto'

import { Componente } from './componente'

export function Main() {
  const monto = useSelector(({ cuenta }) => cuenta.monto)
  const dispatch = useDispatch()
  // bindActionCreators(depositar, dispatch)

  const clickDepositar = () => {
    const monto = 10
    dispatch(depositar(monto))
  }

  const clickRetirar = () => {
    const monto = 10
    dispatch(retirar(monto))
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>$ {monto}</h2>
      <hr />
      <button onClick={clickDepositar} className="btn btn-success" style={{ marginRight: 10}}>Depositar $ 10</button>
      <button onClick={clickRetirar} className="btn btn-danger">Retirar $ 10</button>

      <hr />
      <Componente />
    </div>
  )
}
