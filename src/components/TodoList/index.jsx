import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoItem  from "../TodoItem";
import { addTodo } from "../../store/actions/";
import './TodoList.css'

const TodoList = ({ state, addTodo }) => {
  const [inputValue, setInputValuedos] = useState([]);

  return (
    <div style={styles}>
      <div >
        <input
          placeholder="Add..."
          value={inputValue}
          onChange={(e) => {
            setInputValuedos(e.target.value);
         
          }}
        />
        <button  className="addBtn" 
        onClick={() =>  addTodo(inputValue,setInputValuedos(''))}  >Add</button>
      </div>
      <ul>
        {state.map((todo, id) => {
          return <TodoItem todo={todo} key={id} id={id} />;
        })}
      </ul>
    </div>
  );
};

const styles = {
  width: "500px",
  margin: "0 auto",
};

const mapStatetoProps = (state) => ({
  state: state,
});

const mapDispathcToProps = (dispatch) => {
  return bindActionCreators(
    {
      addTodo,
    },
    dispatch
  );
};

export default connect(mapStatetoProps, mapDispathcToProps)(TodoList);
