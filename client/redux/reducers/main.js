const TOGGGLE_DARK_MODE = 'JOHN\\TOGGGLE_DARK_MODE'

const initialState = {
  darkmode: false,
  theme: 'google'
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
