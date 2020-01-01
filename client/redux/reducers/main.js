import { push } from 'connected-react-router'

const TOGGGLE_DARK_MODE = 'JOHN\\TOGGGLE_DARK_MODE'

const initialState = {
  darkmode: true
}

/* eslint-disable no-case-declarations */
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGGLE_DARK_MODE:
      return {
        ...state,
        darkmode: action.data
      }
    default:
      return state
  }
}

export const historyPush = (url) => {
  return (dispatch) => {
    dispatch(push(url))
  }
}

export const toggleDarkMode = () => {
  return (dispatch, getState) => {
    const { main } = getState()
    const { darkmode } = main
    dispatch({ type: TOGGGLE_DARK_MODE, data: !darkmode })
  }
}
