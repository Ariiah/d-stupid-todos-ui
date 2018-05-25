import { TODOS_LISTED } from '../actions/todo-actions.js'

function TodoReducer(state = null, action) {
  const initialState = {}

  if (state){
    switch(action.type) {
      case TODOS_LISTED:
      // debugger
        return state
      default:
        return state
    }
  }
  else {
    return { ...initialState }
  }
}

export default TodoReducer
