import Status from "../../../common/status"
import TYPE_ACTION from "./actions.type"

interface TODO_ACTION {
  type: TYPE_ACTION,
  payload: any
}

const initialState = {
  data: [],
  status: Status.IDLE
}

const todoReducer = (state = initialState, action: TODO_ACTION) => {
  switch(action.type) {
    case TYPE_ACTION.ADD_TODO: 
      console.log('action add todo')
      return {
        ...state,
        status: Status.SUCCEEDED
      }
    case TYPE_ACTION.GET_LIST_TODOS:
      console.log('action get list')
      return {
        ...state,
        status: Status.SUCCEEDED
      }
    default:
      return {
        ...state,
        status: Status.LOADING
      }
  }
}

export default todoReducer
