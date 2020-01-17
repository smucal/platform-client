import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import main from './reducers/main'
import mods from './reducers/mods'
import user from './reducers/user'

export default history => combineReducers({
  router: connectRouter(history),
  main,
  mods,
  user
})
