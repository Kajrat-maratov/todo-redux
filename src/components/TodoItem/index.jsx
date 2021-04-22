import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../store/actions/'
import {deleteTodo} from '../../store/actions'
import './TodoItem.css'

const TodoItem = ({ todo, toggleTodo, id ,deleteTodo}) => {
    return <div className="block" >
        <span className="li" style={
            {
              
                textDecoration: todo.complete ? 'line-through' : 'none'
            }
        }>
            {todo.text}
        </span>
        <button className="complete"  onClick={() => toggleTodo(id)}>complete</button>
        <button  onClick={() => deleteTodo(id)}>delete</button>
    </div>
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
})
export default connect(null, mapDispatchToProps)(TodoItem)