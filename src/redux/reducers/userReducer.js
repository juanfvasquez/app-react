import { ACTUALIZAR_ESTADO, SET_FAVS, SET_USER } from "../types/users"

const initialState = {
  user: null,
  favs: [],
  logged: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      // state.user = action.payload
      // return {...state}
      return Object.assign({}, state, { user: action.payload })
    case SET_FAVS:
      state.favs = action.payload
      return { ...state }
    case ACTUALIZAR_ESTADO:
      return { ...action.payload }
    default:
      return state
  }
}