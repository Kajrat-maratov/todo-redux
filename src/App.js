import './App.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { todolist_reducer } from './store/reducers/index'
import TodoList from './components/TodoList'


const store = createStore(todolist_reducer)

function App() {

  return (
    <Provider store={store}>
  

      <TodoList />
    </Provider>
  )
}

export default App
