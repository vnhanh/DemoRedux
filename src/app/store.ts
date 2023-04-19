import { combineReducers, createStore } from 'redux'

import todoReducer from '../features/todo/data/reducer'

const reducers = combineReducers({
  todo: todoReducer,
})

export const store = createStore(reducers)
