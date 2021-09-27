import { createStore } from 'redux'
import menuReducer from './menuReducers'

const store = createStore(menuReducer)

export default store