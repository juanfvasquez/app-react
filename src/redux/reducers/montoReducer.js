import { DEPOSITAR, RETIRAR } from '../types/monto'

const estadoInicial = {
  monto: 1000
}

export const montoReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case DEPOSITAR:
      state.monto = state.monto + action.payload.monto
      return { ...state }
    case RETIRAR:
      state.monto = state.monto - action.payload.monto
      return { ...state }
    default:
      return state
  }
}