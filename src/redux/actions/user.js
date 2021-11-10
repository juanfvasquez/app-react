import { ACTUALIZAR_ESTADO, SET_FAVS, SET_USER } from "../types/users"

export const setUser = user => ({
  type: SET_USER,
  payload: user
})

export const setFavs = favs => ({
  type: SET_FAVS,
  payload: favs
})

export const actualizarEstado = estado => ({
  type: ACTUALIZAR_ESTADO,
  payload: estado
})