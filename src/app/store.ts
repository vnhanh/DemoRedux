import { combineReducers, createStore } from 'redux'

import todoReducer from '../features/todo/data/reducer'

const reducers = combineReducers(
  todoReducer,
)

export const store = createStore(reducers)
