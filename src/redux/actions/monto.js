import { DEPOSITAR, RETIRAR } from "../types/monto"

export const depositar = monto => ({
  type: DEPOSITAR,
  payload: { monto }
})

export const retirar = monto => ({
  type: RETIRAR,
  payload: { monto }
})