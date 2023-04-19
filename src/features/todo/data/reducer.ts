import Status from "../../../common/status"
import ACTION from "./actions"

interface TODO_ACTION {
  type: ACTION,
  payload: any
}

const initialState = {
	data: [],
	status: Status.IDLE
}

const todoReducer = (state = initialState, action: TODO_ACTION) => {
	switch(action.type) {
		case ACTION.ADD_TODO: 
			console.log('action add todo')
			break
		case ACTION.GET_LIST:
			console.log('action get list')
			break
	}
}

export default todoReducer
