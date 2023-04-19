import { Todo } from "../domain/todo"
import ACTION from "./actions.type"

export const getAllTodos = () => {
  return {
    type: ACTION.GET_LIST_TODOS
  }
}

export const addTodo = (todoItem: Todo) => {
  return {
    type: ACTION.ADD_TODO,
    data: todoItem
  }
}
