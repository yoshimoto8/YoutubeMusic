import { combineReducers } from 'redux'
// import { reducers } from './app'
import { counter } from './app/reducers'

export const rootReducer = combineReducers({ counter })
