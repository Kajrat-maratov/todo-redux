import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions'

const initialState = [
  {
    text: 'watch TV',
    complete: false,
  },
  { text: 'take a five', complete: false },
]

export const todolist_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,

        {
          text: action.payload,
          complete: false,
          id: action.id,
        },
      ]
    case TOGGLE_TODO:
      return state.map((todo, id) => {
        return id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      })
    case DELETE_TODO:
      return state.filter((todo, id) => {
        return id !== action.payload
      })

    default:
      return state
  }
}
